const createGameBoard = require('./gameboard/gameboard')

const renderPlayerBoard = () => {
    const playerBoardArea = document.querySelector('div.player-board')

    const playerBoard = createGameBoard()

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (playerBoard.getShotLocation(i, j).isShip) {
                cell.classList.add('ship')
            }
            playerBoardArea.appendChild(cell)
        }
    }
}

export default renderPlayerBoard