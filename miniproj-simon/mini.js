// let body = document.querySelector("body");
// let h5 = document.querySelector("h5");
// let check = "outgame";
// body.addEventListener("keydown",function (event) {
//     if ( check === "outgame") {
//         ['3','2','1','GO!'].forEach( (ele, i) => {
//             setTimeout(() => {
//                 h5.innerText = ele;
//             }, i * 1000);
//         });
//         setTimeout( () => {
//             let colors = document.querySelector("#container").children;
//             let memory = [];
//             for (let i = 1; i<3; i++) {
//                 h5.innerText="level"+i;
//                 setTimeout( () => {
//                     memory.push(Math.floor(Math.random()*4));
//                     console.log(memory);
//                     for (let mem of memory) {
//                         console.log(colors[mem],memory.indexOf(mem));
//                         colors[mem].classList.toggle("blank");
//                         colors[mem].innerText = "hello";
//                         let id = setinterval( () => {
//                             colors[mem].classList.toggle("blank");
//                             colors[mem].innerText = "";
//                             console.log(100*i*(memory.length-1 + memory.indexOf(mem)) + 4000)
//                         },(100*i*(memory.length-1 + memory.indexOf(mem)) + 4000));
//                     };
//                     console.log(200*i*(memory.length-1) + 4000)
//                 },(100*i*(memory.length-1) + 4000) );
//             };
//         }, 4000);
//     }
// })
// (100*i*(memory.length-1 + memory.indexOf(mem)) + 4000)

// let body = document.querySelector("body");
// let h5 = document.querySelector("h5");
// let check = "outgame";

// body.addEventListener("keydown", function (event) {
//     if (check === "outgame") {
//         // Countdown
//         ['3', '2', '1', 'GO!'].forEach((ele, i) => {
//             setTimeout(() => {
//                 h5.innerText = ele;
//             }, i * 1000);
//         });

//         // Start game sequence after countdown
//         setTimeout(() => {
//             let colors = document.querySelector("#container").children;
//             let memory = [];

//             for (let i = 1; i < 3; i++) {
//                 setTimeout(() => {
//                     h5.innerText = "level " + i;
//                     let index = Math.floor(Math.random() * 4);
//                     memory.push(index);
//                     console.log(memory);

//                     memory.forEach((mem, memIndex) => {
//                         setTimeout(() => {
//                             let colorBlock = colors[mem];
//                             colorBlock.classList.toggle("blank");
//                             colorBlock.innerText = "hello";

//                             // Revert block state after a short delay
//                             setTimeout(() => {
//                                 colorBlock.classList.toggle("blank");
//                                 colorBlock.innerText = "";
//                             }, 500); // 500ms delay to revert

//                         }, memIndex * 1000); // Delay for each block
//                     });

//                 }, i * 2000); // Delay between levels
//             }
//         }, 4000); // Start after initial countdown
//     }
// });


















let body = document.querySelector("body");
let h5 = document.querySelector("h5");
let box = document.querySelector("#container");
let check = "outgame";
body.addEventListener("keydown",function (event) {
    if ( check === "outgame") {
        ['3','2','1','GO!'].forEach( (ele, i) => {
            setTimeout(() => {
                h5.innerText = ele;
            }, i * 1000);
        });
        let timeforclick = 0;
        setTimeout( () => {
            let colors = box.children;
            let memory = [];
            let decide = false;
            for (let i = 1; i < 3; i++) {
                setTimeout( function () {
                    timeforclick = 20000;
                    h5.innerText = "level " + i;
                    memory.push(Math.floor(Math.random() * 4 ));
                    colors[memory[i-1]].classList.add("blank");

                    function click (event) {
                        console.log(event.target);
                        decide = true;
                        box.removeEventListener("click",click);
                    }

                    setTimeout( function () {
                        timeforclick = 0;
                        colors[memory[i-1]].classList.remove("blank");
                        decide = false;
                        box.addEventListener("click",click);

                        setTimeout(() => {
                            if(!decide) {
                                console.log("NO input detected for 20 seconds. Game Over");
                                h5.innerText = "Time's up! Game Over.";
                                box.removeEventListener("click",click);
                            };
                        },20000);
                        let waitingInterval = setInterval(function() {
                            if (decide) {
                                clearInterval(waitingInterval);
                                console.log("Player has decided.");
                            } else {
                                console.log("Waiting for player decision...");
                                timeforclick++;
                            }
                        }, 200);
                    },200 );
                    console.log((2000*i +timeforclick*200),timeforclick);
                    // if(!decide) {
                    //     timeforclick = 20000;
                    // };
                },(2000*i +timeforclick*200));
            }
        },4000 + timeforclick * 200)
    }
});


// let body = document.querySelector("body");
// let h5 = document.querySelector("h5");
// let box = document.querySelector("#container");
// let check = "outgame";

// body.addEventListener("keydown", function(event) {
//     if (check === "outgame") {
//         ['3', '2', '1', 'GO!'].forEach((ele, i) => {
//             setTimeout(() => {
//                 h5.innerText = ele;
//             }, i * 1000);
//         });

//         let timeforclick = 0;
//         setTimeout(() => {
//             let colors = box.children;
//             let memory = [];
//             let decide = false;

//             for (let i = 1; i < 3; i++) {
//                 setTimeout(function() {
//                     h5.innerText = "level " + i;
//                     memory.push(Math.floor(Math.random() * 4));
//                     let selectedElement = colors[memory[i - 1]];

//                     selectedElement.classList.add("blank");
//                     console.log("color gone");

//                     function click(event) {
//                         console.log(event.target);
//                         decide = true;
//                         box.removeEventListener("click", click);
//                     }

//                     setTimeout(function() {
//                         console.log("entered color regain", selectedElement.classList.contains("blank"));
//                         selectedElement.classList.remove("blank");
//                         console.log(selectedElement.classList);

//                         box.addEventListener("click", click);

//                         let waitingInterval = setInterval(function() {
//                             if (decide) {
//                                 clearInterval(waitingInterval);
//                                 console.log("Player has decided.");
//                             } else {
//                                 console.log("Waiting for player decision...");
//                             }
//                         }, 200);

//                     }, 200);
//                 }, 2000 * i + timeforclick * 200);
//             }
//         }, 4000 + timeforclick * 200);
//     }
// });
