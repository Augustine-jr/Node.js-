const fs = require('fs')

fs.readFile('hello.txt',(err, data)=>{
  if(err){
   console.error(err.stack)
    return
  }
  console.log(data.toString())
})

fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});