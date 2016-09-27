var fs = require('fs');
var ReadWriteLock = require('rwlock');
var json2csv = require('json2csv');
var utilities = require('./utilities.js');

var counter = 4;
const file = '../../registrations/regos.csv';
const childFile = '../../registrations/child.csv';
var lock = new ReadWriteLock();

const fields =
  ['parent1.id','parent1.firstName','parent1.lastName','parent1.mobile','parent1.email','parent1.address',
   'parent2.firstName','parent2.lastName','parent2.mobile','parent2.email',
   'consent.terms','consent.firstAid','consent.privacy','consent.refund'
  ];
const fieldNames =
  ['id','First Name','Last Name','Mobile','Email','Address',
   'First Name','Last Name','Mobile','Email',
   'Terms','First Aid','Privacy','Refund'
  ];

const childFields =
  ['id','firstName','lastName','birthdate','gender','school','year','friend',
   'medicare1','medicare2','medicalInfo','dietaryInfo','medication'];
const childFieldNames =
  ['id','First Name','Last Name','Birthdate','Gender','School','Year','Friend',
   'Medicare Card','Number on Card','Medical Info','Dietary Info','Medication'];

module.exports = {
  createRego: function(json) {
    var json = json;
    counter = counter + 1;

    return {
      saveData: function() {
        var rc = 0;
        var data = '';
        var childData = '';

        json.parent1.id = counter;

        data = json2csv({
          data: json,
          fields: fields,
          hasCSVColumnTitle: false
        });

        data = data + '\n';

        var children = json.child;
        for (var i = 0; i < children.length; i++) {
          children[i].id = counter;
          var date = new Date(children[i].birthdate);
          children[i].birthdate = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
        }

        childData = json2csv({
          data: json.child,
          fields: childFields,
          hasCSVColumnTitle: false
        })

        childData = childData + '\n';

        lock.writeLock(function(release){
          fs.appendFile(file, data, function(err) {
            if (err) {
              console.log('Error writing to file');
              console.log(data);
              var newFile = '../../registrations/rego' + counter + '.csv';
              fs.writeFile(newFile, data, function(err){
                console.log('Error creating seperate file');
              });
            } else {
              console.log('Successfully written to file');
            }
          });

          release();
        });

        lock.writeLock('childLock', function(release){
          fs.appendFile(childFile, childData, function(err) {
            if (err) {
              console.log('Error writing to file');
              console.log(childData);
              var newChildFile = '../../registrations/child' + counter + '.csv';
              fs.writeFile(newChildFile, childData, function(err){
                console.log('Error creating seperate file');
              });
            } else {
              console.log('Successfully written to child file');
            }
          });

          release();
        });

        return rc;
      }
    };
  },
  createGetter: function() {
    return {
      getData: function(id, callback) {
        var json = {};

        if (id) {
          lock.readLock('childLock', function(release) {
            fs.readFile(childFile, 'utf-8', function(err, data) {
              if (err) {
                console.log('Error reading file');
              } else {
                var json = utilities.csv2json(data, childFields, id, callback);
              }
              release();
            });
          });

        } else {
          lock.readLock(function(release) {
            fs.readFile(file, 'utf-8', function(err, data) {
              if (err) {
                console.log('Error reading file');
              } else {
                json = utilities.csv2json(data, fields, null, callback);
              }
              release();
            });
          });
        }
      }
    };
  }
};
