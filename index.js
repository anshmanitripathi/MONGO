const mongoose = require('mongoose');

main()
    .then(()=>{
        console.log("connection successful");
    })
    .catch((err)=>console.log(err));
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
}); 

const User = mongoose.model("User", userSchema);

// const user1 = new User({
//     name : 'adam',
//     email : "adm@xyz",
//     age:48
// })

// user1.save()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=> console.log(err));

// User.insertMany([
//     {name:"tony", email : "tony@xyz", age:43},
//     {name:"sahil", email : "sahil@xyz", age:21},
//     {name:"sweksha", email : "sweksha@xyz", age:22}
// ])
// .then((data)=>{
//     console.log(data);
// })

// User.find()
//     .then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// User.find({age: {$gt : 25}})
//     .then((res)=>{
//         console.log(res[0]);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// User.find({age: {$gt : 25}})
//     .then((res)=>{
//         console.log(res[0].name);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// User.findOne({age: {$gt : 25}})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// User.findById('67f286b3ec0469a280b6db45')
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// User.updateOne({name: "sweksha"}, { age : 23})
//             .then((res)=>{
//                 console.log(res);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })

// User.findOneAndUpdate({name: "sweksha"}, { age : 33})
//             .then((res)=>{
//                 console.log(res);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })

// User.findOneAndUpdate({name: "sweksha"}, { age : 93}, {new : true})
//             .then((res)=>{
//                 console.log(res);
//             })
//             .catch((err)=>{
//                 console.log(err);
//             })

// User.findByIdAndUpdate('67f286b3ec0469a280b6db45' , {age : 56} , {new : true})
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })       

// User.deleteOne({name : "adam"})
//             .then((res) => {
//                 console.log(res);
//             });

// User.findOneAndDelete({name : "tony"})
//             .then((res) => {
//                 console.log(res);
//             });

// User.findByIdAndDelete('67f287f01e9da38b0415684a')
//             .then((res) => {
//                 console.log(res);
//             });



 