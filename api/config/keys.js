const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    sessionKey: process.env.SESSION_KEY,
    isDevelopmentMode: process.env.NODE_ENV === 'development',
    jsonWebTokenSecret: process.env.JSON_WEB_TOKEN_SECRET
};