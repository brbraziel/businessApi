const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/webdev2', { useNewUrlParser: true });
mongoose.set('useCreateIndex', true) //stop showing DeprecationWarning: collection.ensureIndex is deprecated
mongoose.Promise = global.Promise;

module.exports = mongoose;