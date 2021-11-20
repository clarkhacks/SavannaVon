var execProcess = require("./exec_process.js");
const fs = require('fs')
const content = 'Some content!'
fs.writeFile('../posts/demo.md', content, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})
execProcess.result("sh gitpush.sh", function(err, response){
    if(!err){
        console.log(response);
    }else {
        console.log(err);
    }
});