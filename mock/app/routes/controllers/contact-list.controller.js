var contacts = require('./contact-list.json');

var uniqid = require('uniqid');

exports.create = function(req, res) {
  var newContact = req.body;

  if(newContact.hasOwnProperty("firstName")&&
      newContact.hasOwnProperty("lastName")&&
      newContact.hasOwnProperty("status")&&
      newContact.hasOwnProperty("email") &&
      newContact.hasOwnProperty("mobileNo")){

  newContact.id = uniqid();

  contacts.push(newContact);

  console.log("--->After Post, contacts:\n" + JSON.stringify(contacts, null, 4));

  res.json(contacts);
  }
  else{
	  res.status(400).send({message : "bad request"});
  }
};

exports.findAll = function(req, res) {
    console.log("--->Find All: \n" + JSON.stringify(contacts, null, 4));

    res.json(contacts);
};


exports.update = function(req, res) {
  var id = parseInt(req.params.id);
  var updatedContact = req.body;

  if(updatedContact.hasOwnProperty("firstName")&&
        updatedContact.hasOwnProperty("lastName")&&
        updatedContact.hasOwnProperty("status")&&
        updatedContact.hasOwnProperty("email") &&
        updatedContact.hasOwnProperty("mobileNo")){

	      contacts.forEach(function(element, index){
        		    if(element.id === req.params.id) {
        			    if(element != null){
                      updatedContact.id = req.params.id;
                      contacts[index] = updatedContact;
                      res.json(contacts);
                  }
                  else{
                      res.json(contacts);
                      res.end("Don't Exist Contact:\n:" + JSON.stringify(contacts, null, 4));
                  }
                }
        });
  }
  else {
	    res.status(400).send({message : "bad request"});
	    console.log("bad request");
  }
};

exports.delete = function(req, res) {
	 var check= false;

	 contacts.forEach(function(element, index){
   		if(element.id === req.params.id) {
   			contacts.splice(index, 1);
   			check=true;
   		}
   });
   console.log("--->After deletion, contact list:\n" + JSON.stringify(contacts, null, 4) );
   	if(check){
   		  res.json(contacts);
   	}else{
   	    res.status(401).send({message : "provided id is not available"});
   	    check=false;
   	}
};
