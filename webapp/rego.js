var db = require('./database.js');

var counter = 0;
var kids = 0;

module.exports = {
  initialise: function() {
// set counter and kids from db
    db.getRecord({id:'counter'},'config')
    .then(
      function fullfilled(result) {
        counter = result;
      },
      function rejected(reason) {
        console.log(reason);
      }
    );
  },
  updateCounter: function(counter) {
// update counter on db

  },
  updateKids: function(kids) {
// update kids on db

  },
  createRego: function(json) {
    var json = json;
    counter = counter + 1;
    updateCounter(counter);

    kids = kids + json.child.length;
    updateKids(kids);
    console.log(kids);

    return {
      saveData: function() {
        var rc = 0;
        var data = '';
        var childData = '';

        json.parent1.id = counter;

// save db with record

        return rc;
      }
    };
  },
  createGetter: function() {
    return {
      getData: function(id) {
        var json = {};
        return new Promise( function pr(resolve,reject) {
// get data from db
// call either resolve or reject
        });
      }
    };
  },
  getNumberOfChildren: function() {
    return kids;
  },
  saveEmail: function(json) {
// save to db

    return true;
  }
};
