const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true,
        maxLength : 20,
    },

    author : {
        type: String,
    },

    price: {
        type: Number,
        min : 1,
    },

    discount : {
        type : Number,
        default : 0,
    },

    category : {
        type : String,
        enum : [ "fiction" , "non-fiction"],
    },

    genere : {
        type  : [String],
    }
})

const Book = mongoose.model("Book", bookSchema);

let book1 = new Book({
    title : "MAthematics",
    author : "R.D Sharma",
    price : 400,
    category : "non-fiction",
    genere : ["maths" , "basics"],
});

book1.save()
    .then((res)=>{
        console.log(res);
    })
    .catch((err)=> {
        console.log(err)
    });




