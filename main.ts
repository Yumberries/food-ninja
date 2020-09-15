namespace SpriteKind {
    export const bomb = SpriteKind.create()
    export const strawberry = SpriteKind.create()
}
namespace StatusBarKind {
    export const level = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.Projectile, myTiles.tile1, function (sprite, location) {
    sprite.setVelocity(randint(-30, 30), 50)
    sprite.ay = 60
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setTile(13, img`
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        d d d d d d d d d d d d d d d d 
        `, true)
    scene.setTile(11, img`
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        b b b b b b b b b b b b b b b b 
        `, true)
    scene.setTile(7, img`
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        e e e e e e e e e e e e e e e e 
        `, false)
    scene.setTile(8, img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 9 
        1 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 1 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 1 9 9 9 9 
        `, true)
    scene.setTileMap(img`
        dddeeeeeeeeeeeeeeddddddbbbbddddddddddddddddddddddd
        ddeeeeeeeeeeeeeeeeddddbbbbbbddddeeeeeeeeeeeeeeeee7
        deeeddddddddddddeeedddbfbbfbdddeeeeeeeeeeeeeeeeee7
        eeeddddddddddddddeeeddbbbbbbddeeeddddddddddddddddd
        eeddddddddddddddddeeeddbbbbddeeedddddddddddddddddd
        eedddddddddddddddddeeeddbbddeeeddddddddddddddddddd
        eeedddddddddddddddddeeeddddeeedddddddddddddddddddd
        deeedddddddddddddddddeeeeeeeedddddddddddddddddddd9
        ddeeeeeeeeeeeeeeddddddeeeeeeddddddddeeeeeeeddddd99
        dddeeeeeeeeeeeeeeddddddddddddddddddeeeeeeeeedddd99
        dddddddddddddddeeeddddddddddddddddeeedddddeeeddd98
        ddddddddddddddddeeeddddddddddddddeeedddddddeeddd99
        dddddeeeeedddddddeeeeeeeeeeeeeeeeeeddddddddeeddd99
        ddddeeeeeeedddddddeeeeeeeeeeeeeeeedddddddddeeddd99
        dddeeedddeeedddddddddd4d2d4ddddddddddddddddeeddd99
        ddeee999ddeeeeeeedddddd4bbdd2ddddddddddddddeeddd99
        deee99999ddeeeeeeedd4dddbbdddddddddddddddddee99999
        eeed9999999dddddeeeddddbbbbddddddddddddddddbb9999d
        eedd999999999ddddeeeddbbbbbbddeeeeeeeedddddbb9dddd
        eeddd999999999ddddeeeddddddddeeeeeeeeeeddd9bbbeedd
        eedddd99999999dddddeeeddddddeeeddddddeeddd99bbeeed
        eeeeeeeeeeeeeeedddddeedddddeeedddddddeedd99ddddeee
        deeeeeeeeeeeeeeeddddeedddddeeddddddddeed999dddddee
        ddddddddddddddeeedddeedddddeeddddddddee999ddddddee
        dddddddddddddddeeeddeedddddeeddddddddee999ddddddee
        dddddeeeeeeeedddeeddeedddddeeedddddddee99dddddddee
        ddddeeeeeeeeeeddeeddeeddddddeeeeeeedddbb9ddddddeee
        dddeeeddddddeeedeeddeeeddddddeeeeeeeddbbeeeeeeeeed
        ddeeeddddddddeeeeedddeeeddddddddddeeed9beeeeeeeedd
        deeeddddddddddeeedddddeeeddddddddddeed99dddddddddd
        eeeddddddddddddddddddddeeeeeeeeeeeeeed99dddddddddd
        eeddddddddddddddddddddddeeeeeeeeeeeeed99dddddddddd
        eeddddddddeeeeeeeeeedddddddddddddddddd999ddddddddd
        eedddddddeeeeeeeeeeeedddddddddddddddddd999dddddddd
        eeddddddeeeddddddddeeeeeeeeeeeeeeeeedddd999ddddddd
        eeeddddeeeddddddddddeeeeeeeeeeeeeeeeeeedd9999ddddd
        deeeddeeeddddddddddddddddddddddddddeeeeedd9999dddd
        ddeeeeeeddddddddeeeeeeeeeeddddddddddddeeeddd999ddd
        dddeeeeddddddddeeeeeeeeeeedddddddddddddeeeedd999dd
        ddddddddddddddeeedddddddeedddeeeeeeeddddeeedd999dd
        dddddddeeeeeeeeeddddeeeeeedddeeeeeeedddddeeedd999d
        dddeeeeeeeeeeeeddddeeeeeeddddeedddeeedddddeeedd99d
        dddeeeeeddddddddddeeeddddddddeeedddeeedddddeeed99d
        dddeeddddeeeeeeeeeeeddddfdddddeeedddeeedddddeee999
        dddeeddddeeeeeeeeeeddddfffddfddeeedddeeedddddeee99
        d2dee2dddeeddddddddddeeeeedfffddeeedddeeedddddeed9
        dd2e2ddddeeddddddddddeeeeeeddddddeeedddeeeddddeedd
        ddd2dddddeeedddddddddeeddeeeddddddeeddddeeedddeedd
        dd2d2dddddeeeeeeeeeeeeedddeeeeeeeeeedddddeeeeeeedd
        d2ddd2dddddeeeeeeeeeeeeddddeeeeeeeeeddddddeeeeeedd
        `)
    info.stopCountdown()
    scene.cameraFollowSprite(mySprite)
    scene.placeOnRandomTile(mySprite, 7)
})
scene.onHitTile(SpriteKind.Player, 8, function (sprite) {
    for (let value of scene.getTilesByType(11)) {
        scene.setTile(11, img`
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b 
            `, false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.bomb, function (sprite, otherSprite) {
    animation.runImageAnimation(
    otherSprite,
    [img`
        . . . . . . . . . . . . . 4 . . 
        . . . . . . . . . . . . 2 4 5 . 
        . . . . . . . . . . . . 4 4 2 . 
        . . . . . . . . . . . b 5 4 4 . 
        . . . . . . . . . b b b . . . . 
        . . f f f f f f f b . . . . . . 
        . f f f f f f f f f . . . . . . 
        f f f f f f b f f f f . . . . . 
        f f f f f f f b f f f . . . . . 
        f f f f f f f f b f f . . . . . 
        f f f f f f f f f f f . . . . . 
        f f f f f f f f f f f . . . . . 
        f f f f f f f f f f f . . . . . 
        f f f f f f f f f f f . . . . . 
        . f f f f f f f f f . . . . . . 
        . . f f f f f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 2 . . . . . . 
        . . . . . . 4 2 4 4 4 . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 5 4 2 4 . . . . . 
        . . . . . 4 4 2 4 4 4 4 . . . . 
        . . . . . . 4 4 5 4 4 . . . . . 
        . . . . . . . 4 4 2 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 2 4 . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 5 4 2 4 4 . . . . 
        . . . . 4 2 4 2 4 4 4 4 4 . . . 
        . . . . . 4 4 4 5 4 4 4 . . . . 
        . . . . . . 4 4 4 2 4 . . . . . 
        . . . . . . . 2 4 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 4 2 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 5 4 2 4 4 4 . . . 
        . . . 4 4 2 4 2 4 4 4 4 4 4 . . 
        . . . . 4 4 4 4 5 4 4 4 4 . . . 
        . . . . . 4 4 4 4 2 4 4 . . . . 
        . . . . . . 4 2 4 4 4 . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . 4 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 4 2 4 4 4 . . . . 
        . . . . 4 4 4 4 4 4 4 4 4 . . . 
        . . . 4 4 4 4 5 4 2 4 4 4 4 . . 
        . . . 4 4 2 4 2 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 5 4 4 4 4 4 . . 
        . . . . 4 4 4 4 4 2 4 4 4 . . . 
        . . . . . 4 4 2 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . . . 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 4 4 4 2 4 4 4 4 . . . 
        . . . 4 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 5 4 2 4 4 4 4 . . 
        . . . 4 4 2 4 2 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 5 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 4 2 4 4 4 4 . . 
        . . . . 4 4 4 2 4 4 4 4 4 . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . . . 4 4 4 4 4 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 4 4 . . . . 
        . . . . 4 5 4 4 4 2 4 4 4 . . . 
        . . . 4 4 4 4 4 2 4 4 4 4 4 . . 
        . . . 2 4 4 4 4 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 5 4 2 4 4 2 4 . . 
        . . . 4 4 2 4 2 4 4 4 4 4 4 . . 
        . . . 4 4 4 4 4 5 4 4 4 4 4 . . 
        . . . 5 4 4 4 4 4 2 4 4 4 5 . . 
        . . . 4 4 4 4 2 4 4 4 4 4 4 . . 
        . . . . 2 4 4 4 4 4 4 4 4 . . . 
        . . . . . 4 4 4 5 4 4 4 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    50,
    false
    )
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.strawberry)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.bomb)) {
        value.destroy()
    }
    pause(1000)
    info.changeScoreBy(-2)
})
info.onCountdownEnd(function () {
    tiles.setTilemap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
        `, [myTiles.transparency16], TileScale.Sixteen))
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccffccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffcccc
        cccffccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffcccc
        cccffcccccccccaaaaaaaaaaaaaccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffcccc
        cccffccccccccca88888888888accccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffcccc
        cccffccccaaaaaa87777777778aaaaaacccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccaaaaaaaaaaaaaccccccccffcccc
        cccffcccca888888755555557888888acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccca88888888888accccccccffcccc
        cccffcccca877777754444457777778acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccaaaaaa87777777778aaaaaacccffcccc
        cccffcccca875555554222455555578acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca888888755555557888888acccffcccc
        cccffcccca8754444442f2444444578acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca877777754444457777778acccffcccc
        cccffccaaa8754222222f2222224578aaacffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca875555554222455555578acccffcccc
        cccffcca8887542f22f2f2f22f2457888acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca8754444442f2444444578acccffcccc
        cccffcca87775422f2f2f2f2f22457778acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccaaa8754222222f2222224578aaacffcccc
        cccffcca875554222fffffff222455578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8887542f22f2f2f22f2457888acffcccc
        cccffcca8754442fffffffffff2444578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca87775422f2f2f2f2f22457778acffcccc
        cccffcca875422222fffffff222224578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca875554222fffffff222455578acffcccc
        cccffcaa87542fffffffffffffff24578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8754442fffffffffff2444578acffcccc
        cccffca8875422222fffffff222224578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca875422222fffffff222224578acffcccc
        cccffca88754442fffffffffff2444578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcaa87542fffffffffffffff24578acffcccc
        cccffca8875554222fffffff222455578acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca8875422222fffffff222224578acffcccc
        cccffcaa87775422f2f2f2f2f22457778acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca88754442fffffffffff2444578acffcccc
        cccffcca8887542f22f2f2f22f2457888acffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca8875554222fffffff222455578acffcccc
        cccffccaaa8754222222f2222224578aaacffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcaa87775422f2f2f2f2f22457778acffcccc
        cccffcccca8754444442f2444444578acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8887542f22f2f2f22f2457888acffcccc
        cccffcccca875555554222455555578acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccaaa8754222222f2222224578aaacffcccc
        cccffcccca877777754444457777778acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca8754444442f2444444578acccffcccc
        cccffcccca888888755555557888888acccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca875555554222455555578acccffcccc
        cccffccccaaaaaa87777777778aaaaaacccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca877777754444457777778acccffcccc
        cccffccccccccca88888888888accccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca888888755555557888888acccffcccc
        cccffcccccccccaaaaaaaaaaaaaccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccaaaaaa87777777778aaaaaacccffcccc
        cccffccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccca88888888888accccccccffcccc
        cccffccccccccccccccccccccccccccccccffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccaaaaaaaaaaaaaccccccccffcccc
        cccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffcccc
        cccffffffffffffffffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffcccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffcccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffcccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffccc
        cccffccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffccc
        cccffccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffccc
        cccffcccccccccaaaaaaaaaaaaaccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccaaaaaaaaaaaaaccccccccffccc
        cccffccccccccca88888888888accccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccca88888888888accccccccffccc
        cccffccccaaaaaa87777777778aaaaaacccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccaaaaaa87777777778aaaaaacccffccc
        cccffcccca888888755555557888888acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca888888755555557888888acccffccc
        cccffcccca877777754444457777778acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca877777754444457777778acccffccc
        cccffcccca875555554222455555578acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca875555554222455555578acccffccc
        cccffcccca8754444442f2444444578acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca8754444442f2444444578acccffccc
        cccffccaaa8754222222f2222224578aaacffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccaaa8754222222f2222224578aaacffccc
        cccffcca8887542f22f2f2f22f2457888acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8887542f22f2f2f22f2457888acffccc
        cccffcca87775422f2f2f2f2f22457778acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca87775422f2f2f2f2f22457778acffccc
        cccffcca875554222fffffff222455578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca875554222fffffff222455578acffccc
        cccffcca8754442fffffffffff2444578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8754442fffffffffff2444578acffccc
        cccffcca875422222fffffff222224578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca875422222fffffff222224578acffccc
        cccffcaa87542fffffffffffffff24578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcaa87542fffffffffffffff24578acffccc
        cccffca8875422222fffffff222224578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca8875422222fffffff222224578acffccc
        cccffca88754442fffffffffff2444578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca88754442fffffffffff2444578acffccc
        cccffca8875554222fffffff222455578acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffca8875554222fffffff222455578acffccc
        cccffcaa87775422f2f2f2f2f22457778acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcaa87775422f2f2f2f2f22457778acffccc
        cccffcca8887542f22f2f2f22f2457888acffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcca8887542f22f2f2f22f2457888acffccc
        cccffccaaa8754222222f2222224578aaacffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccaaa8754222222f2222224578aaacffccc
        cccffcccca8754444442f2444444578acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca8754444442f2444444578acccffccc
        cccffcccca875555554222455555578acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca875555554222455555578acccffccc
        cccffcccca877777754444457777778acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca877777754444457777778acccffccc
        cccffcccca888888755555557888888acccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccca888888755555557888888acccffccc
        cccffccccaaaaaa87777777778aaaaaacccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccaaaaaa87777777778aaaaaacccffccc
        cccffccccccccca88888888888accccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccca88888888888accccccccffccc
        cccffcccccccccaaaaaaaaaaaaaccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffcccccccccaaaaaaaaaaaaaccccccccffccc
        cccffccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffccc
        cccffccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccffccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffccc
        cccffffffffffffffffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffffffffffffffccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    statusbar.setFlag(SpriteFlag.Invisible, false)
    mySprite.setFlag(SpriteFlag.Invisible, true)
    game_has_ended = true
    effects.clearParticles(mySprite)
    for (let value of sprites.allOfKind(SpriteKind.bomb)) {
        mySprite.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.strawberry)) {
        mySprite.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        mySprite.destroy()
    }
    change_level_number(1)
    map_thing = img`
        dddeeeeeeeeeeeeeeddddddbbbbddddddddddddddddddddddd
        ddeeeeeeeeeeeeeeeeddddbbbbbbddddeeeeeeeeeeeeeeeeed
        deeeddddddddddddeeedddbfbbfbdddeeeeeeeeeeeeeeeeeed
        eeeddddddddddddddeeeddbbbbbbddeeeddddddddddddddddd
        eeddddddddddddddddeeeddbbbbddeeedddddddddddddddddd
        eedddddddddddddddddeeeddbbddeeeddddddddddddddddddd
        eeedddddddddddddddddeeeddddeeedddddddddddddddddddd
        deeedddddddddddddddddeeeeeeeeddddddddddddddddddddd
        ddeeeeeeeeeeeeeeddddddeeeeeeddddddddeeeeeeeddddddd
        dddeeeeeeeeeeeeeeddddddddddddddddddeeeeeeeeedddddd
        dddddddddddddddeeeddddddddddddddddeeedddddeeeddddd
        ddddddddddddddddeeeddddddddddddddeeedddddddeeddddd
        dddddeeeeedddddddeeeeeeeeeeeeeeeeeeddddddddeeddddd
        ddddeeeeeeedddddddeeeeeeeeeeeeeeeedddddddddeeddddd
        dddeeedddeeedddddddddd4d2d4ddddddddddddddddeeddddd
        ddeee999ddeeeeeeedddddd4bbdd2ddddddddddddddeeddd99
        deee99999ddeeeeeeedd4dddbbdddddddddddddddddee99999
        eeed9999999dddddeeeddddbbbbddddddddddddddddbb9999d
        eedd999999999ddddeeeddbbbbbbddeeeeeeeedddddbb9dddd
        eeddd999999999ddddeeeddddddddeeeeeeeeeeddd9bbeeedd
        eedddd99999999dddddeeeddddddeeeddddddeeddd99eeeeed
        eeeeeeeeeeeeeeedddddeedddddeeedddddddeedd99ddddeee
        deeeeeeeeeeeeeeeddddeedddddeeddddddddeed999dddddee
        ddddddddddddddeeedddeedddddeeddddddddee999ddddddee
        dddddddddddddddeeeddeedddddeeddddddddee999ddddddee
        dddddeeeeeeeedddeeddeedddddeeedddddddee99dddddddee
        ddddeeeeeeeeeeddeeddeeddddddeeeeeeedddbb9ddddddeee
        dddeeeddddddeeedeeddeeeddddddeeeeeeeddbbeeeeeeeeed
        ddeeeddddddddeeeeedddeeeddddddddddeeed9beeeeeeeedd
        deeeddddddddddeeedddddeeeddddddddddeed99dddddddddd
        eeeddddddddddddddddddddeeeeeeeeeeeeeed99dddddddddd
        eeddddddddddddddddddddddeeeeeeeeeeeeed99dddddddddd
        eeddddddddeeeeeeeeeedddddddddddddddddd999ddddddddd
        eedddddddeeeeeeeeeeeedddddddddddddddddd999dddddddd
        eeddddddeeeddddddddeeeeeeeeeeeeeeeeedddd999ddddddd
        eeeddddeeeddddddddddeeeeeeeeeeeeeeeeeeedd9999ddddd
        deeeddeeeddddddddddddddddddddddddddeeeeedd9999dddd
        ddeeeeeeddddddddeeeeeeeeeeddddddddddddeeeddd999ddd
        dddeeeeddddddddeeeeeeeeeeedddddddddddddeeeedd999dd
        ddddddddddddddeeedddddddeedddeeeeeeeddddeeedd999dd
        dddddddeeeeeeeeeddddeeeeeedddeeeeeeedddddeeedd999d
        dddeeeeeeeeeeeeddddeeeeeeddddeedddeeedddddeeedd99d
        dddeeeeeddddddddddeeeddddddddeeedddeeedddddeeed99d
        dddeeddddeeeeeeeeeeeddddfdddddeeedddeeedddddeee999
        dddeeddddeeeeeeeeeeddddfffddfddeeedddeeedddddeee99
        d2ddd2dddeeddddddddddeeeeedfffddeeedddeeedddddeed9
        dd2d2ddddeeddddddddddeeeeeeddddddeeedddeeeddddeedd
        ddd2dddddeeedddddddddeeddeeeddddddeeddddeeedddeedd
        dd2d2dddddeeeeeeeeeeeeedddeeeeeeeeeedddddeeeeeeedd
        d2ddd2dddddeeeeeeeeeeeeddddeeeeeeeeeddddddeeeeeedd
        `
    compass = img`
        .....ccccccccc.....
        ...cccc2ccc2cccc...
        ..ccccc22cc2ccccc..
        .cccccc2c2c2cccccc.
        .cccccc2cc22cccccc.
        ccccccc2ccc2ccccccc
        cccccccfffffccccccc
        ccccccfbcbcbf222ccc
        c2c2c2fcbbbcf2ccccc
        c2c2c2fbbcbbf222ccc
        c2c2c2fcbbbcf2ccccc
        cc2c2cfbcbcbf222ccc
        cccccccfffffccccccc
        cccccccc2222ccccccc
        .cccccc2cccccccccc.
        .ccccccc222ccccccc.
        ..ccccccccc2ccccc..
        ...cccc2222ccccc...
        .....ccccccccc.....
        `
    start()
})
scene.onOverlapTile(SpriteKind.strawberry, myTiles.tile1, function (sprite, location) {
    sprite.setVelocity(randint(-30, 30), 50)
    sprite.ay = 60
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.startEffect(effects.fire)
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
scene.onOverlapTile(SpriteKind.bomb, myTiles.tile1, function (sprite, location) {
    sprite.setVelocity(randint(-30, 30), 50)
    sprite.ay = 60
})
function change_level_number (num: number) {
    for (let index = 0; index < 10; index++) {
        statusbar.value += num
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    otherSprite.destroy(effects.fire, 1000)
})
function start () {
    level_at += 1
    tiles.setTilemap(tiles.createTilemap(hex`0e000c00010101010101010101010101010101000000000000000000000000010100000000000000000000000001010000000000000000000000000101000000000000000000000000010100000000000000000000000001010000000000000000000000000101000000000000000000000000010100000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
    scene.setBackgroundColor(12)
    info.startCountdown(countdown)
    game_has_ended = false
    info.setScore(0)
    statusbar.setFlag(SpriteFlag.Invisible, true)
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    mySprite = sprites.create(img`
        . . . f . . . 
        . f . f . f . 
        . . f f f . . 
        f f f f f f f 
        . . f f f . . 
        . f . f . f . 
        . . . f . . . 
        `, SpriteKind.Player)
    mySprite.startEffect(effects.fire)
    mySprite.setFlag(SpriteFlag.Invisible, false)
    mySprite.setImage(img`
        . . . f . . . 
        . f . f . f . 
        . . f f f . . 
        f f f f f f f 
        . . f f f . . 
        . f . f . f . 
        . . . f . . . 
        `)
    mySprite.setFlag(SpriteFlag.StayInScreen, true)
    controller.moveSprite(mySprite, 200, 200)
    game.splash("you are at level " + level_at)
}
let projectile: Sprite = null
let compass: Image = null
let map_thing: Image = null
let game_has_ended = false
let mySprite: Sprite = null
let statusbar: StatusBarSprite = null
let countdown = 0
let level_at = 0
level_at = 0
countdown = 120
statusbar = statusbars.create(60, 4, StatusBarKind.level)
statusbar.setLabel("level" + " " + level_at + " ")
statusbar.value = 0
statusbar.setFlag(SpriteFlag.Invisible, true)
statusbar.setPosition(55, 7)
mySprite = sprites.create(img`
    . . . f . . . 
    . f . f . f . 
    . . f f f . . 
    f f f f f f f 
    . . f f f . . 
    . f . f . f . 
    . . . f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
mySprite.startEffect(effects.fire)
tiles.setTilemap(tiles.createTilemap(hex`0e000c00010101010101010101010101010101000000000000000000000000010100000000000000000000000001010000000000000000000000000101000000000000000000000000010100000000000000000000000001010000000000000000000000000101000000000000000000000000010100000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,myTiles.tile1], TileScale.Sixteen))
scene.setBackgroundColor(12)
let foods = [
img`
    . . . . c c c b b b b b . . . . 
    . . c c b 4 4 4 4 4 4 b b b . . 
    . c c 4 4 4 4 4 5 4 4 4 4 b c . 
    . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
    e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
    e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
    e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
    . e b 4 4 4 4 4 5 4 4 4 4 b e . 
    8 7 e e b 4 4 4 4 4 4 b e e 6 8 
    8 7 2 e e e e e e e e e e 2 7 8 
    e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
    e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
    e b e 8 8 c c 8 8 c c c 8 e b e 
    e e b e c c e e e e e c e b e e 
    . e e b b 4 4 4 4 4 4 4 4 e e . 
    . . . c c c c c e e e e e . . . 
    `,
img`
    . . . . . . . e c 7 . . . . . . 
    . . . . e e e c 7 7 e e . . . . 
    . . c e e e e c 7 e 2 2 e e . . 
    . c e e e e e c 6 e e 2 2 2 e . 
    . c e e e 2 e c c 2 4 5 4 2 e . 
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
    . e e e 2 2 2 2 2 2 2 2 2 4 e . 
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
    . . 2 e e 2 2 2 2 2 4 4 2 e . . 
    . . . 2 2 e e 4 4 4 2 e e . . . 
    . . . . . 2 2 e e e e . . . . . 
    `,
img`
    4 4 4 . . 4 4 4 4 4 . . . . . . 
    4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
    . . c 4 4 d 4 4 4 4 4 d d 5 d c 
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
    . . . . c c b 4 4 4 b b 4 5 4 4 
    . . . . . . c c c c c c b b 4 . 
    `,
img`
    . . 2 2 b b b b b . . . . . . . 
    . 2 b 4 4 4 4 4 4 b . . . . . . 
    2 2 4 4 4 4 d d 4 4 b . . . . . 
    2 b 4 4 4 4 4 4 d 4 b . . . . . 
    2 b 4 4 4 4 4 4 4 d 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 b . . . . 
    2 b 4 4 4 4 4 4 4 4 4 e . . . . 
    2 2 b 4 4 4 4 4 4 4 b e . . . . 
    . 2 b b b 4 4 4 b b b e . . . . 
    . . e b b b b b b b e e . . . . 
    . . . e e b 4 4 b e e e b . . . 
    . . . . . e e e e e e b d b b . 
    . . . . . . . . . . . b 1 1 1 b 
    . . . . . . . . . . . c 1 d d b 
    . . . . . . . . . . . c 1 b c . 
    . . . . . . . . . . . . c c . . 
    `,
img`
    . . . . . . 2 2 2 2 . . . . . . 
    . . . . 2 2 3 3 3 3 2 e . . . . 
    . . . 2 3 d 1 1 d d 3 2 e . . . 
    . . 2 3 1 d 3 3 3 d d 3 e . . . 
    . 2 3 1 3 3 3 3 3 d 1 3 b e . . 
    . 2 1 d 3 3 3 3 d 3 3 1 3 b b . 
    2 3 1 d 3 3 1 1 3 3 3 1 3 4 b b 
    2 d 3 3 d 1 3 1 3 3 3 1 3 4 4 b 
    2 d 3 3 3 1 3 1 3 3 3 1 b 4 4 e 
    2 d 3 3 3 1 1 3 3 3 3 1 b 4 4 e 
    e d 3 3 3 3 d 3 3 3 d d b 4 4 e 
    e d d 3 3 3 d 3 3 3 1 3 b 4 b e 
    e 3 d 3 3 1 d d 3 d 1 b b e e . 
    . e 3 1 1 d d 1 1 1 b b e e e . 
    . . e 3 3 3 3 3 3 b e e e e . . 
    . . . e e e e e e e e e e . . . 
    `,
img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . . b b 4 4 4 b . . . . 
    . . . . . b 4 b b b 4 4 b . . . 
    . . . . b d 5 5 5 4 b 4 4 b . . 
    . . . . b 3 2 3 5 5 4 e 4 4 b . 
    . . . b d 2 2 2 5 7 5 4 e 4 4 e 
    . . . b 5 3 2 3 5 5 5 5 e e e e 
    . . b d 7 5 5 5 3 2 3 5 5 e e e 
    . . b 5 5 5 5 5 2 2 2 5 5 d e e 
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4 
    . b 2 2 2 5 5 5 5 5 5 d d e 4 . 
    b d 3 2 d 5 5 5 d d d 4 4 . . . 
    b 5 5 5 5 d d 4 4 4 4 . . . . . 
    4 d d d 4 4 4 . . . . . . . . . 
    4 4 4 4 . . . . . . . . . . . . 
    `,
img`
    . . . . . . b b b b a a . . . . 
    . . . . b b d d d 3 3 3 a a . . 
    . . . b d d d 3 3 3 3 3 3 a a . 
    . . b d d 3 3 3 3 3 3 3 3 3 a . 
    . b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
    . b 3 3 3 3 3 a a 3 3 3 3 3 a b 
    b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
    b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
    b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
    a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
    a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
    a a 3 3 3 d d d a a 4 4 4 e e . 
    . e a a a a a a 4 4 4 4 e e . . 
    . . e e b b 4 4 4 4 b e e . . . 
    . . . e e e e e e e e . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `,
img`
    . . . . . 3 3 b 3 3 d d 3 3 . . 
    . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
    . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
    . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
    . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
    . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
    . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
    . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
    . 4 4 d 1 1 1 1 1 1 d d d b b . 
    . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
    4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
    4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
    4 5 5 d 5 5 d b b b d d 3 . . . 
    4 5 5 5 d d d d 4 4 b 3 . . . . 
    . 4 5 5 5 4 4 4 . . . . . . . . 
    . . 4 4 4 . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `,
img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `
]
let bomb = [img`
    . . . . . . . . . . . . . 4 . . 
    . . . . . . . . . . . . 2 4 5 . 
    . . . . . . . . . . . . 4 4 2 . 
    . . . . . . . . . . . b 5 4 4 . 
    . . . . . . . . . b b b . . . . 
    . . f f f f f f f b . . . . . . 
    . f f f f f f f f f . . . . . . 
    f f f f f f b f f f f . . . . . 
    f f f f f f f b f f f . . . . . 
    f f f f f f f f b f f . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f . . . . . 
    . f f f f f f f f f . . . . . . 
    . . f f f f f f f . . . . . . . 
    `]
