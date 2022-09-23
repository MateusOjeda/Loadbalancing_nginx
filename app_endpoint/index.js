const app = require('express')();
const PORT = process.env.PORT;

app.listen(
    PORT,
    () => console.log(`Alive on http://localhost:${PORT}`)
)

app.get(`/`, (req, res) => {
    res.status(200).send(`Reached port ${PORT}`);
})