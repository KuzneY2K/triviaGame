import { Pop } from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { homeService } from "../services/HomeService.js"

// Public
export class HomeController {
  constructor() {
  }

  drawCards() {
    let myQuestions = AppState.questions
    let content = ''
    let cardContainer = document.getElementById('trivia-cards')
    myQuestions.forEach(questions => content += questions.TriviaCards)
    cardContainer.innerHTML = content
  }

  async getQuestions() {
    await homeService.getQuestions()
    this.drawCards()
  }

}