var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema =  new mongoose.Schema({
	name: {type:String, required:[true,'Name is required'], minlength: [3, 'Should be longer than 3 characters'], unique:true },
	_list: [{type: Schema.Types.ObjectId, ref: 'List'}]
}, {timestamps:true})
mongoose.model('User', UserSchema);
