// let student = {
//     name : "badri",
//     age : 19,
//     marks : 100
// };
// const item = {
//     price : 100,
//     discount : 50,
//     colors : ["red", "blue"]
// }


// let post = {
//     username : "badrinath",
//     1 : "this is my $fistPost",
//     likes : 150,
//     reposts : 5,
//     tags : 200
// }
// console.log(post.username);
// console.log(post[1]); // 1 is converted to a stiring first then it is executed 


// const classInfo = {
//     aman : {
//         grade : "A+",
//         city : "delhi" 
//     }
// }


// Math.floor(Math.random() * 100) + 1;



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


// alert(Math.floor( Math.random() * 6 ) + 1 );
// let car = {
//     name : "swift",
//     model : "r24",
//     color : "blue"
// };
// alert( car.name );
// console.log(car["name"]);


// let person = {
//     name : "badri",
//     age : 19,
//     city : "hyd"
// }
// person.city = "New york";
// person.country = "United States";
// console.log(person);

// function hello() {
//     console.log("hello");
// }
// hello();

// function roll() {
//     console.log( Math.floor( Math.random() * 6) + 1)
// }
// roll();

// function avg( a, b, c) {
//     console.log( (a + b + c)/3 );
// }
// avg(2,3,4);

// function mul(a) {
//     for( let i = 1; i <= 10; i++) {
//         console.log(a*i);
//     }
// }
// mul(5);

// function sum(n) {
//     sum=0;
//     for ( n; n > 0; n--) {
//         sum += n;
//     }
//     return sum;
// }
// console.log(sum(4));

// function concat(lis) {
//     let str = '';
//     for ( item of lis ) {
//         str += item;
//     }
//     return str;
// }
// console.log(concat(["abv", "dsoha", 'badri'] ))


// let arr = [345, 4653,6352,6,634,46,42];
// let n = prompt(" enter a number: ");
// let func = function( arr, n ){
//     let ar = [];
//     for ( a of arr ) {
//         if ( a > n ) {
//             ar.push(a);
//         }
//     }
//     return ar;
// }
// alert(func( arr, n ));

// let string = prompt("enter a text:");
// let fn = function( str ) {
//     let emp = "";
//     for ( c of str ) {
//         if ( !emp.includes(c) ) {
//             emp += c;
//         }
//     }
//     return emp;
// }
// alert( fn( string ));

// let lis = ["australia", "germany", "united states of america"];
// let fun = function(lis) {
//     let long = "";
//     for ( li of lis ) {
//         if ( li.length > long.length ) {
//             long = li;
//         }
//     }
//     return long;
// }
// alert( fun( lis ));

// let str = prompt("enter a string argument: ");
// let vol = function( str ) {
//     let count = 0;
//     for ( c of str ) {
//         if ( "aeiou".includes( c ) ) {
//             str = str.replace( c, '' );
//             count++;
//         }
//     }
//     return count;
// }
// alert( vol(str) );

// let lolimit = parseInt( prompt("enter lower limit :"));
// let uplimit = parseInt( prompt("enter upper limit: "));
// let ran = function( lolimit, uplimit ) {
//     return Math.floor( Math.random() * ( uplimit - lolimit )) + lolimit;
// }
// alert(ran( lolimit, uplimit ));

// const sum = ( a , b ) => a+b;
// sum(3,5);

// console.log( "hi there!");
// setTimeout( () => {
//     console.log(" Apna collage ")
// }, 4000);
// console.log(" welcome to ");

// let func = n => n*n;
// func(4);

// let id = setInterval( () => {
//     console.log(" hello world ")
// }, 2000 );
// setTimeout( () => {
//     clearInterval( id );
// }, 10000 );



// let arr = [ 45,63,63,63,73,2,7];
// let func = (arr) => {
//     let avg = 0;
//     for ( a of arr ) {
//         avg += a;
//     }
//     return avg / arr.length;
// }
// console.log(func( arr ));

// let n = parseInt( prompt ( "enter a number: "));
// let isEven = n => {
//     if ( n%2 === 0 ) {
//         alert( "even" );
//     } else {
//         alert("odd");
//     }
// }
// isEven(n);

// const object={
//     message:'Hello,World!',
//     logMessage(){console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,1000);

// letlength=4;
// function callback() {
//     console.log(this.length);
// }
// const object={
//     length:5,
//     method(callback){
//         callback();
//     },
// };
// object.method(callback,1,2);   

// let nums = [ 1, 4, , 5, 6, 7, 2, 9, 2];
// let max = nums.reduce( (acc, el ) => {
//     if ( acc < el ) {
//         return el;
//     } else {
//         return acc;
//     }
// });
// console.log( max );

// let  arr = [ 10];
// let bol = arr.every( (el) => el % 10 == 0 );
// if ( bol ) {
//     alert( "all numbers are multiples of 10 ");
// } else {
//     alert( " all numbers are not multiples of 10 ");
// }

// let nums = [  4, , 5, 6, 7, 2, 9, 2];
// let min = nums.reduce( ( acc, el ) => {
//     if ( acc > el ) {
//         return el;
//     } else {
//         return acc;
//     }
// });
// alert(min);

 
// let names = [ "tony" , " bruce " ]
// let [winner] = names;
// console.log(winner);

