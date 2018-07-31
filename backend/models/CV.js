var mongoose = require('mongoose');

var CvSchema = new mongoose.Schema({
    _cv: {
        type: Map,
        of: String
        
        
    }
});
mongoose.model('CV', CvSchema);