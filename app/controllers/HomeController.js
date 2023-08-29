import { Pop } from "../utils/Pop.js"
import { AppState } from "../AppState.js"
import { Question } from "../models/Question.js"
import { homeService } from "../services/HomeService.js"

// Public
export class HomeController {
  constructor() {
  }

  // FISHER YATES ALGORITHM

  drawCards() {
    let questionArray = AppState.questions
    // Define Function to Shuffle Array
    let shuffleArray = (questionArray) => {
      // Loop Through Array x Amount Of Times
      for (let i = 0; i < questionArray.length; i++) {
        // Create Random Number 0 - Array Length
        const swapIndex = Math.floor(Math.random() * questionArray.length)
        // Current Index
        const currentQuestion = questionArray[i]
        // Finds Random Index
        const questionToSwap = questionArray[swapIndex]
        // Swaps Current Index With Random Index
        questionArray[i] = questionToSwap
        // Swaps The Random Index With the Old Index
        questionArray[swapIndex] = currentQuestion
        // All Questions Have Now Been Randomized
      }
      return questionArray
    }
    shuffleArray(questionArray)
    let rando = Math.floor(Math.random() * 10)
    let activeQ = questionArray.find(question => question.id == rando)
    let content = ''
    let cardContainer = document.getElementById('trivia-cards')
    content += activeQ.TriviaCards
    cardContainer.innerHTML = content
    AppState.activeQuestion = activeQ
    console.log(AppState.activeQuestion)
  }

  submitAnswer() {
    window.event.preventDefault()
    let a1 = document.getElementById('a1')
    let a2 = document.getElementById('a2')
    let a3 = document.getElementById('a3')
    let a4 = document.getElementById('a4')
    console.log(a1.value)
  }

  async getQuestions() {
    document.getElementById('start-btn').style.visibility = "hidden"
    await homeService.getQuestions()
    this.drawCards()
  }

}