// let nums = [2,3];
// let square = nums.map( (num) => num*num );
// let result = square.reduce( (acc, el ) => acc+el );
// console.log( result );

// let newarr = nums.map( function (el) {
//     return el+5;
// });
// console.log( newarr );

// let strings=["adam","bob","catlyn","donald","eve"];
// let newstr = strings.map( (el) => el.toUpperCase() );
// console.log(newstr);

// function doubleAndReturnArgs( arr, ...vals) {
//     vals = vals.map( (el) => el*2);
//     return arr.concat(vals);
// }
// console.log( doubleAndReturnArgs( nums, 2,3,5 ));

// let doubleand = ( nums, ...args ) => [...nums, ...args.map((el) => el*2)];
// console.log( doubleand(nums, 2,3,5,));

// let mergeObjects = ( obj1, obj2 ) => ({ ...obj1, ...obj2 });
// console.log(mergeObjects({a:1,b:2},{c:3,d:4}));

// let p = document.createElement( "p");
// p.innerText = "Hey I'm red";
// document.querySelector('body').append(p);
// p.classList.add("red");
// let he = document.createElement("h3");
// he.innerText = "I'm a blue h3!";
// document.querySelector('body').append(he);
// he.color = "blue";
// he.classList.add("red");
// let div = document.createElement("div");
// document.querySelector('body').append(div);
// let heading = document.createElement("h1");
// let para = document.createElement("p");
// heading.innerText = "I'm in a div";
// para.innerText = "ME TOO!";
// document.querySelector("div").appendChild(para);
// document.querySelector("div").appendChild(heading);
// div.classList.add("div");

// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "username";
// let button = document.createElement("button");
// button.innerText = "Click me";
// button.id = "btn";
// document.querySelector('body').append(input);
// document.querySelector('body').append(button);
// console.dir(input);;
// console.log(button.id);

// console.dir(document.querySelector("#btn"));

// let head = document.createElement("h1");
// head.innerText = "DOM Practice";
// document.querySelector('body').append(head);
// head.classList.add('head');

// let paragraph = document.createElement("p");
// let bold = document.createElement("b");
// paragraph.innerHTML = "Apna Collage <b>Delta</b> Practice";
// document.querySelector("body").append(paragraph);


// let paragra = document.createElement("p");
// paragra.innerText = "Apan Collage";
// bold.innerText = "Delta";
// paragraph.appendChild(bold);


// event lisitner activity
// let text = document.querySelector(".heading");
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// function click() {
//     let rand1 = Math.floor(Math.random() * 256);
//     let rand2 = Math.floor(Math.random() * 256);
//     let rand3 = Math.floor(Math.random() * 256);
//     text.innerText = `rgb(${rand1},${rand2},${rand3})`;
//     text.style.color =text.innerText;
//     div.style.backgroundColor = text.innerText;
//     console.dir(div);
// };
// button.onclick = click;
// button.addEventListener(onclick,click);

// let heading = document.querySelector(".heading");
// let button = document.querySelector("button");
// let div = document.querySelector("div");
// div.addEventListener("mouseleave",(e) => {
//     e.target.style.color = "blue";
// });
// const inputField = document.getElementById('inputField');

// inputField.addEventListener('keydown', function(event) {
//     console.log('Key down:', event.key);
// });

// inputField.addEventListener('keyup', function(event) {
//     console.log('Key up:', event.key);
// });

// let scrollvalue = 0;
// document.addEventListener("load", (event) => {
//     scrollvalue = window.scrollY;
//     button.style.color = "blue";
//     console.log("hello");
// })

// let btn = document.createElement("button");
// let body = document.querySelector("body");
// body.append(btn);
// btn.innerText = "button";
// btn.addEventListener("click",function () {
//     btn.style.color = "blue";
// })
// console.log( parseInt('a'));
// let input = document.createElement("input");
// input.type = "text";
// input.placeholder = "enter your name";
// let h2 = document.createElement("h2");
// h2.innterText = "";
// body.append(h2,input);

// for ( i= 'A' ; i<'Z' ; i++){
//     console.log(i);
// }
// input.addEventListener("keydown", (event) => {
//     if ((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z'))  {
//         h2.innerText += event.key;
//         console.log(h2.innerText,event.key);
//     } else if ( event.key === 'Backspace') {
//         h2.innerText = h2.innerText.slice(h2.innerText.length - 2);
//         console.log("ican")
//     } else {
//         event.preventDefault();
//     }
// });
// input.addEventListener("keydown", (event) => {
//     if ((event.key >= 'A' && event.key <= 'Z') || (event.key >= 'a' && event.key <= 'z')) {
//         // Append the key to the h2 element
//         h2.innerText += event.key;
//         console.log(h2.innerText, event.key);
//     } else if (event.key === 'Backspace') {
//         // Remove the last character from the h2 element
//         h2.innerText = h2.innerText.slice(0, -1);
//         console.log("Backspace pressed");
//     } else {
//         // Prevent default action for non-letter keys
//         event.preventDefault();
//     }
// });
// console.log('z'>'Backspace')
// input.addEventListener("input", (event) => {
//     h2.innerText = event.target.value;
// });

// h1 = document.querySelector("h1");
// h1.style.color="red";

let url = "https://catfact.ninja/fact";
fetch(url)
   .then((response) => {
    console.log(response);
   })
   .catch((err) => {
    console.log("error - ",err);
   });