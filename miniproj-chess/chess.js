// let board = document.querySelector('.board');
// board.addEventListener('click',(event) => {
//     let cls = event.target.classList;
//     let selected = document.querySelector(`.${cls[cls.len-1]}`);
//     console.log(cls.slice(-1)[0],selected);
//     board.addEventListener('click',(event) => {
//         let place = document.querySelector(`.${event.target.classList()[-1]}`);
//         console.log(place);
//     },{once:true});
// },{once:true});

// let board = document.querySelector('.board');

// // First click event: selecting the piece
// board.addEventListener('click', (event) => {
//     let cls = event.target.classList;
//     let selected = document.querySelector(`.${cls[cls.length - 1]}`);
//     console.log(selected);

//     // Second click event: selecting the place to move the piece
//     board.addEventListener('click', (event) => {
//         let placeClass = event.target.id;
//         // let place = document.querySelector(`#${placeClass}`);
//         console.log(placeClass);
//         let place = parseInt(placeClass);
//         console.log(place,selected.style);
//         selected.style.top =` ${parseInt(selected.style.top) + parseInt(place[1]) }rem`;
//         console.log(selected.style.left)
//     }, { once: true });

// }, { once: true });


let board = document.querySelector('.board');
let selectedPiece = null;

// First click event: selecting the piece
board.addEventListener('click', (event) => {
    let target = event.target;

    // If the target is a piece, select it
    if (target.classList.contains('piece')) {
        selectedPiece = target;
        console.log('Piece selected:', selectedPiece);
    }
});

// Second click event: selecting the place to move the piece
board.addEventListener('click', (event) => {
    if (selectedPiece) {
        let cell = event.target.closest('.cell');
        if (cell) {
            let cellRect = cell.getBoundingClientRect();
            let boardRect = board.getBoundingClientRect();

            // Calculate the new position based on the cell's position relative to the board
            let newLeft = cellRect.left - boardRect.left;
            let newTop = cellRect.top - boardRect.top;

            // Update the piece's position
            selectedPiece.style.left = `${newLeft}px`;
            selectedPiece.style.top = `${newTop}px`;

            console.log('Moved to:', newLeft, newTop);

            // Deselect the piece
            selectedPiece = null;
        }
    }
});
