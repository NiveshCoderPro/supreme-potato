function login() {
    player1_name = document.getElementById("Player1_input").value;
    player2_name = document.getElementById("Player2_input").value;

    localStorage.setItem("Player1_input",player1_name);
    localStorage.setItem("Player2_input",player2_name);

    window.location = "quiz.html";
}