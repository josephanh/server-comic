const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    // _id: { type: ObjectId }, // khóa chính
    chapterOfStory: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        // unique: true, // không được trùng
        trim: true, // bỏ khoảng trắng 2 đầu
        minlength: 3, // độ dài tối thiểu
        maxlength: 255, // độ dài tối đa
        default: 'No name' // giá trị mặc định
    },
    detailChapter: {type: Array}
});
module.exports = mongoose.models.chapter || mongoose.model('chapter', schema);
// chapter -----> chapters