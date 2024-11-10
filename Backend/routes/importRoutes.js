// for teachers only
const login = require("../commonHandlers/teacher/login");
const signup = require("../commonHandlers/teacher/signup");

// for students only
const submitName = require("../commonHandlers/student/submitName");
const submitAns = require("../commonHandlers/student/submitAns");

// for both
const leaderBoard = require("../commonHandlers/leaderBoard");

// protected for teacher
const createQuiz = require("../protectedHandlers/createQuiz");
const goLive = require("../protectedHandlers/goLive");
const auth = require("../protectedHandlers/auth");

module.exports = {login,signup,submitName,submitAns,leaderBoard,createQuiz,goLive,auth};