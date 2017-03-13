var db = require('./database.js');

var counter = {id:'counter',
               counter:0};
var kids = {id:'kids',
            kids:0};

function updateCounter() {
// update counter on db
  db.updateRecord({id:'counter'},counter,'config')
  .then(
    function fullfilled(result) {
      console.log(`counter updated with ${counter.counter}`);
      console.log(counter.counter);
    },
    function rejected(reason) {
      console.log(`failed to update counter: ${reason}`);
    }
  );
}
function updateKids() {
// update kids on db
  db.updateRecord({id:'kids'},kids,'config')
  .then(
    function fullfilled(result) {
      console.log(`kids updated with ${kids.kids}`);
    },
    function rejected(reason) {
      console.log(`failed to update kids: ${reason}`);
    }
  );
}

module.exports = {
  initialise: function() {
// set counter and kids from db
    db.getRecord({id:'counter'},'config')
    .then(
      function fullfilled(result) {
        console.log(`initialise counter: ${result.counter}`);
        counter.counter = result.counter;
      },
      function rejected(reason) {
        console.log(reason);
      }
    );

    db.getRecord({id:'kids'},'config')
    .then(
      function fullfilled(result) {
        console.log(`initialise kids: ${result.kids}`);
        kids.kids = result.kids;
      },
      function rejected(reason) {
        console.log(reason);
      }
    );
  },
  createRego: function(json) {
    var json = json;
    counter.counter = counter.counter + 1;
    updateCounter();

    kids.kids = kids.kids + json.child.length;
    updateKids();
    console.log(kids.kids);

    return {
      saveData: function() {
        var rc = 0;
        var data = '';
        var childData = '';

        json.parent1.id = counter.counter;

// save db with record
        return new Promise( function pr(resolve,reject) {
          db.createRecord({id:counter.counter},json,'regos')
          .then(
            function fullfilled(result) {
              console.log(`saved record number ${counter.counter}`);
              resolve(result);
            },
            function rejected(reason) {
              console.log(reason);
              reject(reason);
            }
          );
        });
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
          db.getRecord({id:id},'regos')
          .then(
            function fullfilled(result) {

            },
            function rejected(reason) {

            }
          );
        });
      }
    };
  },
  getNumberOfChildren: function() {
    return kids.kids;
  },
  saveEmail: function(json) {
// save to db
    return new Promise( function pr(resolve,reject) {
      db.createRecord(json,json,'emails')
      .then(
        function fullfilled(result) {
          console.log(`saved email: ${json.email}`);
          resolve(result);
        },
        function rejected(reason) {
          console.log(`email not saved: ${reason}`);
          resolve(reason);
        }
      );
    });
  }
};
