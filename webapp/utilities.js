var Converter = require('csvtojson').Converter;

module.exports = {
  csv2json: function(csv, jsonFields, id, callback) {
    var converter = new Converter({
      delimiter: ',',
      noheader: true,
      headers: jsonFields
    });

    if (id) {
      converter.preProcessLine=function(line,lineNumber){
        var data = line.split(',');
        if (data[0] !== id){
          line = '';
        }
        return line;
      }
    }

    converter.fromString(csv, function(err, result) {
      if (err) {
        console.log('Error converting csv');
        return {};
      } else {
        console.log(result);
        callback(result);
        return result;
      }
    });

  }
};
