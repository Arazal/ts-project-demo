"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
// import * as _ from "lodash";
var path = require("path");
var questions = [
    {
        title: "How to log in",
        content: "how do i log in?",
        answerCount: 2
    },
    {
        title: "Where am i",
        content: "Can't find the exit?",
        answerCount: 2
    },
    {
        title: "How long am i here",
        content: "How long am i here?",
        answerCount: 2
    }
];
var port = process.env.port || 3005;
var app = express();
app.listen(port);
app.use(express.static("public"));
console.log("Listening on port:", port);
app.get("/questions", function (_req, res) {
    debugger;
    res.json(questions);
});
app.get("/main.js", function (_req, res) {
    res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});
app.get("/new", function (req, res) {
    var question = req.query;
    questions.push(question);
    res.json({
        questions: questions,
        status: "OK"
    });
});
//# sourceMappingURL=server.js.map