let magic_strawberry = [img`
    . 1 . 1 . 1 . 6 . 1 . 1 . 1 . 1 
    1 . 1 . 1 . 8 6 6 . 1 . 6 8 1 . 
    . 1 . e e e 8 8 6 6 . 6 7 8 . 1 
    1 . e 2 2 2 2 e 8 6 6 7 6 . 1 . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . 1 
    1 e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . 1 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 1 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 1 
    e 2 2 2 2 2 2 2 4 e 2 e e c 1 . 
    e e 2 e 2 2 4 2 2 e e e c 1 . 1 
    e e e e 2 e 2 2 e e e c 1 . 1 . 
    e e e 2 e e c e c c c 1 . 1 . 1 
    1 c c c c c c c 1 . 1 . 1 . 1 . 
    `]
info.startCountdown(countdown)
game_has_ended = false
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setScore(0)
forever(function () {
    if (level_at == 20) {
        game.over(true, effects.confetti)
    }
})
game.onUpdateInterval(500, function () {
    if (game_has_ended == false) {
        projectile = sprites.createProjectileFromSide(foods[randint(0, foods.length - 1)], 0, -50)
        projectile.setPosition(randint(10, 120), 114)
        projectile.setVelocity(randint(-30, 30), -50)
        if (Math.percentChance(20)) {
            projectile = sprites.createProjectileFromSide(bomb[randint(0, bomb.length - 1)], 0, -50)
            projectile.setPosition(randint(10, 120), 114)
            projectile.setVelocity(randint(-30, 30), -50)
            projectile.setKind(SpriteKind.bomb)
        }
        if (Math.percentChance(20)) {
            projectile = sprites.createProjectileFromSide(magic_strawberry[randint(0, magic_strawberry.length - 1)], 0, -50)
            projectile.setPosition(randint(10, 120), 114)
            projectile.setVelocity(randint(-30, 30), -50)
            projectile.setKind(SpriteKind.strawberry)
        }
    }
})
