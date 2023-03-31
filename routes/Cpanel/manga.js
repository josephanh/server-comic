var express = require('express');
var router = express.Router();
const mangaController = require('../../components/manga/mangaController');
const categoryController = require('../../components/category/categoryController')

const middleWare = require('../../middleware/uploadFile');
const uploadFile = require('../../middleware/uploadFile');
const CONFIG = require('../../config/config');
const auth = require('../../middleware/Authen');

// http://localhost:3000/cpanel/manga/table/data-table
router.get('/data-table', [auth.authenWeb], async function (req, res, next) {
    const resuflt = await mangaController.getAllNews();
    // hiển thị trang bảng dữ liệu
    res.render('manga/data-table', { data: resuflt })
})


// xử lí thêm mới
router.post('/form-edit/new', [auth.authenWeb, uploadFile.single('image'),], async function (req, res, next) {
    try {
        let { body, file } = req;
        if (file) {
            let image = `${CONFIG.CONSTANTS.config}:3000/images/${file.filename}`;
            body = { ...body, image: image }
        }
        const { title, author, describe, image, category } = body;

        console.log(title, author, describe, image, category);
        await mangaController.addNewManga(title, author, describe, image, category);
        res.redirect('/cpanel/manga/data-table')
    } catch (error) {
        console.log('addnew ', error);
    }
})

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

// http://localhost:3000/cpanel/manga/form/form-editer
router.get('/form/form-editer', [auth.authenWeb], async function (req, res, next) {
    const categories = await categoryController.getAllCategory();
    // console.log(categories);
    // hiển thị trang bảng thêm dữ liệu dữ liệu
    res.render('manga/form-editer', { categories })
})

router.get('/:id/detailmanga/edit', [auth.authenWeb], async function (req, res, next) {
    const { id } = req.params;
    const manga = await mangaController.getMagaById(id);
    console.log(manga);
    res.render('manga/detailManga', {manga});
})


module.exports = router;