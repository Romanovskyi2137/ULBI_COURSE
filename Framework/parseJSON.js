module.exports = (req, res) => {
    res.send = (data) => {
        res.writeHead(200, {
            "Content-type": "Application/JSON"
        });
        res.end(JSON.stringify(data))
        // res.end(data)
    }
}