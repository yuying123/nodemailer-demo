// send mail

const sendEmail = require("../mail/index.js")

var express = require("express")
var app = express()

/*post方法*/
var bodyParser = require('body-parser'); 
// 添加json解析

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
  extended: false
}))

// 允许跨域
const cors = require('cors');
app.use(cors());

// app.get('/mail', (req, res) => {
//   console.log(req.query)
//   let obj = {
//     message: '邮件已发送成功',
//     code: 200,
//     data: null,
//   }
//   res.send(JSON.stringify(obj))
// })

app.post('/mail', (req, res) => {
  let {package_name,publisher_name,published_package} = req.body
  // console.log(JSON.stringify(req.body))
  sendEmail({
    subject:`${package_name}更新啦`,
    text:
`hi 同学：
${publisher_name} 刚刚发布了【${published_package}】, 如果您有在项目中使用这个包，记得同步更新呦！
`
  })
})

app.listen(8090)