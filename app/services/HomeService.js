import { HomeController } from "../controllers/HomeController.js";
import { AppState } from "../AppState.js";
import { Question } from "../models/Question.js";

class HomeService {

    async getQuestions() {
        const response = await fetch('https://opentdb.com/api.php?amount=100')
        const responseData = await response.json()
        const newQuestions = responseData.results
        let q = newQuestions.map(quest => new Question(quest))
        AppState.questions = q
        AppState.questions.forEach(question => question.id = Math.floor(Math.random() * 10))
    }

}

export const homeService = new HomeService()