// let num=10;
// if (num%10===0) {
//     console.log("good");
// }
// else {
//     console.log("bad");
// }

// let nam=prompt("enter your name:");
// let age = prompt("enter your age:")
// alert(`your name is ${nam}, your age is ${age}`)

// let quater = prompt("enter a number:");
// console.log(quater);
// switch (quater) {
//     case 1:
//         console.log("jan,feb,march");
//         break;
//     case 2:
//         console.log("april,may,june");
//         break;
//     case 3:
//         console.log("july,august,sept");
//         break;
//     case 4:
//         console.log("oct,nov,dec");
//         break;
//     default:
//         console.log("not a valid number");
// }
// let str= prompt("enter a string:");
// console.log(str);
// if ((str[0]=='A' || str[0]=='a') && (str.length>5)){
//     console.log("golden string");
// } else {
//     console.log("not a golden string");
// }


// let num1=5;
// let num2=4;
// let num3=6;
// if ( num1> num2) {
//     if ( num1> num3) {
//         console.log(num1);
//     } else {
//         console.log(num3);
//     }
// } else{
//     if (num2>num3) {
//         console.log(num2);
//     } else {
//         console.log(num3);
//     }
// }

// let a=22;
// let b=2352;
// if (a%10===b%10) {
//     console.log("positive");
// }

// let str ="apnacollage";
// console.log(str.slice(4).replace('l','t'));


// let state=['january','july','march','august'];
// temp=state.shift();
// temp=state.shift();
// console.log(state.unshift('june'));
// console.log(state.unshift(temp));
// console.log(state);
// console.log(state.splice(0,1,"badri","nath"));
// console.log(state);
// let temp=state.splice(0,2,"june")
// state.splice(0,0,temp[1])
// console.log(state);


// let tic=[['x',null,'o'],[null,'x',null],['o',null,'x']];
// console.log(tic);
// tic[0][1]='o';
// console.log(tic);

// let arr=[3,35,325,6,636,73,32];
// let n=4;
// console.log(arr.slice(0,n));
// console.log(arr.slice(-n));
// // arr=[];
// if (arr.length===0) {
//     console.log("blank");
// } else {
//     console.log("not blank");
// }
// let str="bAdri";
// let ch='A';
// if (str[str.indexOf(ch)]===str[str.indexOf(ch)].toUpperCase()) {
//     console.log("uppercase");
// } else {
//     console.log("lowercase");
// }
// let st="    badri   ";
// let co=st.strip;
// console.log(st,co);
// console.log(arr.includes(3));

// let str=prompt("pleaseenterastring");
// console.log(`originalstring=${str}`);
// console.log(`stringwithoutspaces=${str.trim()}`);


// n=parseInt(prompt("enter a number"));
// for (let i=n, j=1; j<=10; j++) {
//     console.log(i*j);
// } 
// for (let i=10; i>0; i-=2) {
//     console.log(i);
// }


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


// let heros=[ ["ironman", "spidernam", "thor"], ["superwomen", "wonder women", "flash"] ];
// for ( set of heros ) {
//     for ( hero of set ) {
//         console.log(hero);
//     }
// }


// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = parseInt(prompt( `select a number form ${arr}`));
// console.log( arr.includes( num ) );
// while ( arr.includes( num ) ) {
//     console.log( num );
//     arr.splice( arr.indexOf(num), 1 );
//     console.log(arr);
// } alert(arr);
// console.log(arr);


// let num = prompt( " enter a number " );
// alert( num.length );

// let num = parseInt( prompt( "enter a number:" ) );
// let count = 1;
// console.log(num);
// if ( typeof(num) === typeof(1) ) {
//     while ( num >10 ) {
//         num/=10;
//         count+=1;
//     }
//     alert( `count is ${count}`);
// } else {
//     alert( "enter a valid number " );
// }

// let num = prompt( "enter a number:");
// let sum = 0;
// for ( n of num) {
//     sum += parseInt(n);
// } alert( `sum is ${sum}`);

// let num = parseInt( prompt(" enter number:") );
// let fact = 1;
// for ( fact =1; num > 0; num-- ) {
//     fact *= num;
// } alert( fact );


// let arr = [ 24, 3, 343, 353, 325];
// let g = arr[0] ;
// for ( a of arr ) {
//     console.log( a, g );
//     if ( a > g ) {
//         g = a;
//     }
// } alert(g);






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
