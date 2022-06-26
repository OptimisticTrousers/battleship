const renderPlayerBoard = ({ getLocation }) => {
    const playerBoardArea = document.querySelector('div.player-board')

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            const cell = document.createElement('div')
            cell.classList.add('cell')
            if (getLocation(j, i).isShip) {
                cell.classList.add('ship')
            }
            playerBoardArea.appendChild(cell)
        }
    }
}

const handleClick = (event) => {
    console.log('hi bob')
}

const addListenersToEnemyBoard = () => {
    const enemyBoardArea = document.querySelector('div.enemy-board')

    const cells = Array.from(enemyBoardArea.children)

    cells.forEach((cell) => {
        cell.addEventListener('click', handleClick)
    })
}

export default renderPlayerBoard
