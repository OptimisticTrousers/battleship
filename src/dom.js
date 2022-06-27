const handleAttack = (column, row, enemyBoard, player) => {
    player.attack(column, row, enemyBoard)
}

const attackEnemyCell = (cell, column, row, enemyBoard, player) => {
    const cellLocation = enemyBoard.getLocation(column, row)
    if (cellLocation.isShip) {
        cell.classList.add('hit')
        handleAttack(column, row, enemyBoard, player)
    } else {
        cell.classList.add('miss')
    }
}

const attackPlayerCell = (cell, column, row, playerBoard, enemy) => {
    const cellLocation = playerBoard.getLocation(column, row)
    if (cellLocation.isShip) {
        cell.classList.add('hit')
        handleAttack(column, row, playerBoard, enemy)
    } else {
        cell.classList.add('miss')
    }
}

const attackHuman = (cell, playerBoard, enemy) => {
    const { randomColumn, randomRow } = playerBoard.makeRandomCoordinates()
    attackPlayerCell(cell, randomColumn, randomRow, playerBoard, enemy)
    return { randomColumn, randomRow }
}

export const renderPlayerShips = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            const cell = playerBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)
            if (getLocation(row, column).isShip) {
                cell.classList.add('ship')
            }
        }
    }
}

export const renderEnemyAtacks = (playerBoard, column, row) => {
    const cell = document.querySelector(
        `.cell[column='${column}'][row='${row}']`
    )
    if (cell.classList.contains('ship')) {
        cell.classList.add('hit')
    } else {
        cell.classList.add('miss')
    }
}

export const addListenersToEnemyBoard = (
    playerBoard,
    enemyBoard,
    player,
    enemy
) => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    for (let column = 0; column < 10; column += 1) {
        for (let row = 0; row < 10; row += 1) {
            // Crediting formula to calculate nth-child using nested loop: https://stackoverflow.com/questions/8872662/math-to-determine-item-index-based-on-col-row-selection-in-grid
            const cell = enemyBoardArea.querySelector(
                `.cell:nth-child(${row * 10 + column + 1})`
            )
            cell.setAttribute('column', column)
            cell.setAttribute('row', row)

            cell.addEventListener(
                'click',
                () => {
                    // human player attacking computer
                    attackEnemyCell(cell, column, row, enemyBoard, player)
                    // computer attacking human
                    const { randomColumn, randomRow } = attackHuman(
                        cell,
                        playerBoard,
                        enemy
                    )
                    renderEnemyAtacks(playerBoard, randomColumn, randomRow)
                },
                { once: true }
            )
        }
    }
}
