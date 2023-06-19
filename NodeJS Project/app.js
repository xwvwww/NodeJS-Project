const express = require('express')
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express()
const urlencoded = bodyParser.urlencoded({ extended: true });
let inputFile = fs.readFileSync('public/textich.json', 'utf-8');

app.use(bodyParser.json());
app.use(bodyParser.text());

app.use('/static', express.static('public'))
app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})


app.use('/css',function(req,res){
    res.sendFile(path.join(__dirname + '/public/style.css'))
})



app.post('/txt',urlencoded,function(req,res){
    if(!req.body) return res.sendStatus(400);
    let userData = req.body;
    let textik = []
    class Picture {
        constructor(text) {
            this.text = text
        }
    }
    if(inputFile != '') {
        textik = JSON.parse(inputFile)
    }
    let picture = new Picture(userData.text)
    textik.push(picture)
    const outputJson = JSON.stringify(textik)
    fs.writeFileSync('public/textich.json', outputJson)
    res.send('Cooбщение получено и сейчас будет выведено!')
})


app.post('/redact',urlencoded,function(req,res){
    if(!req.body) return res.sendStatus(400);
    let userData = req.body;
    let textik = [];
    fs.writeFileSync('public/textich.json', '')
    let inputFile1 = fs.readFileSync('public/textich.json', 'utf-8');

    if(inputFile1 != '') {
        textik = JSON.parse(inputFile1)
    }

    let dataTxt = userData.text

    class Picture {
        constructor(text) {
            this.text = text
        }
    }
    

    if(typeof(dataTxt) =='object'){
    for(let i of dataTxt){
        let picture = new Picture(i)
        textik.push(picture)
        const outputJson = JSON.stringify(textik)
        fs.writeFileSync('public/textich.json', outputJson)
    }
    }

    else{
        let picture = new Picture(dataTxt)
        textik.push(picture)
        const outputJson = JSON.stringify(textik)
        fs.writeFileSync('public/textich.json', outputJson)
    }

    const outputJson = JSON.stringify(textik)
    fs.writeFileSync('public/textich.json', outputJson)
    res.send('Готово!')
})



const port = 3000;

app.listen(port, () => 
  console.log(`App is listening on port ${port}.`)
);



