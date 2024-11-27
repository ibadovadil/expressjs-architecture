const mongoose = require('mongoose');

const username = "productshop";
const password = "productshop20241212";
const database = "productshop"

const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster.avhuy.mongodb.net/?retryWrites=true&w=majority&appName=${database}`);
        console.log("mongodb connect is successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;