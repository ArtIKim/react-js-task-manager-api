const mogoose = require("mongoose");

const connectDB = (url) => {
    return mogoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;
