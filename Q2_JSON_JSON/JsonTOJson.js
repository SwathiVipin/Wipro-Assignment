var jsonfile = require('jsonfile');//install jsonfile by---npm install jsonfile
// Source and target file paths
const file = 'Source.json'
const file1 = 'target.json'

jsonfile.readFile(file, function (err, obj) {
  if (err) console.error(err)
  obj.name='Wipro Ltd';
  console.dir(obj);
  

  jsonfile.writeFile(file1,obj,(err,data) =>{
      console.log("Writing Json file sucessfully done");
  });

});