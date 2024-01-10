function addUser() {
    player1 = document.getElementById("player1_input").value;
    player2 = document.getElementById("player2_input").value;
    localStorage.setItem("player_1",player1);
    localStorage.setItem("player_2",player2);
    window.location = "game_page.html";
     
 }

function send()
{
    number1= document.getElementById("playe1_input").value;
    number2 = document.getElementById("player2_input").value;
    actual_answer = parseInt(number1)*parseInt(number2);
}

question_number = "<h4>"+ number1 + "X" + number2 + "</h4>";
input_box = "<br> Answer: <input type='text' id='input_check_box'>";
check_button = "<br><br> <button claas='btn-btn-info' onclick='check()'> Check</button>"
row= question_number + input_box + check_button;
document.getElementById("output").innerHTML = row;
document.getElementById("player1_input").value;
document.getElementById("player2_input").value;

