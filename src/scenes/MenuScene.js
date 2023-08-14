import Phaser from "phaser";

class MenuScene extends Phaser.Scene {

    constructor() {
        super('MenuScene');
    }

    init() {
        // Used to prepare data
    }

    create(data) {
        // Used to add objects to your game
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * 0.20, 'logo').setDepth(1).setScale(.3);
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2.5, 'title').setDepth(1);
        if (this.scene.isSleeping('LobbyScene')) {
            var resumeButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 200, 'resume').setDepth(1).setScale(.3);
        } else {
            var playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 200, 'play').setDepth(1).setScale(.2);
        }
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, 'menu').setDepth(0).setScale(2);

        this.sound.pauseOnBlur = false;
        this.sound.play('music_theme_loop', {
            loop: true
        });

        this.unlockAudioContext(this.sound);



        let hoverSprite = this.add.sprite(100, 100, 'cat');

        hoverSprite.setScale(3);
        hoverSprite.setVisible(false);

        //create animation

        this.anims.create({
            key: "walk",
            frameRate: 4,
            repeat: -1, //repeat forever,
            frames: this.anims.generateFrameNumbers('cat', {
                frames: [0, 1, 2, 3]
            })
        });


        if(playButton) {
            playButton.setInteractive();

            playButton.on("pointerover", () => {
                console.log("Hover");
                hoverSprite.setVisible(true);
                hoverSprite.play('walk');
                hoverSprite.x = playButton.x - playButton.width / 4;
                hoverSprite.y = playButton.y - hoverSprite.height;
            });
    
            playButton.on("pointerout", () => {
                hoverSprite.setVisible(false);
            });
    
            playButton.on("pointerup", () => {
                this.sound.stopByKey('music_theme_loop');
                this.sound.play('music_theme_end');
                this.scene.start('LobbyScene');
            });
        } else if(resumeButton) {
            resumeButton.setInteractive();

            resumeButton.on("pointerover", ()=> {
                hoverSprite.setVisible(true);
                hoverSprite.play('walk');
                hoverSprite.x = resumeButton.x - resumeButton.width / 4;
                hoverSprite.y = resumeButton.y - hoverSprite.height;
            });

            resumeButton.on("pointerout", ()=> {
                hoverSprite.setVisible(false);
            });

            resumeButton.on("pointerup", ()=> {
                this.scene.switch('LobbyScene');
            });
        }

    }

    update(time, delta) {
        // Used to update your game. This function runs constantly
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

export default MenuScene;