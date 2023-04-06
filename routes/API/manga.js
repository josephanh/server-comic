var express = require('express');
var router = express.Router();
const mangaController = require('../../components/manga/mangaController');
const chapterController = require('../../components/chapter/chapterController');
const { authenApp } = require('../../middleware/Authen');

// http://localhost:3000/api/news/chart
router.get('/chart', async function (req, res, next) {
    // hiển thị trang bảng dữ liệu
    res.render('manga/charts')
})

// api lay tat cac cac truyen - phai co token
router.get('/', [authenApp], async (req, res, next) => {
    try {
        const mangas = await mangaController.getAllManga();
        res.status(200).json(mangas);
    } catch (error) {
        res.status(400).json({});
    }
})

router.get('/getallmanga', async (req, res, next) => {
    try {
        const mangas = await mangaController.getAllMangaBasic();
        res.status(200).json(mangas);
    } catch (error) {
        res.status(400).json({});
    }
})

// api lay tat ca cac truyen
router.get('/web-sever-no-token', async (req, res, next) => {
    try {
        const mangas = await mangaController.getAllManga();
        res.status(200).json({ mangas });
    } catch (error) {
        res.status(400).json({});
    }
})

// api lay chi tiet chapter by id
// /api/manga/getchapter/...
router.get('/getchapter/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await chapterController.getChapterOfStory(id);
        return res.status(200).json(result);
    } catch (error) {

    }
})


// lấy truyện theo ID for web and mobiel when call api detail
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const mangas = await mangaController.getMagaByIdWeb(id);
        res.status(200).json(mangas);
    } catch (error) {
        res.status(400).json({});
    }
})

// api getmanga by id no detail chapter for mobile
router.get('/getmanga/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await mangaController.getMagaByIdMobile(id);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return {};
    }
})

// search manga
// http://localhost:3000/api/manga/search?keyword=Van%20Nguyen
router.get('/search/all', async (req, res, next) => {
    try {
        const { keyword } = req.query;
        const result = await mangaController.getMangaByQuery(keyword);
        // if (result) {
        //     console.log(result.category.title);
        // }
        return res.status(200).json(result);
    } catch (error) {
        console.log('Search manga error API', error);
        return res.status(500).json({})
    }
})


// các API Test

router.get('/web-sever-no-token/detail/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        const mangas = await mangaController.getMagaByIdWeb(id);
        res.status(200).json(mangas);
    } catch (error) {
        res.status(400).json({});
    }
})


// http://localhost:3000/api/manga/check-chapter/642af678bf3377b84b0b02db/2

// add chapter vào detailChapter
router.get('/check-update-chapter/:id/', async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, numberChapter, content } = req.body;
        console.log(id, title, numberChapter, content);
        const chapter = await chapterController.addNewChapterOfStory(id, title, numberChapter, content);
        return res.status(200).json({ status: 200, "result": chapter });
    } catch (error) {
        console.log(error);
    }
})


// them mot truyen moi
router.post('/', async (req, res, next) => {
    try {
        const { title, author, describe, image, category } = req.body;
        await mangaController.addNewManga(title, author, describe, image, category);
        res.status(200).json({ result: true });
    } catch (error) {
        res.status(400).json({ result: false });
    }
})

// tim kiem san pham
// http://localhost:3000/api/product/search/name?keyword=acb
// router.get('/search/name', async (req, res, next) => {
//     try {
//         const { keyword } = req.query;
//         const products = await mangaController.search(keyword);
//         return res.status(200).json({ products });
//     } catch (error) {
//         console.log('Search product error API', error);
//         return res.status(500).json({})
//     }
// })



module.exports = router;