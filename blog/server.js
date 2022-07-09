const express = require('express')
const  articleRouter=require('./routes/articles')
const app = express()

app.set('view engine', 'ejs')

app.use('/articles', articleRouter)
app.use("/dist", express.static("dist"))
app.get('/' , (req, res)=>{
    const articles = [{
        title: "Test Article",
        createdAt: new Date,
        description:"Test Description"
    },
    {
        title: "Test Article 2",
        createdAt: new Date,
        description:"Test Description"
    }]
    res.render('index', {articles:articles})
})


app.listen(5000)