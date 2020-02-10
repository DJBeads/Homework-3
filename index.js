const express = require('express');
const handlebars = require('express-handlebars');
const fs = require('fs')
const app = express();
let messages = [];
let today = new Date();
let date = today.getDate()+"."+(today.getMonth()+1);
let time = today.getHours() + ":" + today.getMinutes();

function findMaxId(messages){
    let maxId = 1;
    for (let message of messages){
        if(message.id > maxId){
            maxId = message.id;
        }
    }
    return maxId;
}

const maxId = findMaxId(messages);

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended: true}));

app.get('/', (request, response) => {
    response.render('home', {messages: messages});
});

app.post('/new', (request, response) => {
    if (fs.existsSync('./messages.json')) {
        const text = fs.readFileSync('./messages.json', {
            encoding: 'utf-8'});
        messages = JSON.parse(text);
    }  else {
        messages = [];
    }
    const maxId = findMaxId(messages);
    console.log(request.body.author + ":" + request.body.text);

    messages.push({
        author: request.body.author,
        text: request.body.text,
        date: time + " " + date,
        id: maxId + 1
    });

 {
    const text = JSON.stringify(messages, null, 2);
    fs.writeFileSync('./messages.json', text, {
        encoding: 'utf-8'});
    response.redirect('/');
};



app.use(express.static('public'));

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});})
