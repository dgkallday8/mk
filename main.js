const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')


const player1 = {
    name: 'Scorpion',
    player: 1,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['harpoon', 'fireball'],
    attack() {
        console.log(this.name + ' fight...')
    }
}
const player2 = {
    name: 'Kitana',
    player: 2,
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fan', 'fly'],
    attack() {
        console.log(this.name + ' fight...')
    }
}


function createElement(tag, className) {
    const $tag = document.createElement(tag)
    if (className) {
        $tag.classList.add(className)
    }
    return $tag
}
function createPlayer(playerObj) {
   
    const $player = createElement('div', `player${playerObj.player}`)
    const $progressbar = createElement('div', 'progressbar')
    const $life = createElement('div', 'life')
    $life.style.width = playerObj.hp + '%'

    const $name = createElement('div', 'name')
    $name.innerText = playerObj.name
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    const $character = createElement('div', 'character')
    const $img = createElement('img')
    $img.src = playerObj.img
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    return $player
}

function randomHP() {
    return Math.ceil(Math.random() * 20)
}

function changeHp(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life')
    player.hp -= randomHP()
    $playerLife.style.width = player.hp + '%'
    if (player.hp <= 0) {
        player.hp = 0       
        $playerLife.style.width = 0
        $randomButton.disabled = true
    }
}
$randomButton.addEventListener('click', () => {
    changeHp(player1)
    changeHp(player2)     
    chooseWinner(player1, player2)
})


function chooseWinner(p1, p2) {
    if (p1.hp === 0 && p2.hp === 0) {
        $arenas.appendChild(playerLose('DRAW'))
    }else if (p2.hp === 0) {
        $arenas.appendChild(playerLose(p1.name))
    } else if (p1.hp === 0) {
        $arenas.appendChild(playerLose(p2.name))
    }
}

function playerLose (name) {
    const $loseTitle = createElement('div', 'loseTitle')
    if (name === 'DRAW') {
        $loseTitle.innerText = name
        return $loseTitle
    } else {
        $loseTitle.innerText = name + ' win'
        return $loseTitle
    }
    
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))