const battleBackgroundImage = new Image()
battleBackgroundImage.src = './img/battleBackground.png'
coin2='./img/Dollar Coin2.png'
coin1='./img/Dollar Coin.png'
// trains
const Light_green_img=new Image()
Light_green_img.src='./img/Light_green_train.png'

const Teal_train_img=new Image()
Teal_train_img.src='./img/Teal_train.png'

const Red_train_img=new Image()
Red_train_img.src='./img/Red_train.png'

//compartments
const lg_cmpt_img=new Image()
lg_cmpt_img.src='./img/lg_train_cmpt.png'

const Tt_cmpt_img=new Image()
Tt_cmpt_img.src='./img/Teal_train_cmpt.png'

const red_cmpt_img=new Image()
red_cmpt_img.src='./img/red_cmpt.png'
//Dollar coin after succesful submission
const coin_img=new Image()
coin_img.src='./img/Dollar Coin.png'


const battleBackground = new Sprite({
  position: {
    x: 0,
    y: 0
  },
  image: battleBackgroundImage
})
//Trains
const Light_green_train=new Sprite({
  position:{
    x:750,
    y:250
  },
  image:Light_green_img
})
const Teal_train=new Sprite({
  position:{
    x:700,
    y:50
  },
  image:Teal_train_img
})
 const Red_train=new Sprite({
   position:{
     x:725,
     y:450
   },
   image:Red_train_img
 })
//CMPTS
const lg_cmpt=new Sprite({
  position:{
    x:200,
    y:450
  },
  image:lg_cmpt_img
})
 const Tt_cmpt=new Sprite({
   position:{
     x:200,
     y:250
   },
   image:Tt_cmpt_img
 })
const Red_cmpt=new Sprite({
  position:{
    x:200,
    y:22
  },
  image:red_cmpt_img
})
const coin=new Sprite({
  position:{
    x:200,
    y:250
  },
  image:coin_img,
  animate:true
})

let draggle
let emby
let renderedSprites
let battleAnimationId
let queue

// function initBattle() {
//   document.querySelector('#userInterface').style.display = 'block'
//   document.querySelector('#dialogueBox').style.display = 'none'
//   document.querySelector('#enemyHealthBar').style.width = '100%'
//   document.querySelector('#playerHealthBar').style.width = '100%'
//   document.querySelector('#attacksBox').replaceChildren()
//
//   draggle = new Monster(monsters.Draggle)
//   emby = new Monster(monsters.Emby)
//   renderedSprites = [draggle, emby]
//   queue = []
//
//   emby.attacks.forEach((attack) => {
//     const button = document.createElement('button')
//     button.innerHTML = attack.name
//     document.querySelector('#attacksBox').append(button)
//   })
//
//   // our event listeners for our buttons (attack)
//   document.querySelectorAll('button').forEach((button) => {
//     button.addEventListener('click', (e) => {
//       const selectedAttack = attacks[e.currentTarget.innerHTML]
//       emby.attack({
//         attack: selectedAttack,
//         recipient: draggle,
//         renderedSprites
//       })
//
//       if (draggle.health <= 0) {
//         queue.push(() => {
//           draggle.faint()
//         })
//         queue.push(() => {
//           // fade back to black
//           gsap.to('#overlappingDiv', {
//             opacity: 1,
//             onComplete: () => {
//               cancelAnimationFrame(battleAnimationId)
//               animate()
//               document.querySelector('#userInterface').style.display = 'none'
//
//               gsap.to('#overlappingDiv', {
//                 opacity: 0
//               })
//
//               battle.initiated = false
//               audio.Map.play()
//             }
//           })
//         })
//       }
//
//       // draggle or enemy attacks right here
//       const randomAttack =
//         draggle.attacks[Math.floor(Math.random() * draggle.attacks.length)]
//
//       queue.push(() => {
//         draggle.attack({
//           attack: randomAttack,
//           recipient: emby,
//           renderedSprites
//         })
//
//         if (emby.health <= 0) {
//           queue.push(() => {
//             emby.faint()
//           })
//
//           queue.push(() => {
//             // fade back to black
//             gsap.to('#overlappingDiv', {
//               opacity: 1,
//               onComplete: () => {
//                 cancelAnimationFrame(battleAnimationId)
//                 animate()
//                 document.querySelector('#userInterface').style.display = 'none'
//
//                 gsap.to('#overlappingDiv', {
//                   opacity: 0
//                 })
//
//                 battle.initiated = false
//                 audio.Map.play()
//               }
//             })
//           })
//         }
//       })
//     })
//
//     button.addEventListener('mouseenter', (e) => {
//       const selectedAttack = attacks[e.currentTarget.innerHTML]
//       document.querySelector('#attackType').innerHTML = selectedAttack.type
//       document.querySelector('#attackType').style.color = selectedAttack.color
//     })
//   })
// }

function animateBattle() {
  battleAnimationId = window.requestAnimationFrame(animateBattle)
  battleBackground.draw()
  document.querySelector('#characterDialogueBox').style.display = ''
  Light_green_train.draw()
  Teal_train.draw()
  Red_train.draw()
  lg_cmpt.draw()
  Tt_cmpt.draw()
  Red_cmpt.draw()
  if (flag==1){
    //red cmpt
    Red_cmpt.position.x=465
    Red_cmpt.position.y=420
    //teal Train cmpt
    Tt_cmpt.position.x=465
    Tt_cmpt.position.y=45
    //light green compartment
    lg_cmpt.position.x=465
    lg_cmpt.position.y=220
    //
    coin.draw()

  }
}

animate()
// initBattle()
// animateBattle()

document.querySelector('#dialogueBox').addEventListener('click', (e) => {
  if (queue.length > 0) {
    queue[0]()
    queue.shift()
  } else e.currentTarget.style.display = 'none'
})
