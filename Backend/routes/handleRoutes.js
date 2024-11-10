const express = require("express");
const router = express.Router();

const {login,signup,submitName,submitAns,leaderBoard,createQuiz,goLive,auth} = require("./importRoutes");

// defining the routes
router.post("/login", login);
router.post("/signup", signup);

router.post("/submitName/:Id", submitName);
router.post("/submitAns/:Id", submitAns);

router.get("/leaderBoard", leaderBoard);

router.get("/goLive/:Id", auth, goLive);
router.post("createQuiz", auth, createQuiz);

module.exports = router;