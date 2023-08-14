import Phaser from "phaser";

class Lobby extends Phaser.Scene {

    constructor() {
        super('LobbyScene');
    }

    init() {
        // Used to prepare data
        var keyEsc;
    }

    create(data) {
        // Used to add objects to your game

        this.sound.play('ambience_loop', {
            loop: true
        });

        this.unlockAudioContext(this.sound);

        this.add.image(0, 0, 'lobby').setOrigin(0);

        let tiles = this.physics.add.staticGroup();

        tiles.create(100, 605, 'tile').setScale(.4).refreshBody();

        this.player = this.physics.add.sprite(140, 50, 'character_1');
        this.player.setCollideWorldBounds(true);

        this.physics.add.collider(this.player, tiles);
        /*

        

        

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('cat', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [{ key: 'cat', frame: 4 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('cat', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });*/

    }

    update(time, delta) {
        // Used to update your game. This function runs constantly
        let keyEsc = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
        if (keyEsc.isDown) {
            console.log("ESCAPE");
            this.scene.switch('MenuScene');
        };

        /*let cursors = this.input.keyboard.createCursorKeys();

        if (cursors.left.isDown) {
            this.player.setVelocityX(-160);

            this.player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            this.player.setVelocityX(160);

            this.player.anims.play('right', true);
        }
        else {
            this.player.setVelocityX(0);

            this.player.anims.play('turn');
        }

        if (cursors.up.isDown && this.player.body.touching.down) {
            this.player.setVelocityY(-330);
        }*/
    }

    unlockAudioContext(audioCtx) {
        if (audioCtx.state !== 'suspended') return;
        const b = document.body;
        const events = ['touchstart', 'touchend', 'mousedown', 'keydown'];
        events.forEach(e => b.addEventListener(e, unlock, false));
        function unlock() { audioCtx.resume().then(clean); }
        function clean() { events.forEach(e => b.removeEventListener(e, unlock)); }
    }
}

export default Lobby;