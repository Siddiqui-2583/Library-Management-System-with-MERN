import mongoose from 'mongoose'

const bookSchema = mongoose.Schema({
    title: String,
    writer: String,
    category: String,
    almira: {
        type: Number,
        default:0
    },
    shelf: {
        type: Number,
        default:0
    },
    publisher: String,
    isbn:{
        type: Number,
        default:0
    },
    price:{
        type: Number,
        default:0
    },

})

const book = mongoose.model('book', bookSchema)

export default book