import express from "express";
const PORT = process.env.PORT || 3000;


const server = express();


server.get("/data", (req, res) => {
    console.log("data has been requested")
    res.status(204).send({
        success: true,
        data: [
            1, 1, 1, 1, 1
        ]
    })
})


server.get("/", (req, res) => {
    console.log("data has been requested")
    res.send("welcome to my epic server");
})

server.get("/message", (req, res) => {
    console.log("message route requested");
    res.status(200).send(process.env.CUSTOM_MESSAGE || "no custom message set");
});

server.listen(PORT, () => {
    console.log(`Server is running locally at ${PORT}`);
    console.log("http://localhost:" + PORT + "/");
});
