const fs = require(`fs`)





let reader = fs.readFile('basicData.csv',(err,data)=>{
  if(data){

    console.log(data.toString(`utf-8`))
    fs.writeFile(`testdata.txt`, data.toString(`utf8`), (err)=>{})
    // let container = ""
    // console.log(data)
    // fs.writeFile("somedata.txt",data,'utf-8',(err)=>{
    //   if(err){
    //     console.log(err)
    //   }
    // })
    // let somdata  = JSON.parse(JSON.stringify(data))
    // console.log(somdata)
  }
})

console.log(reader)

// fs.writeFile('parseData.json', )
