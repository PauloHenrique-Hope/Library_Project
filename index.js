const express = require("express")
const exphbs = require("express-handlebars")
const app = express()

const conn = require('./db/conn')
const Book = require('./models/Book')

app.engine("handlebars", exphbs.engine())
app.set("view engine", "handlebars")

app.use(express.urlencoded({
    extended: true,
}))

app.use(express.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get("/book/create", (req, res) => {
    res.render('addBook')
})

app.post("/book/create", async(req, res) => {
    const title = req.body.title
    const n_pages = req.body.n_pages

    await Book.create({title, n_pages})

    res.redirect('/')
})

conn
.sync()
.then(() => {
    app.listen(3000)
})
.catch((err) => console.log(err))


