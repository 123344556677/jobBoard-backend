const config = require('config.json');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const connectionOptions = { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false };
mongoose.connect(process.env.MONGODB_URI, connectionOptions)
.then(() => {
    console.log('MongoDB connection successful');
})
.catch(error => {
    console.error('MongoDB connection error:', error);
});
// mongoose.connect(process.env.MONGODB_URI || config.connectionString, connectionOptions);
mongoose.Promise = global.Promise;

module.exports = {
    Account: require('accounts/account.model'),
    RefreshToken: require('accounts/refresh-token.model'),
    isValidId
};

function isValidId(id) {
    return mongoose.Types.ObjectId.isValid(id);
}