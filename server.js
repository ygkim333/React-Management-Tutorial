const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            id: 1,
            image: "https://i.pravatar.cc/60?img=3",
            name: "박창영",
            birthday: "980630",
            gender: "male",
            job: "student",
        },
        {
            id: 2,
            image: "https://i.pravatar.cc/60?img=1",
            name: "홍길동",
            birthday: "901023",
            gender: "male",
            job: "cooker",
        },
        {
            id: 3,
            image: "https://i.pravatar.cc/60?img=10",
            name: "김수현",
            birthday: "950101",
            gender: "male",
            job: "actor",
        },
    ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));