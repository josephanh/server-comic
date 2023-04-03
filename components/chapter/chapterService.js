const chapterModel = require("./chapterModel")

const getChapterOfStory = async (id) => {
    try {
        let chapters = await chapterModel.findById(id);
        return chapters;
    } catch (error) {
        throw error;
    }
}
// them mot document chapter de them vao story
const addNewChapter = async () => {
    try {
        const chapters = {
            chapterOfStory: "new chapter of name null",
            detailChapter: []
        }
        const newChapters = await chapterModel.create(chapters);
        return newChapters;
    } catch (error) {
        console.log(error);
        return false;
    }
}
// cap nhat detailChapter trong chapters
const addNewChapterOfStory = async (id, title, numberChapter, content) => {
    // console.log(id, title, numberChapter, content);
    try {
        let chapter = await chapterModel.findById(id);
        
        if (chapter) {
            let detailChapter = chapter.detailChapter;
            const newChapterOfDetail = {
                title: title ? title : "No title",
                numberChapter: numberChapter ? numberChapter : detailChapter.length + 1,
                content: content ? content : "No content",
            }
            detailChapter.push(newChapterOfDetail);
            chapter.detailChapter = detailChapter;
            await chapter.save();
            return true;
        }
        return false;
    } catch (error) {
        console.log(error);
        return false;
    }
}

const updateContentChapter = async (id, numberChapter, title, content) => {
    try {
        let contentChapter = await chapterModel.findById(id)[numberChapter];
        if (contentChapter) {
            contentChapter.title = title ? title : contentChapter.title;
            contentChapter.content = content ? content : contentChapter.content;
            await contentChapter.save();
            return true;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}


module.exports = { getChapterOfStory, addNewChapter, updateContentChapter, addNewChapterOfStory }