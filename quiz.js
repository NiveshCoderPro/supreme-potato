player_1 = localStorage.getItem("Player1_input");
player_2 = localStorage.getItem("Player2_input");

player_1_score = 0;
player_2_score = 0;

document.getElementById("player1").innerHTML = player_1 + ":";
document.getElementById("player2").innerHTML = player_2 + ":";

document.getElementById("Player1_score").innerHTML = player_1_score;
document.getElementById("Player2_score").innerHTML = player_2_score;


document.getElementById("n3").innerHTML = "Question turn - " + player_1;
document.getElementById("n2").innerHTML = "Answer turn - " + player_2;

function send() {
   number1 = document.getElementById("n1").value;
   number2 = document.getElementById("n2").value;
   actual_answer = parseInt(number1) * parseInt(number2);

 
     

        question_number = "<h4> "+ number1+ " X " + number2 +"</h4>";
        input_box = "<br>Answer : <input type = 'text' id = 'input_check_box'>";
        check_button = "<br><br><button onclick='check()' class='btn btn-info'>Check</button>";
        var row = question_number + input_box + check_button;



        document.getElementById("n1").value = "";
        document.getElementById("n2").value = "";
    
        document.getElementById("output").innerHTML = row;

}
question_turn = "player1";
answer_turn = "player2";

function check() {
        get_answer = document.getElementById("input_check_box").value;

        if (get_answer == actual_answer) {

                if (answer_turn == "player1") {
                        update_player1_score = update_player1_score+1;
                        document.getElementById("player1_score").innerHTML = update_player1_score;
                }

                else {
                        update_player2_score = update_player2_score+1;
                        document.getElementById("player2_score").innerHTML = update_player2_score;
                }
        }

        if (question_turn == "player1") {
                question_turn = "player2";
                document.getElementById("player_question").innerHTML = "question turn - " + player_1;
        
        }
        else {
                question_turn = "player1";
                document.getElementById("player_question").innerHTML = "question turn -" + player_2;
        }
}
