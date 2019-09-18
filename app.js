const Koa = require('koa')
//const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const app = new Koa()
const router = require('./api')   
app.use(cors())    //解决跨域
app.use(router.routes()).use(router.allowedMethods())

app.listen(8089, () => {
  console.log('mock.........')
})
