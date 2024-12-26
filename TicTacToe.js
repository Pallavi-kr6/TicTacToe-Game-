let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.btn');

let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.innerText = ""; 
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.style.pointerEvents = "none"; // Prevent further clicks on this box
        checkWinner();
    });
});

const checkWinner = () => {
    for (const pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val === pos2Val && pos2Val === pos3Val && pos1Val !== "") {
            console.log(`${pos1Val} is the winner!`);
            alert(`${pos1Val} is the winner!`)
            disableBoxes(); // Disable all boxes on win
            return;
        }
    }

    // Check for a draw (all boxes filled with no winner)
    if ([...boxes].every((box) => box.innerText !== "")) {
        console.log("It's a draw!");
        alert("It's a draw!")
    }
};

const disableBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "none"; 
        box.innerText = "";
        enableBoxes(); 
    });
};

const enableBoxes = () => {
    boxes.forEach((box) => {
        box.style.pointerEvents = "auto"; // Re-enable clicks
        box.innerText = ""; // Clear box content
    });
};

const resetGame = () => {
    const userResponse=prompt("do you wanna continue")
    if(userResponse && userResponse.toLowerCase()==="yes"){
    turnO = true; // Reset the turn
    enableBoxes(); // Clear and re-enable all boxes
    console.log("Game reset!");
    alert("Game reset!")
    }
    else{
        alert("ok see you soon!")
    }
};

// Add event listener to the reset button
resetbtn.addEventListener('click', resetGame);
