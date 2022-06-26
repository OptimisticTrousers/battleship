const checkIfCellHasShip = (event) => {
    console.log('hiiii this works')
}

export const addListenersToPlayerBoard = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const cell = playerBoardArea.querySelector(
                `.cell:nth-child(${j * 10 + i + 1})`
            )
            if (getLocation(j, i).isShip) {
                cell.classList.add('ship')
            }
        }
    }
}

export const addListenersToEnemyBoard = () => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            // Crediting formula to calculate nth-child using nested loop: https://stackoverflow.com/questions/8872662/math-to-determine-item-index-based-on-col-row-selection-in-grid
            const cell = enemyBoardArea.querySelector(
                `.cell:nth-child(${j * 10 + i + 1})`
            )
            cell.addEventListener('click', checkIfCellHasShip)
        }
    }
}

addListenersToEnemyBoard()

