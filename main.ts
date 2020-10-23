let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . f f f f 
    . . . . . . f 1 1 f 
    . . . . . . f 1 1 f 
    . . . . . . f 1 1 f 
    f f f f f f f 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
controller.moveSprite(mySprite)
