// let movie="avatar";
// for (let guess=prompt("guess the movie name:"); guess!=movie && guess!="end"; guess=prompt("guess the movie name:") ) {
//     console.log(guess);
//     // guess=prompt("guess the movie name:");
// }

// let movie="avatar";
// let guess=prompt("enter movie name:");
// while (guess!=movie && guess!="quit") {
//     console.log(guess);
//     guess=prompt("enter movie name");
// }
// if ( guess == movie ) {
//     alert("you won");
// } else {
//     alert(`movie name is ${movie}  `);
// }


// ///todo app  on page
// let todo_list = [];
// for ( let enter = prompt("enter:"); enter != "quit"; enter = prompt("enter:") ) {
//     if ( enter == "list" ) {
//         alert(todo_list);
//     } else if ( enter == "add" ) {
//         console.log("add");
//         add = prompt("enter task:");
//         todo_list.push(add);
//         alert(todo_list);
//         console.log(todo_list);
//     } else if ( enter == "delete" ) {
//         del = prompt( "enter your task:" );
//         del = todo_list.splice( todo_list.indexOf(del), 1 )
//         alert ( `you deleted ${del}` );
//     } else {
//         alert( "enter a valid comand" );
//     }
// }


// /// todo app on console
// let todolist = [];
// for ( let enter = prompt("enter:"); enter != "quit"; enter = prompt("enter:") ) {
//     if ( enter == "list" ) {
//         for ( todo in todolist ) {
//             console.log( todo );
//         }
//     } else if ( enter == "add" ) {
//         console.log("add");
//         add = prompt("enter task:");
//         todo_list.push(add);
//         alert(todo_list);
//         console.log(todo_list);
//     } else if ( enter == "delete" ) {
//         del = prompt( "enter your task:" );
//         del = todo_list.splice( todo_list.indexOf(del), 1 )
//         alert ( `you deleted ${del}` );
//     } else {
//         alert( "enter a valid comand" );
//     }
// }


// // guessing  game 
// let n = parseInt( prompt( "enter the range:" ) );
// const num = Math.floor( Math.random() * n ) + 1;
// console.log(num);
// let chances = 0;
// while ( chances <= 3 ) {
//     guess = prompt(" take a guess: ");
//     chances += 1;
//     if ( guess == num ) {
//         alert(" you won the game ");
//         break;
//     } else if ( chances >= 3 ) {
//         alert(" you used your three chances ");
//         break;
//     } else if ( guess > num ) {
//         alert( " your guess is bigger " );
//     } else {
//         alert( " your guess was smaller ");
//     }
// } 