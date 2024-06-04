const http = require(`http`)
const fs = require(`fs`)

fetch(`https://infuser.odcloud.kr/oas/docs?namespace=15039555/v1`)
.then((data)=>{
  // let parseData = JSON.stringify(data)
  // console.log(parseData)

  // let container = {};

  console.log(data)




  // // fs.writeFile(`parseData.json`, data, 'utf-8',(err)=>{
  // //   if(err){
  // //     console.log(err)
  // //   }else{
  // //     console.log(`data SET!`)
  // //   }
  // })
})









let server = http.createServer((req, res)=>{
  
})
