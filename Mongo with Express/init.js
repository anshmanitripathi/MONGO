const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(()=>{
        console.log("Connection Successful");
    })
    .catch(err => console.log(err));

    async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

const allChats = [
    { from: "neha", to: "priya", msg: "i have to studey", created_at: new Date() },
    { from: "rahul", to: "amit", msg: "let's play cricket", created_at: new Date() },
    { from: "anita", to: "kiran", msg: "call me when free", created_at: new Date() },
    { from: "rohan", to: "sneha", msg: "i finished the assignment", created_at: new Date() },
    { from: "meena", to: "neha", msg: "join the class", created_at: new Date() },
    { from: "arjun", to: "priya", msg: "good luck for your exam", created_at: new Date() },
    { from: "kavita", to: "sonu", msg: "meet me at the library", created_at: new Date() },
    { from: "manish", to: "rohit", msg: "movie today evening?", created_at: new Date() },
    { from: "riya", to: "tanya", msg: "submit the form", created_at: new Date() },
    { from: "deepak", to: "varun", msg: "let’s start the project", created_at: new Date() }
];



Chat.insertMany(allChats);
