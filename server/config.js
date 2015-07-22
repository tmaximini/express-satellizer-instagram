module.exports = {
    db: 'localhost',
    clientSecret: process.env.clientSecret || 'clientSecret',
    tokenSecret: process.env.tokenSecret || 'a hard to guess string'
};