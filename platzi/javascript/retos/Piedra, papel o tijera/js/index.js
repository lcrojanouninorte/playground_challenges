const prompt = null;
function Token(name, img_url, weakness) {
  this.name = name;
  this.img_url = img_url;
  this.weakness = weakness;
}

function CPU() {
  this.selectToken = () => {
    return Math.floor(Math.random() * 3);
  };
}

function Game() {
  this.cpu = new CPU();
  this.board = [];
  this.playing = true;
  let piedra = new Token(
    "Piedra",
    "https://max23esau.github.io/Game/images/piedra.png",
    "Papel"
  );
  let papel = new Token(
    "Papel",
    "https://max23esau.github.io/Game/images/papel.png",
    "Tijera"
  );
  let tijera = new Token(
    "Tijera",
    "https://iamdulce.github.io/rock-paper-scissors-/images/scissors.png",
    "Piedra"
  );
  this.board = [piedra, papel, tijera];

  //Agrega los tokens a la pantalla
  this.render = (tokens, element_id) => {
    let canvas = document.querySelector(element_id);

    tokens.map((token) => {
      let img = document.createElement("img");
      img.setAttribute("id", token.name);
      img.setAttribute("class", "token");
      img.setAttribute("src", token.img_url);
      img.addEventListener("click", () => {
        this.play(token.name);
      });
      //add event listeners
      canvas.appendChild(img);
    });
  };

  this.start = () => {
    this.render(this.board, "#tokens");
  };

  this.start_console = () => {
    while (this.playing) {
      let selected_token = prompt(
        "Ingresa tu jugada: 1. Piedra, 2.Papel, 3. Tijera:"
      );
      console.log(this.play(selected_token));
    }
  };

  this.play = function (selected_token_name) {
    let cpu_token = this.board[this.cpu.selectToken()];

    //update cepu token at display

    console.log("cpu", cpu_token.name);
    console.log("player", selected_token_name);
    let result = "Empate";
    let player_token = this.board.filter(
      (token) => token.name === selected_token_name
    )[0];

    //update player token at display
    if (cpu_token.name === player_token.weakness) {
      result = "Perdiste";
    }

    if (cpu_token.weakness === player_token.name) {
      result = "Ganaste";
    }

    //update RESULT AT DISPLAY
    console.log(result);
  };
}

//start game
(() => {
  let game = new Game();
  game.start();
})();
