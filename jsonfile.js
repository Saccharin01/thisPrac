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
  fs.writeFile('parseJson.json', data, 'utf-8',(err)=>{
    if(err){
      console.log(err)
    } else {
      console.log(`Process done!`)
    }
  })
})

