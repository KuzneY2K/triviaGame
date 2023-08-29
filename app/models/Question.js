export class Question {
  constructor({ category, correct_answer, difficulty, incorrect_answers, question, type, id, active }) {
    this.category = category,
      this.correctAnswer = correct_answer,
      this.difficulty = difficulty,
      this.incorrectAnswer = incorrect_answers,
      this.question = question,
      this.type = type
    this.id = id
    this.active = active
  }

  shuffleArray(array) {
    // Loop Through Array
    for (let i = 0; i < array.length; i++) {
      // Create Random Number 0 - Array Length
      const swapIndex = Math.floor(Math.random() * array.length)
      // Current Index
      const currentIndex = array[i]
      // Finds Random Index
      const indexToSwap = array[swapIndex]
      // Swaps Current Index With Random Index
      array[i] = indexToSwap
      // Swaps The Random Index With the Old Index
      array[swapIndex] = currentIndex
      // All answer choices randomized
    }
    return array
  }

  get TriviaCards() {
    const answerOptions = [this.incorrectAnswer[0], this.incorrectAnswer[1], this.incorrectAnswer[2], this.correctAnswer]
    const shuffledOptions = this.shuffleArray(answerOptions)
    return `  <div class="col-12 trivia-card m-0 p-0 bg-transparent d-flex flex-row justify-content-center">
    <div class="card m-0 p-0 mt-3" style="width: 40rem;">
      <div class="card-body bg-transparent">
        <h5 class="card-title bg-transparent" id="difficulty">${this.difficulty}</h5>
        <h6 class="card-subtitle mb-2 text-muted bg-transparent" id="category">${this.category}</h6>
        <p class="card-text bg-transparent" id="Question">${this.question}</p>
        <form>
        <label class="radio"> <input type="radio" name="a1" id="answer" value="${shuffledOptions[0]}"><span>${shuffledOptions[0]}</span></label>
                <label class="radio"> <input type="radio" name="a2" id="answer1" value="${shuffledOptions[1]}"><span>${shuffledOptions[1]}</span></label>
                        <label class="radio"> <input type="radio" name="a3" id="answer2" value="${shuffledOptions[2]}"><span>${shuffledOptions[2]}</span></label>
                                <label class="radio"> <input type="radio" name="a4" id="answer3" value="${shuffledOptions[3]}"><span>${shuffledOptions[3]}</span></label>
        <div class="btn-container d-flex flex-row justify-content-center">
        <button class="btn btn-grad text-white" id="submit-button" onclick="app.HomeController.submitAnswer()" type="submit">Submit</button>
        </form>
        </div>
      </div>
    </div>
  </div>`
  }
}