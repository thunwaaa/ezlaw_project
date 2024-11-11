const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const app = express()

app.use(bodyParser.json())
const port = 8000


let conn = null

const initMySQL = async () => {
    conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test',
        port: 8889
    })
}

// use sequenlize
const sequelize = new Sequelize("tutorial", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

app.get('/testdb', async (req, res) => {
    try {
        const results = await conn.query('SELECT * FROM users')
        res.json(results[0])
    } catch (error) {
        console.error('Error fetching users: ', error.message);
        res.status(500).json({ error: 'Error fetching users'})
    }
    
})

// path = get /user สำหรับ get users ทั้งหมดที่บันทึกเข้าไปออกมา
app.get('/users', async (req, res) => {
    const results = await conn.query('SELECT * FROM users')
    res.json(results[0])
})

// path = post /user สำหรับการสร้าง users ใหม่ที่บันทึกเข้าไป
app.post('/users', async (req, res) => {
    try{
        let user = req.body
        const results = await conn.query('INSERT INTO users SET ?', user)
        console.log('results', results)
        res.json({
        message: 'insert ok',
        data: results[0]
    })
    } catch (error) {
        console.error('error message', error.message)
        res.status(500).json({
            message: 'Something wrong',
        })
    }
})

// get /users/:id สำหรับการดึง users รายคนออกมา
app.get('/users/:id', async (req, res) => {
    try {
        let id = req.params.id
        const results = await conn.query('SELECT * FROM users WHERE id = ?', id)

        //chaeck ขนาดอาเรย์เท่ากับ 0 ให้ขึ้นมาว่าหาไม่เจอ throw เป็น object
        if (results[0].length == 0) {
          throw { statusCode: 404, message: 'not found' }
        }
    
        res.json(results[0][0])
    } catch (error) {
        console.error('error message', error.message)
        let statusCode = error.statusCode || 500
        res.status(statusCode).json({
          message: 'something wrong',
          errorMessage: error.message
        })
      }
})

//PUT /users/:id สำหรับการแก้ไข users รายคน (ตาม id ที่บันทึกเข้าไป)
app.put('/users/:id', async (req, res) => {
    try {
      let id = req.params.id
      let updateUser = req.body
      const results = await conn.query(
        'UPDATE users SET ? WHERE id = ?',
        [updateUser, id]
      )
      res.json({
        message: 'update ok',
        data: results[0]
      })
    } catch (error) {
      console.error('error message', error.message)
      res.status(500).json({
        message: 'something wrong'
      })
    }
})

// DELETE /users/:id สำหรับการลบ users รายคน (ตาม id ที่บันทึกเข้าไป)
app.delete('/users/:id', async (req, res) => {
    try {
      let id = req.params.id
      const results = await conn.query('DELETE from users WHERE id = ?', parseInt(id))
      res.json({
        message: 'delete ok',
        data: results[0]
      })
    } catch (error) {
      console.error('error message', error.message)
      res.status(500).json({
        message: 'something wrong'
      })
    }
  })
  
app.listen(port, async (req, res) => {
    await initMySQL()
    console.log('http server run at ' + port)
})