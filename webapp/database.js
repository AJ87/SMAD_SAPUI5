var MongoClient = require('mongodb').MongoClient

// Connection URL
var url = 'mongodb://localhost:27017/smad_db';

var database = function() {
  var _db = null;
  var _collection = null;

  var _close_db = function() {
    console.log("Closing database");
    _db.close();
    _db = null;
  }

  var _setCollection = function(table) {
    console.log("Set Collection");
    _collection = _db.collection(table);
  }

  var _insertDocument = function(data) {
    return new Promise( function pr(resolve,reject) {
      console.log("Insert Document");
      _collection.insertOne(data, function(err, result) {
        if (err) {
          console.log("Error inserting document: " + data);
          //throw err;
          reject(err);
        } else {
          _close_db();
          resolve(result.ops);
        }
      });
    });
  }

  var _findDocument = function(key) {
    return new Promise( function pr(resolve,reject) {
      console.log("Find Document");
      _collection.find(key).toArray(function(err, docs) {
        if (err) {
          console.log("Error finding document: " + data);
          //throw err;
          reject(err);
        } else {
          _close_db();
          resolve(docs);
        }
      });
    });
  }

  var _deleteDocument = function(key) {
    return new Promise( function pr(resolve,reject) {
      console.log("Delete Document");
      _collection.deleteOne(key, function(err, result) {
        if (err) {
          console.log("Error deleting document: " + data);
          //throw err;
          reject(err);
        } else {
          _close_db();
          resolve(result.result.n);
        }
      });
    });
  }

  var _connect = function(table, operation, data) {
    return new Promise( function pr(resolve,reject) {
      console.log("Connecting to database...");
      // Use connect method to connect to the database
      MongoClient.connect(url, function(err, db) {
        if (err === null) {
          console.log("Connected successfully to database");
          _db = db;
          _setCollection(table);
          operation(data)
          .then(
            function fullfilled(result) {
              resolve(result);
            },
            function rejected(reason) {
              reject(reason);
            }
          );
        } else {
          console.log("Error connecting to database");
          //throw err;
          reject(err);
        }
      });
    });
  }

  return {
    getCollection: function(table) {
      return new Promise( function pr(resolve,reject) {
        console.log("Get Collection");
        _connect(table, _findDocument, {})
        .then(
          function fullfilled(result) {
            resolve(result);
          },
          function rejected(reason) {
            reject(reason);
          }
        );
      });
    },
    getRecord: function(key, table) {
      return new Promise( function pr(resolve,reject) {
        console.log("Get Record");
        _connect(table, _findDocument, key)
        .then(
          function fullfilled(result) {
            console.log(result);
            if (result[0]) {
              resolve(result[0]);
            } else {
              reject("No record");
            };
          },
          function rejected(reason) {
            reject(reason);
          }
        );
      });
    },
    createRecord: function(key, data, table) {
      return new Promise( function pr(resolve,reject) {
        console.log("Create Record");
        getRecord(key, table)
        .then(
          function fullfilled(result) {
            console.log("Record already exists with same key");
            reject("Record already exists with same key");
          },
          function rejected(reason) {
            _connect(table, _insertDocument, data)
            .then(
              function fullfilled(result) {
                resolve(result);
              },
              function rejected(reason) {
                reject(reason);
              }
            );
          }
        );
      });
    },
    updateRecord: function(key, data, table) {
      return new Promise( function pr(resolve,reject) {
        console.log("Update Record");
        deleteRecord(key, table)
        .then(
          function fullfilled(result) {
            _connect(table, _insertDocument, data)
            .then(
              function fullfilled(result) {
                resolve(result);
              },
              function rejected(reason) {
                reject(reason);
              }
            );
          },
          function rejected(reason) {
            reject(reason);
          }
        );
      });
    },
    deleteRecord: function(key, table) {
      return new Promise( function pr(resolve,reject) {
        console.log("Delete Record");
        _connect(table, _deleteDocument, key)
        .then(
          function fullfilled(result) {
            resolve(result);
          },
          function rejected(reason) {
            reject(reason);
          }
        );
      });
    }
  }
}();

module.exports = database;
