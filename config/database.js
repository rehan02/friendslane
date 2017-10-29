const crypto=require('crypto').randomBytes(256).toString('hex');

module.exports= {
db:'friendslane',
uri: 'mongodb://localhost:27017/friendslane',
secret:'crypto'
}