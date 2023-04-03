const { model } = require('mongoose');
const chapterService = require('./chapterService')

const getChapterOfStory = async () => {
    try {
        return await chapterService.getChapterOfStory(id);
    } catch (error) {
        throw error;
    }
}

const updateContentChapter = async (id, numberChapter, title, content) => {
    try {
        return await chapterService.updateContentChapter(id, numberChapter, title, content);
    } catch (error) {
        console.log('Update chapter error: ',error);
        throw error;
    }
}

const addNewChapter = async () => {
    try {
        return await chapterService.addNewChapter();
    } catch (error) {
        return false;
        throw error;
    }
}

const addNewChapterOfStory = async (id, title, numberChapter, content) => {
    try {
        const chapter = await chapterService.addNewChapterOfStory(id, title, numberChapter, content);
        console.log(chapter);
        return chapter;
    } catch (error) {
        return false;
        throw error;
    }
}

module.exports = {getChapterOfStory, addNewChapter, updateContentChapter, addNewChapterOfStory}