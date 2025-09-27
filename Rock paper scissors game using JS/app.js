let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("*#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["rock","paper","scissors"];
  const ranIdx =  Math.floor(Math.random()*3);
  return options[ranIdx];
}
 const drawgame = () => {
    console.log("Game was draw");
    msg.innerText = "Game was draw!.Play again";
 }
    const showwinner = (userwin,userchoice,compchoice) => {
        if(userwin){
            userscore++;
            userscorepara.innerText = userscore;
            console.log("you win!");
            msg.innerText = 'You Win! ${userchoice} beats ${compchoice}';
            msg.style.backgroundcolor = "green";
        } else{
            compscore++;
            compscorepara.innerText = compscore;
            console.log("you lose");
            msg.innerText = 'You Lose! ${compchoce} beats ${userchoice}';
            msg.style.backgroundcolor = "red";
        }
    }

const playgame = (userchoice) => {
    console.log("userchoice=",userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice=",compchoice);

    if(userchoice === compchoice){
        drawgame();
    } else {
        let userwin = true;
        if(userchoice === "rock"){
           userwin = compchoice === "paper" ? false : true;
        } else if(userchoice === "paper"){
           userwin = compchoice === "scissors"? false:true;
        } else {
            userwin = compchoice === "rock" ?false: true;
        }
            showwinner(userwin,userchoice,compchoice)
    }
}


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
                playgame(userchoice);

    });
});