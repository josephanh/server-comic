const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const schema = new Schema({
    id: { type: ObjectId }, // khóa chính
    title: {
        type: String, // kiểu dữ liệu
        required: true, // bắt buộc phải có
        unique: true, // không được trùng
        trim: true, // bỏ khoảng trắng 2 đầu
        minlength: 3, // độ dài tối thiểu
        maxlength: 50, // độ dài tối đa
        default: 'No name' // giá trị mặc định
    },
    author: {type: String},
    image: {type: String},
    describe: {type: String},
    reader: {type: Number},
    
    liked: {type: Number},
    // chapter: {type: Buffer},
    category: {type:  String},
    dateCreate: {type: String},
});
module.exports = mongoose.models.story || mongoose.model('story', schema);
// story -----> stories