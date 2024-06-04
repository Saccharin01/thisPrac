const http = require(`http`)
const fs = require(`fs`)

 fetch('https://api.odcloud.kr/api/15039555/v1/uddi:51c01502-2852-48f8-8382-b8c47f5240f7?page=1&perPage=10&serviceKey=Me%2FMuO55x%2B9wjLDeYl9RoSbEbVNZuF1eg4GGtNtw0ezd8EzDfprXxSxoRQPRSxrKf45kzYf3jCWnPGyQNh2MIQ%3D%3D')
.then((res)=>{
  let data = res.json()
  return data 
})
.then((data)=>{
  console.log(data)
  console.log(typeof(data))
  let sumdata = JSON.stringify(data, null, 2)
  console.log(typeof(sumdata))
  fs.writeFile('parseJson.json', sumdata, 'utf-8',(err)=>{
    if(err){
      console.log(err)
    } else {
      console.log(`Process done!`)
    }
  })
})


function createserver(reqMethod, reqUrl, headerData, writeData){
  
  const server = http.createServer((req,res)=>{
    if(req.method === `${reqMethod}`){
      if(req.url === `${reqUrl}`){
        res.writeHead(`${headerData}`)
        res.write(`${writeData}`)
        res.end()
      }
    }
  })
}

// todo 인스턴스화 해야함
// todo 자동 분류화 되게?
// todo 들어오는 요청에 대한 리터럴 처리가 맞아?
// todo 수현 씨 것 받아와야 함


