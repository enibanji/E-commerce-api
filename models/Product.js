const mongoose = require('mongoose');


const productSchema = new mongoose.Schema ({

    name:{
        type: String,
        trim: true,
        required: [true, 'Please provide name' ],
        maxlength: [100, 'Name cannot be more than 100 characters']
    },
    price:{
        type: Number,
        required: [true, 'Please provide product price' ],
        default: 0,
    },
    description:{
        type: String,
        required: [true, 'Please provide product description'],
        maxlength: [1000, 'Name cannot be more than 1000 characters']
    },
    image:{
        type: String,
        default: '/uploads/example.jpeg'
    },
    category:{
        type: String,
        required: [true, 'Please provide product category'],
        enum: ['office', 'kitchen', 'bedroom'],
    },
    company:{
        type: String,
        required: [true, 'Please provide product company'],
        enum:{
            values: ['ikea', 'liddy', 'marcos'],
            message: '{VALUE} is not supported',
        } 
    },
    colors:{
        type: [String],
        default:['#222'],
        required: true,
    },
    featured:{
        type: Boolean,
        default: false,
    },
    freeShipping:{
        type: Boolean,
        default: false,
    },
    inventory:{
        type: Number,
        required: true,
        default: 15,
    },
    averageRating:{
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user',
        required: true,
    }


}, {timestamps: true})


module.exports = mongoose.model('product', productSchema)