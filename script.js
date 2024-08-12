const container = document.getElementById('container');
const resetButton = document.getElementById('resetButton');

function createGrid(squaresPerSide) {
    container.innerHTML = ''; 
    const squareSize = 960 / squaresPerSide;

    for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
        div.style.backgroundColor = 'rgba(0, 0, 0, 0)'; 

        div.addEventListener('mouseover', () => {
            let currentOpacity = parseFloat(div.style.backgroundColor.split(',')[3]);
            if (currentOpacity < 1) {
                currentOpacity += 0.1;
                div.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
            }
        });

        container.appendChild(div);
    }
}

resetButton.addEventListener('click', () => {
    let squaresPerSide = parseInt(prompt("Enter number of squares per side (maximum 100):"));
    if (squaresPerSide > 100) squaresPerSide = 100;
    createGrid(squaresPerSide);
});


createGrid(16);
