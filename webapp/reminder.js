'use strict';
var email_sender = require('./email.js');
var db = require('./database.js');

// get records from db
var call = function() {
  db.getCollection(null,'emails')
  .then(
    function fullfilled(result) {
      for (var email of result) {
        email_sender.send_reminder({email:email.email});
      }
    },
    function rejected(reason) {
      console.log(`Could not get emails: ${reason}`);
    }
  );
}

// put in a wait so email.js will have password before we call below
setTimeout(call, 2000);
