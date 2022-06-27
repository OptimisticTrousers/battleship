const renderAttacks = (player, column, row) => {
    const cell = document.querySelector(
        `.${player}-board > .cell[column='${column}'][row='${row}']`
    )
    if (cell.classList.contains('ship')) {
        cell.classList.add('hit')
    } else {
        cell.classList.add('miss')
    }
}

const handleAttack = (column, row, enemyBoard, player) =>
    player.attack(column, row, enemyBoard)

const attackEnemyCell = (column, row, enemyBoard, player) => {
    handleAttack(column, row, enemyBoard, player)
    renderAttacks('enemy', column, row)
}

const attackPlayerCell = (playerBoard, enemy) => {
    const { randomColumn, randomRow } = playerBoard.makeRandomCoordinates()
    handleAttack(randomColumn, randomColumn, playerBoard, enemy)
    renderAttacks('player', randomColumn, randomRow)
}
// https://jsmanifest.com/the-publish-subscribe-pattern-in-javascript/

export const pubSub = () => {
    const subscribers = {}

    function publish(eventName, data) {
        if (!Array.isArray(subscribers[eventName])) {
            return
        }
        subscribers[eventName].forEach((callback) => {
            callback(data)
        })
    }
    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribe[eventName])) {
            subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
        const index = subscribers[eventName].length - 1

        return {
            unsubscribe() {
                subscribers[eventName].splice(index, 1)
            },
        }
    }

    return {
        publish,
        subscribe,
    }
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

export const addListenersToEnemyBoard = (
    playerBoard,
    enemyBoard,
    player,
    enemy,
    ps
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
                    ps.publish('click', {
                        cell,
                        column,
                        row,
                        playerBoard,
                        enemyBoard,
                        player,
                        enemy,
                    })
                },
                { once: true }
            )
        }
    }
}

export const attack = ({
    cell,
    column,
    row,
    playerBoard,
    enemyBoard,
    player,
    enemy,
}) => {
    // human player attacking computer
    attackEnemyCell(column, row, enemyBoard, player)
    // computer attacking human
    attackPlayerCell(playerBoard, enemy)
}
