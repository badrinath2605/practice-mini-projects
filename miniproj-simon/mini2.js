let body = document.querySelector("body");
let h5 = document.querySelector("h5");
let box = document.querySelector("#container");
let highscore = document.createElement("h4");
hscore = 0;
body.append(highscore);
let delay = false;

function start (event,memory = [ ]) {
    console.log(memory);
    body.removeEventListener("keydown", start);
    [3,2,1,"GO!"].forEach( function (el,i){
        setTimeout( () => {
            h5.innerText = el;
        },1000 * i);
    });
    setTimeout(() => nextlevel(memory) ,3500);
};

body.addEventListener("keydown", start );

function nextlevel(memory) {
    h5.innerText = "level " + (memory.length + 1 );
    random = Math.floor(Math.random()*4);
    memory.push(random);
    box.children[random].classList.add("blank");
    setTimeout( () => {
        box.children[random].classList.remove("blank");
        test (memory);
    },200);
};

function test ( memory ) {
    console.log(memory);
    clue = h5.innerText;
    let index = 0;
    
    function nextelement () {
        if ( index < memory.length ) {
            h5.innerText = `${clue} - ${memory.length - index} left`;
            waiting( memory[index]);
        } else {
            nextlevel(memory);
        }
    }
    function waiting (color) {
        function check (event) {
            event.target.classList.add("blank");
            setTimeout(() => {
                event.target.classList.remove("blank");
            },50);
            setTimeout(() => {
                if (event.target.classList[0] === box.children[color].classList[0] ) {
                    index++;
                    console.log("correct");
                    nextelement();
                } else {
                    console.log("out");
                    gameout(memory.length);
                };
            },200);
        }
        box.addEventListener("click",check , {once : true});
    }; 
    nextelement();
};

function gameout(score) {
    h5.innerText = `Game Over, your score was ${score - 1 }`;
    body.classList.add("wrong");
    setTimeout( () => {
        body.classList.remove("wrong");
        h5.innerText = "press any key to start the game";
        body.addEventListener("keydown",start);
        if ( hscore <  score ) {
            hscore = score;
            highscore.innerText = `High Score = ${hscore - 1}`;
        };
    },100);
};

// function test (memory) {
//     memory.push(3); 
//     memory.push(2);
//     console.log(memory);
//     clue = h5.innerText;
//     for( let color of memory ) {
//         input = clicks ( color );
//         let id = setInterval( () => {
//             if ( delay ) {
//                  h5.innerText = clue + " - " + (memory.length-memory.indexOf(color) -1 ) + " left";
//                 console.log(input);
//                 clearInterval(id);
//             }
//         },200);
//     };
// };

// function clicks( color ) {
//     delay = false ;
//     function check (event) {
//         console.log(event.target.classList[0],box.children[color].classList[0])
//         delay = true ;
//         if ( !(event.target.classList[0] === box.children[color].classList[0])) {
//             return;
//         }
//     }
//     box.addEventListener("click", check);
//     let wait = setInterval( () => {
//         if ( delay ) {
//             console.log("clearing");
//             box.removeEventListener("click",check);
//             clearInterval( wait );
//         } else {
//             console.log("wait");
//         }
//     },200);
// }


// function test(memory) {
//     // Example memory setup
//     memory.push(3);
//     memory.push(2);
//     console.log(memory);
//     let clue = h5.innerText;

//     // Initialize the sequence
//     let currentStep = 0;

//     function proceedToNextColor() {
//         if (currentStep < memory.length) {
//             // Show clue for the current color
//             h5.innerText = `${clue} - ${memory.length - currentStep} left`;
//             waitForUserInput(memory[currentStep]);
//             currentStep++;
//         } else {
//             console.log("Sequence complete!");
//         }
//     }

//     function waitForUserInput(color) {
//         function check(event) {
//             console.log("speed 2");
//             let targetClass = event.target.classList[0];
//             let expectedClass = box.children[color].classList[0];
//             console.log("speed 3");

//             if (targetClass === expectedClass) {
//                 console.log("speed 4");
//                 console.log("Correct click:", targetClass);
//                 proceedToNextColor();
//             } else {
//                 console.log("Incorrect click:", targetClass);
//                 // Handle incorrect click if needed
//             }
//         }
//         console.log("speed 1 ");
//         box.addEventListener("click", check, { once: true });
//     }

//     proceedToNextColor(); // Start the sequence
// }
