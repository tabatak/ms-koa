const koa = require('koa')
const mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'testdb'
})
con.connect()

var app = new koa()
app.use(async (ctx, next) => {
  con.query('select * from users', (err, results, fields) => {
    if (err){
      console.error(err)
      throw err
    }
    console.log(results[0].name)
    ctx.body = 'Hello, ' + results[0].name
  })
  console.log('kocchigasakidayo')
})

var port = 3000
app.listen(port)
console.log('Server listening on port ' + port)

