var express = require('express');
var router = express.Router();
const mangaController = require('../../components/manga/mangaController');
const categoryController = require('../../components/category/categoryController')
const chapterController = require('../../components/chapter/chapterController');

const middleWare = require('../../middleware/uploadFile');
const uploadFile = require('../../middleware/uploadFile');
const CONFIG = require('../../config/config');
const auth = require('../../middleware/Authen');
const { ref, getDownloadURL, uploadBytesResumable, getStorage, deleteObject } = require('firebase/storage');

// hiện thị bảng sản phẩm
// http://localhost:3000/cpanel/manga/data-table
router.get('/data-table', [auth.authenWeb], async function (req, res, next) {
    const resuflt = await mangaController.getAllManga();
    // console.log(resuflt);
    // hiển thị trang bảng dữ liệu
    res.render('manga/data-table', { data: resuflt })
})


// xử lí thêm mới
router.post('/form-edit/new', [auth.authenWeb, uploadFile.single('image')], async function (req, res, next) {
    try {
        let { body, file } = req;
        if (file) {
            const date = Date.now();
            const fileName = `image---${date}`;
            const storage = getStorage();
            const storageRef = ref(storage, fileName);
            const metadata = {
                contentType: file.mimetype,
            }
            const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
            const downloadUrlImage = await getDownloadURL(snapshot.ref)
            console.log(downloadUrlImage);
            body = { ...body, image: { name: fileName, url: downloadUrlImage } }
        }
        const { title, author, describe, image, category } = body;
        // console.log(title, author, describe, image, category);
        await mangaController.addNewManga(title, author, describe, image, category);
        res.redirect('/cpanel/manga/data-table')
    } catch (error) {
        console.log('addnew ', error);
    }
})
// xử lí xóa
// http://localhost:3000/cpanel/manga/:id/delete
router.get('/:id/delete', [auth.authenWeb], async function (req, res, next) {
    try {
        const { id } = req.params;
        console.log(id);
        await mangaController.deleteManga(id);
        res.json({ status: true })
    } catch (error) {
        res.json({ status: false })
    }
})
// hiện thị trang thêm mới
// http://localhost:3000/cpanel/manga/form/form-editer
router.get('/form/form-editer', [auth.authenWeb], async function (req, res, next) {
    const categories = await categoryController.getAllCategory();
    // console.log(categories);
    // hiển thị trang bảng thêm dữ liệu dữ liệu
    res.render('manga/form-editer', { categories })
})
// hiện thị trang update manga -> 
router.get('/:id/detailmanga/edit', [auth.authenWeb], async function (req, res, next) {
    const { id } = req.params;
    const categories = await categoryController.getAllCategory();
    const manga = await mangaController.getMagaById(id);
    // console.log(manga);
    for (let i = 0; i < categories.length; i++) {
        categories[i].selected = false;
        if (categories[i]._id.toString() == manga.category.toString()) {
            categories[i].selected = true;
            // console.log("catergory: ",categories[i]);
        }
    }
    res.render('manga/detailManga', { manga, categories });
})
// xu li cap nhat
router.post('/:id/detailmanga/edit', [auth.authenWeb, uploadFile.single('image')], async function (req, res, next) {
    try {
        let { id } = req.params;
        let { body, file } = req;
        if (file) {
            const date = Date.now();
            const fileName = `image---${date}`;
            const storage = getStorage();
            const storageRef = ref(storage, fileName);
            const metadata = {
                contentType: file.mimetype,
            }
            const snapshot = await uploadBytesResumable(storageRef, file.buffer, metadata);
            const downloadUrlImage = await getDownloadURL(snapshot.ref)
            // console.log(downloadUrlImage);
            body = { ...body, image: { name: fileName, url: downloadUrlImage } }
            let image = await mangaController.getMagaById(id);
            const desertRef = ref(storage, `${image.image.name}`);
            deleteObject(desertRef).then(() => {
                // File deleted successfully
                console.log('File deleted successfully');
            }).catch((error) => {
                // Uh-oh, an error occurred!
                console.log('Uh-oh, an error occurred!', error);
            });
        }

        const { title, author, describe, image, category, reader, liked, } = body;
        const isUpdate = await mangaController.updateMangaById(id, title, author, image, describe, reader, liked, category);

        res.redirect('/cpanel/manga/data-table')
    } catch (error) {
        console.log('addnew ', error);
    }
})

router.get('/add/story/chapter', async (req, res, next) => {
    try {
        const result = await chapterController.addNewChapter();
        return res.status(200).json({ result: result });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
})
router.post('/add/story/chapter/edit/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, numberChapter, content } = req.body;
        console.log(id, title, numberChapter, content);
        const result = await chapterController.addNewChapterOfStory(id, title, numberChapter, content);
        return res.status(200).json({ status: result });
    } catch (error) {
        console.log(error);
        return res.status(400).json({ result: false });
    }
})


module.exports = router;