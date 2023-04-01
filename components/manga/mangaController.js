
const mangaService = require('./mangaService');

const getAllManga = async () => {
    return await mangaService.getAllManga();
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

const getMagaById = async (id) => {
    try {
        return await mangaService.getMagaById(id);
    } catch (error) {
        throw error;
    }
}


module.exports = { getAllManga, deleteManga, addNewManga, getMagaById}