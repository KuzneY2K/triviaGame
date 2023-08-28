export class Question {
    constructor({ category, correct_answer, difficulty, incorrect_answers, question, type, id }) {
        this.category = category,
            this.correctAnswer = correct_answer,
            this.difficulty = difficulty,
            this.incorrectAnswer = incorrect_answers,
            this.question = question,
            this.type = type
        this.id = id
    }

    get TriviaCards() {
        return `  <div class="col-md-6 col-12 trivia-card m-0 p-0 bg-transparent d-flex flex-row justify-content-center">
    <div class="card m-0 p-0 mt-3" style="width: 40rem;">
      <div class="card-body bg-transparent">
        <h5 class="card-title bg-transparent" id="difficulty">${this.difficulty}</h5>
        <h6 class="card-subtitle mb-2 text-muted bg-transparent" id="category">${this.category}</h6>
        <p class="card-text bg-transparent" id="Question">${this.question}
        </p>
        <select class="custom-select w-100">
          <option selected id="qa1">${this.incorrectAnswer[0]}</option>
          <option value="1" id="qa2">${this.incorrectAnswer[2]}</option>
          <option value="2" id="qa3">${this.correctAnswer}</option>
          <option value="3" id="qa4">${this.incorrectAnswer[1]}</option>
        </select>
        <button class="btn btn-grad" id="submit-button" onclick="app.HomeController.submitAnswer()">Submit</button>
      </div>
    </div>
  </div>`
    }
}