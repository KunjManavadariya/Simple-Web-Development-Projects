const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.listen(1812, () => {
    console.log("Listening on port 1812!!");
})

let comments = [{
        id: uuid(),
        name: "Kunj",
        comment: "Galaxy star is the best player!"
    },
    {
        id: uuid(),
        name: "Harsh",
        comment: "Lmaololzxddddd!!!"
    },
    {
        id: uuid(),
        name: "Hari",
        comment: "Guys, ignore toxicity!!"
    },
    {
        id: uuid(),
        name: "Nirav",
        comment: "Chomu player chho hoo saav!!"
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.post('/comments', (req, res) => {
    const { username: name, comment } = req.body;
    comments.push({ name, comment, id: uuid() });
    res.redirect("/comments");
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/show', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/edit', { comment });
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const updateComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = updateComment;
    res.redirect("/comments");
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})