const player1 = {
    name: 'Scorpion',
    hp: 80,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['harpoon', 'fireball'],
    attack() {
        console.log(this.name + ' fight...')
    }
}
const player2 = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['fan', 'fly'],
    attack() {
        console.log(this.name + ' fight...')
    }
}

function createPlayer(className, playerObj) {
    const $arenas = document.querySelector('.arenas')

    const $player = document.createElement('div')
    $player.classList.add(className)
    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = playerObj.hp + '%'
    const $name = document.createElement('div')
    $name.innerText = playerObj.name
    $name.classList.add('name')
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    const $character = document.createElement('div')
    const $img = document.createElement('img')
    $character.classList.add('character')
    $img.src = playerObj.img
    $character.appendChild($img)
    $player.appendChild($progressbar)
    $player.appendChild($character)
    $arenas.appendChild($player)
}

createPlayer('player1', player1)
createPlayer('player2', player2)