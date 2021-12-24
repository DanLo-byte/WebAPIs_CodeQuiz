<!DOCTYPE html>
<html>
  <head>
    <title>Word Guess Game</title>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" type="text/css" href="./assets/style.css" />
  </head>
  <body>
    <header>
      <div class= "large-font">Word Guess Game</div>
      <button class="start-button">Start</button>
    </header>

    <main>
      <section>
        <div class="card word-guess">
          <div class="large-font word-blanks">J _ v _ S c r_ _t</div>
        </div>
      </section>

      <section>
        <div class="card results">
          <div class="win-loss-container">
          <div>
          <h2>Wins: <span class="win">0 </span> </h2>
          <h2>Losses: <span class="lose">0</span></h2>
        </div>
          <button class="reset-button">Reset Score</button>
      </div>
          <div class="card timer">
            <div class="timer-text">
            <div class="large-font timer-count">10</div>
            <h3>seconds remaining</h3>
          </div>
        
          </div>
        </div>
      </section>
    </main>
    <script src="assets/js/script.js"></script>
  </body>
</html>
