var json2csv = require('json2csv');

const fields =
  ['parent1.id','parent1.firstName','parent1.lastName','parent1.mobile','parent1.email','parent1.address',
   'parent2.firstName','parent2.lastName','parent2.mobile','parent2.email',
   'consent.terms','consent.firstAid','consent.privacy','consent.refund','waitlist'
  ];

  const childFields =
    ['id','firstName','lastName','birthdate','gender','school','year','friend',
     'medicare1','medicare2','medicalInfo','dietaryInfo','medication','waitlist'];

function convert(json) {
  return new Promise( function pr(resolve,reject) {
    console.log('json2csv');
    var data = json2csv({
      data: json,
      fields: fields,
      hasCSVColumnTitle: false
    });
    console.log(data);
    if (data) {
      resolve(data);
    } else {
      reject('No csv');
    };
  });
}

function convertChild(json) {
  return new Promise( function pr(resolve,reject) {
    var data = json2csv({
      data: json,
      fields: childFields,
      hasCSVColumnTitle: false
    });
    console.log(data);
    if (data) {
      resolve(data);
    } else {
      reject('No csv');
    };
  });
}

var utility = {
  convert: convert,
  convertChild: convertChild
};

module.exports = utility;
