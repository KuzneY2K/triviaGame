export const HomeView = /*html*/ `  <section class="row p-0 m-0 d-flex flex-row justify-content-center">
    <div class="col-12 p-0 m-0 trivia-container bg-custom-1 general">
      <h1 class="text-center text-white mt-5">triviaGame v0.4</h1>
      <h3 class="text-center text-white mt-2" style="rotate: 5deg;">MOTD: "I LOVE BEING GRILLED."</h3>
      <div class="row p-0 m-0" id="trivia-cards">

      </div>
      <div class="btn-container d-flex flex-row justify-content-center top-50">
        <button class="btn btn-grad mt-5" onclick="app.HomeController.getQuestions()">START TRIVIA</button>
      </div>
    </div>
  </section>`