
const mangaModel = require('./mangaModel');
const mangaService = require('./mangaService');
const chapterService = require('../chapter/chapterService');

const getAllManga = async () => {
    return await mangaService.getAllManga();
}

const getAllMangaBasic = async () => {
    try {
        return await mangaService.getAllMangaBasic();
    } catch (error) {
        throw error;
    }
}

const addNewManga = async (title, author, describe, image, category) => {
    try {
        await mangaService.addNewManga(title, author, describe, image, category)
    } catch (e) {
        console.log('add-new-manga-controller', e);
    }
}

const deleteManga = async (id) => {
    try {
        return await mangaService.deteteMangabyId(id);
    } catch (error) {
        throw error;
    }
}

const getMagaByIdWeb = async (id) => {
    try {
        return await mangaService.getMagaByIdWeb(id);
    } catch (error) {
        throw error;
    }
}

// danh cho mobile
const getMagaByIdMobile = async (id) => {
    try {
        return await mangaService.getMagaByIdMobile(id);
    } catch (error) {
        throw error;
    }
}

const updateMangaById = async (id, title, author, image, describe, reader, liked, category) => {
    try {
        return await mangaService.updateMangaById(id, title, author, image, describe, reader, liked, category)
    } catch (error) {
        console.log('Update manga error: ',error);
    }
}
const getMangaByQuery = async (keywords) => {
    try {
        return await mangaService.getMangaByQuery(keywords);
    } catch (error) {
        throw error;
    }
}

module.exports = { 
    getAllManga, 
    getMagaByIdWeb,
    getMagaByIdMobile,
    getMangaByQuery,
    deleteManga, 
    addNewManga, 
    updateMangaById,
    getAllMangaBasic
}