var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ListSchema = new mongoose.Schema({
	_user: {type: Schema.Types.ObjectId, ref: 'User'},
	title : {type: String, required: [true, 'title is required'], minlength: [5, 'Should be atleast 5 characters']},
  descrip: {type:String, required: [true, 'description is required'], minlength: [10, 'Should be atleast 10 characters']},
	taggedperson:{type: String}
}, {timestamps: true});
mongoose.model('List', ListSchema);
