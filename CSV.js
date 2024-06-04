const fs = require(`fs`)
const csv = require('csv-parser')

let container = [];





let reader = fs.readFile('basicData.csv',(err,data)=>{
  if(err){
    console.log(err)
  }
  console.log(data)
  // let parseData = JSON.parse(JSON.stringify(data))
  let parseData = JSON.parse(data)
  console.log(parseData)
  fs.writeFile(`somedata.json`,parseData, 'utf-8',(err)=>{
    if(err){
      console.log(err)
    } else {
      console.log(`process set`)
    }
  })
})

console.log(reader)

// fs.writeFile('parseData.json', )
