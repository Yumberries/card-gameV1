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
function Delete_used_card_from_hand (Name: string) {
    if (Hand[0] == Name && Card_Cleared == false) {
        Hand[0] = ""
        Card_Cleared = true
    } else if (Hand[1] == Name && Card_Cleared == false) {
        Hand[1] = ""
        Card_Cleared = true
    } else if (Hand[2] == Name && Card_Cleared == false) {
        Hand[2] = ""
        Card_Cleared = true
    } else if (Hand[3] == Name && Card_Cleared == false) {
        Hand[3] = ""
        Card_Cleared = true
    } else if (Hand[4] == Name && Card_Cleared == false) {
        Hand[4] = ""
        Card_Cleared = true
    }
    Card_Cleared = false
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (B_Pressed == 0) {
        CanMove = false
        blockMenu.showMenu([
        Hand[0],
        Hand[1],
        Hand[2],
        Hand[3],
        Hand[4]
        ], MenuStyle.List, MenuLocation.BottomHalf)
        B_Pressed = 1
    } else if (B_Pressed == 1) {
        blockMenu.closeMenu()
        B_Pressed = 0
        CanMove = true
    }
})
function Give_Tower_Healthbar (Sprite2: Sprite, Strengh: number, Health: number) {
    statusbar = statusbars.create(10, 2, StatusBarKind.Health)
    statusbar.max = Health
    statusbar.value = Health
    statusbar.attachToSprite(Sprite2, 0, 0)
    statusbar.setLabel("" + Strengh + "/" + Health, 15)
    statusbar.setColor(2, 12, 13)
}
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
        statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value += -1
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
        if (statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite).value <= 0) {
            sprites.destroy(otherSprite)
            sprites.destroy(statusbars.getStatusBarAttachedTo(StatusBarKind.Health, otherSprite))
        }
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
function Draw_Card (Amount: number) {
    if (Hand[0] == "" && Cards_Drawn < Amount) {
        Hand[0] = Cards._pickRandom()
        Cards_Drawn += 1
    } else if (Hand[1] == "" && Cards_Drawn < Amount) {
        Hand[1] = Cards._pickRandom()
        Cards_Drawn += 1
    } else if (Hand[2] == "" && Cards_Drawn < Amount) {
        Hand[2] = Cards._pickRandom()
        Cards_Drawn += 1
    } else if (Hand[3] == "" && Cards_Drawn < Amount) {
        Hand[3] = Cards._pickRandom()
        Cards_Drawn += 1
    } else if (Hand[4] == "" && Cards_Drawn < Amount) {
        Hand[4] = Cards._pickRandom()
        Cards_Drawn += 1
    }
    Cards_Drawn = 0
}
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
        Delete_used_card_from_hand("G1| 1/2 Red")
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
        Delete_used_card_from_hand("G2| 2/1 Blue")
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
        Delete_used_card_from_hand("G3| 2/3 Yellow")
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G2| Creature gets -0/-1" && info.score() >= 2 && B_Pressed == 1) {
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
        Delete_used_card_from_hand("G2| Creature gets -0/-1")
        blockMenu.closeMenu()
    } else if (blockMenu.selectedMenuOption() == "G2| Gain 1 Life" && info.score() >= 2 && B_Pressed == 1) {
        info.changeScoreBy(-2)
        CanMove = true
        B_Pressed = 0
        info.changeLifeBy(1)
        Delete_used_card_from_hand("G2| Gain 1 Life")
        blockMenu.closeMenu()
    }
})
function Start_Turn () {
    info.setScore(randint(3, 10))
    Draw_Card(1)
}
let YellowTower: Sprite = null
let BlueTower: Sprite = null
let RedTower: Sprite = null
let Cards_Drawn = 0
let statusbar: StatusBarSprite = null
let Card_Cleared = false
let B_Pressed = 0
let Hand: string[] = []
let Cards: string[] = []
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
Cards = [
"G1| 1/2 Red",
"G2| 2/1 Blue",
"G3| 2/3 Yellow",
"G2| Creature gets -0/-1",
"G2| Gain 1 Life"
]
Hand = [
Cards._pickRandom(),
Cards._pickRandom(),
Cards._pickRandom(),
Cards._pickRandom(),
Cards._pickRandom()
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
        Give_Tower_Healthbar(RedTower, 1, 2)
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
        Give_Tower_Healthbar(BlueTower, 2, 1)
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
        Give_Tower_Healthbar(YellowTower, 2, 3)
    }
})
