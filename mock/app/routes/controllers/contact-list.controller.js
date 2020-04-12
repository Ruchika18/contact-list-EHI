var contacts = require('./contact-list.json');

var uniqid = require('uniqid');

exports.create = function(req, res) {
	console.log("aaaaaa");
  var newContact = req.body;

  newContact.id = uniqid();
  console.log(" uniqid()   ", uniqid());
  contacts.push(newContact);
  console.log("--->After Post, customers:\n" + JSON.stringify(contacts, null, 4));
  res.json(contacts);
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(contacts, null, 4));
    res.json(contacts);
};


exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedContact = req.body;
  console.log('body', req.body);
  console.log('param', req.params.id);
  for( var i=0; i< contacts.length; i++) {
		if(contacts[i].id === req.params.id) {
			if(contacts[i] != null){
				contacts[i] = updatedContact;
				res.json(contacts);
			}else{
				res.end("Don't Exist Customer:\n:" + JSON.stringify(contacts, null, 4));
			}
			break;
		}
	};
};

exports.delete = function(req, res) {
	contacts.forEach(function(element, index){
		if(element.id === req.params.id) {
			contacts.splice(index, 1);
		}
	});
    console.log("--->After deletion, contact list:\n" + JSON.stringify(contacts, null, 4) );
    res.json(contacts);
};
