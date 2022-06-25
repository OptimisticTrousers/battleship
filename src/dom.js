 const renderPlayerBoard = () => {
    const playerBoard = document.querySelector('div.player-board')

    for(let i = 0; i < 100; i += 1){
        const cell = document.createElement('div');
        cell.style.border = '1px solid black'
        playerBoard.appendChild(cell)
    }
 }