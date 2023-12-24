
const express = require('express')
const path = require("path")
const multer = require("multer")
const upload = multer({ dest: 'uploads/' })
const {mergePDfs} = require("./MergerPDF")
const app = express()
app.use('/static', express.static('public'))
const port = 3000

app.get('/', (req, res) => {
    res.send('Admin Home Page')
})

app.get('/home', (req, res) => {
    // both work 
    //   res.sendFile(path.join(__dirname,"\\templates\\index.html"))
    res.sendFile(path.join(__dirname, "/templates/index.html"))
})

app.post('/mergs', upload.array('pdfs', 2),  async (req, res, next)=> {
  let key= await mergePDfs(path.join(__dirname,req.files[0].path),path.join(__dirname,req.files[1].path))
    res.redirect(`http://localhost:${port}/static/merge${key}.pdf`)
    console.log(req.files)
    // res.send({ data: req.files })

})


app.listen(port, () => {
    console.log(`PdfMerger app listening on port http://localhost:${port}`)
})
