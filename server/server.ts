import * as express from "express";
// import * as _ from "lodash";
import * as path from "path";
import { Question } from "../@types/Question";

const questions: Question[] = [
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

const port: string | number = process.env.port || 3005;

const app = express();

app.listen(port);
app.use(express.static("public"));

console.log("Listening on port:", port);

app.get("/questions", (_req, res) => {
  debugger;
  res.json(questions);
});

app.get("/main.js", (_req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "client", "client.js"));
});

app.get("/new", (req, res) => {
  const question: Question = req.query;
  questions.push(question);

  res.json({
    questions,
    status: "OK"
  });
});
