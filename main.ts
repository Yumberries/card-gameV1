namespace SpriteKind {
    export const Tower = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.A.isPressed()) {
        Start_Turn()
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanMove == true) {
        grid.move(mySprite, 0, -1)
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (B_Pressed == 0) {
        CanMove = false
        blockMenu.showMenu([
        Hand[0],
        Hand[1],
        Hand[2],
        Hand[3],
        Hand[4]
        ], MenuStyle.List, MenuLocation.TopHalf)
        B_Pressed = 1
    } else if (B_Pressed == 1) {
        blockMenu.closeMenu()
        B_Pressed = 0
        CanMove = true
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
	
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanMove == true) {
        grid.move(mySprite, -1, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Tower, function (sprite, otherSprite) {
    if (mySprite.image.equals(img`
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 . f f . . . . . . . . . 1 1 
        . . . f f f . . . . . . . . . . 
        . . . . f f f . . . . . . . . . 
        1 . . . . f f f . . . . . . . 1 
        1 . . . . . f f f . . f . . . 1 
        1 . . . . . . f f f f f . . . 1 
        1 . . . . . . . f f f . . . . 1 
        . . . . . . . . f f f f . . . . 
        . . . . . . . f f . f f f . . . 
        1 1 . . . . . . . . . f f . 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        `) && controller.A.isPressed()) {
    	
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanMove == true) {
        grid.move(mySprite, 1, 0)
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (CanMove == true) {
        grid.move(mySprite, 0, 1)
    }
})
blockMenu.onMenuOptionSelected(function (option, index) {
    if (blockMenu.selectedMenuOption() == "G1| 1/2 Red" && info.score() >= 1 && B_Pressed == 1) {
        info.changeScoreBy(-1)
        CanMove = true
        B_Pressed = 0
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . 2 2 . 2 2 . 2 2 . . 1 1 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            1 . . . 2 2 2 2 2 2 2 2 . . . 1 
            1 . . . 2 2 . 2 2 . 2 2 . . . 1 
            1 . . . 2 2 . 2 2 . 2 2 . . . 1 
            1 . . . 2 2 2 2 2 2 2 2 . . . 1 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            1 1 . . 2 2 2 2 2 2 2 2 . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G2| 2/1 Blue" && info.score() >= 2 && B_Pressed == 1) {
        info.changeScoreBy(-2)
        CanMove = true
        B_Pressed = 0
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . 8 8 . 8 8 . 8 8 . . 1 1 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            1 . . . 8 8 8 8 8 8 8 8 . . . 1 
            1 . . . 8 8 . 8 8 . 8 8 . . . 1 
            1 . . . 8 8 . 8 8 . 8 8 . . . 1 
            1 . . . 8 8 8 8 8 8 8 8 . . . 1 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 8 8 8 8 8 . . . . 
            1 1 . . 8 8 8 8 8 8 8 8 . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G3| 2/3 Yellow" && info.score() >= 3 && B_Pressed == 1) {
        info.changeScoreBy(-3)
        CanMove = true
        B_Pressed = 0
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . 5 5 . 5 5 . 5 5 . . 1 1 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            1 . . . 5 5 5 5 5 5 5 5 . . . 1 
            1 . . . 5 5 . 5 5 . 5 5 . . . 1 
            1 . . . 5 5 . 5 5 . 5 5 . . . 1 
            1 . . . 5 5 5 5 5 5 5 5 . . . 1 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 5 . . . . 
            1 1 . . 5 5 5 5 5 5 5 5 . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G2| Creature takes 2 damage" && info.score() >= 2 && B_Pressed == 1) {
        info.changeScoreBy(-2)
        CanMove = true
        B_Pressed = 0
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . f f . . . . . . . . . 1 1 
            . . . f f f . . . . . . . . . . 
            . . . . f f f . . . . . . . . . 
            1 . . . . f f f . . . . . . . 1 
            1 . . . . . f f f . . f . . . 1 
            1 . . . . . . f f f f f . . . 1 
            1 . . . . . . . f f f . . . . 1 
            . . . . . . . . f f f f . . . . 
            . . . . . . . f f . f f f . . . 
            1 1 . . . . . . . . . f f . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . . . . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G1| Gain 1 Life" && info.score() >= 1 && B_Pressed == 1) {
        info.changeScoreBy(-1)
        CanMove = true
        B_Pressed = 0
        info.changeLifeBy(1)
        blockMenu.closeMenu()
    }
})
function Start_Turn () {
    info.setScore(randint(3, 10))
}
let YellowTower: Sprite = null
let BlueTower: Sprite = null
let RedTower: Sprite = null
let B_Pressed = 0
let Hand: string[] = []
let CanMove = false
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
    1 . . 1 . . . 1 1 . . . 1 . . 1 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . 1 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 . . . . . . . . . . . . . . 1 
    1 1 . . . . . . . . . . . . 1 1 
    1 1 . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    1 1 . . . . . . . . . . . . 1 1 
    1 . . . . . . . . . . . . . . 1 
    1 . . 1 . . . 1 1 . . . 1 . . 1 
    1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
    `, SpriteKind.Player)
grid.snap(mySprite)
blockMenu.setColors(12, 1)
CanMove = true
scene.centerCameraAt(150, 72)
let Cards = [
"G1| 1/2 Red",
"G2| 2/1 Blue",
"G3| 2/3 Yellow",
"G2| Creature takes 2 damage",
"G1| Gain 1 Life"
]
Hand = [
Cards[0],
Cards[1],
Cards[2],
Cards[3],
Cards[4]
]
B_Pressed = 0
blockMenu.setControlsEnabled(true)
info.setLife(10)
game.onUpdate(function () {
    if (mySprite.image.equals(img`
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 . . 2 2 . 2 2 . 2 2 . . 1 1 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        1 . . . 2 2 2 2 2 2 2 2 . . . 1 
        1 . . . 2 2 . 2 2 . 2 2 . . . 1 
        1 . . . 2 2 . 2 2 . 2 2 . . . 1 
        1 . . . 2 2 2 2 2 2 2 2 . . . 1 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        1 1 . . 2 2 2 2 2 2 2 2 . . 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        `) && controller.A.isPressed() && mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        RedTower = sprites.create(img`
            . 2 2 . 2 2 . 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 . 2 2 . 2 2 . 
            . 2 2 . 2 2 . 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            . 2 2 2 2 2 2 2 2 . 
            `, SpriteKind.Tower)
        tiles.placeOnTile(RedTower, mySprite.tilemapLocation())
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    } else if (mySprite.image.equals(img`
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 . . 8 8 . 8 8 . 8 8 . . 1 1 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        1 . . . 8 8 8 8 8 8 8 8 . . . 1 
        1 . . . 8 8 . 8 8 . 8 8 . . . 1 
        1 . . . 8 8 . 8 8 . 8 8 . . . 1 
        1 . . . 8 8 8 8 8 8 8 8 . . . 1 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        . . . . 8 8 8 8 8 8 8 8 . . . . 
        1 1 . . 8 8 8 8 8 8 8 8 . . 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        `) && controller.A.isPressed() && mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        BlueTower = sprites.create(img`
            . 8 8 . 8 8 . 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 . 8 8 . 8 8 . 
            . 8 8 . 8 8 . 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            . 8 8 8 8 8 8 8 8 . 
            `, SpriteKind.Tower)
        tiles.placeOnTile(BlueTower, mySprite.tilemapLocation())
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    } else if (mySprite.image.equals(img`
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 . . . . . . . . . . . . . . 1 
        1 1 . . 5 5 . 5 5 . 5 5 . . 1 1 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        1 . . . 5 5 5 5 5 5 5 5 . . . 1 
        1 . . . 5 5 . 5 5 . 5 5 . . . 1 
        1 . . . 5 5 . 5 5 . 5 5 . . . 1 
        1 . . . 5 5 5 5 5 5 5 5 . . . 1 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 5 . . . . 
        1 1 . . 5 5 5 5 5 5 5 5 . . 1 1 
        1 . . . . . . . . . . . . . . 1 
        1 . . 1 . . . . . . . . 1 . . 1 
        1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
        `) && controller.A.isPressed() && mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile`)) {
        mySprite.setImage(img`
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 . . . . . . . . . . . . . . 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            1 1 . . . . . . . . . . . . 1 1 
            1 . . . . . . . . . . . . . . 1 
            1 . . 1 . . . 1 1 . . . 1 . . 1 
            1 1 1 1 . . 1 1 1 1 . . 1 1 1 1 
            `)
        YellowTower = sprites.create(img`
            . 5 5 . 5 5 . 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 . 5 5 . 5 5 . 
            . 5 5 . 5 5 . 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            . 5 5 5 5 5 5 5 5 . 
            `, SpriteKind.Tower)
        tiles.placeOnTile(YellowTower, mySprite.tilemapLocation())
        tiles.setTileAt(mySprite.tilemapLocation(), assets.tile`myTile0`)
    }
})
