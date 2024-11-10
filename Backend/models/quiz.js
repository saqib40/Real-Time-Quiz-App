const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    content: [
        {
            question: {
                type: String,
                trim: true,
                required: true
            },
            options: [{
                text: {
                    type: String,
                    trim: true,
                    required: true
                },
                isCorrect: {
                    type: Boolean,
                    required: true
                }
            }]
        }
    ]
});

module.exports = mongoose.model("Quizzes", quizSchema);