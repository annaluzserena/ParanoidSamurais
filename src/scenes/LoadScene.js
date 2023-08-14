import Phaser from "phaser";

class LoadScene extends Phaser.Scene {

    constructor() {
        super('LoadScene');
    }

    init() {
        // Used to prepare data
    }

    preload() {

        //load image, spritesheet, sound
        this.load.image('logo', '/assets/logo_white.png');
        this.load.image('title', '/assets/title.png');
        this.load.image('play', '/assets/play_button_2.png');
        this.load.image('resume', '/assets/resume_button.png');
        this.load.image('main', '/assets/backgrounds/main.png');
        this.load.image('menu', '/assets/backgrounds/menu-dark.jpg');
        this.load.image('lobby', '/assets/backgrounds/lobby.png');
        this.load.image('tile', '/assets/objects/transparent_tile.png');

        this.load.spritesheet('cat', '/assets/sprites/cat.png', {
            frameWidth: 32, 
            frameHeight: 32
        });

        this.load.spritesheet('character_1', '/assets/sprites/character_1.png', {
            frameWidth: 32,
            frameHeight: 48,
            startFrame: 3
        });

        this.load.spritesheet('character_2', '/assets/sprites/character_2.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        this.load.spritesheet('tv', '/assets/sprites/televisor.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        this.load.spritesheet('switch', '/assets/sprites/interruptor.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        this.load.spritesheet('hide_spot', '/assets/sprites/escondite.png', {
            frameWidth: 32,
            frameHeight: 48
        });

        //load general ambience sounds
        this.load.audio('ambience_loop', '/assets/sounds/general/Ambience_Loop.mp3');
        this.load.audio('music_theme_end', '/assets/sounds/general/Music_Theme_END.mp3');
        this.load.audio('music_theme_loop', '/assets/sounds/general/Music_Theme_Loop.mp3')

        //load scene 1 sounds
        this.load.audio('tv_off', '/assets/sounds/sala_1/TV_OFF.mp3');
        this.load.audio('energy_down', '/assets/sounds/sala_1/Energy_Breakdown.mp3');
        this.load.audio('item_found_1', '/assets/sounds/sala_1/Get_item_Found01.mp3');
        this.load.audio('item_found_2', '/assets/sounds/sala_1/Get_item_Found02.mp3');
        this.load.audio('tv_war_1', '/assets/sounds/sala_1/TV_guerra01.mp3');
        this.load.audio('tv_war_2', '/assets/sounds/sala_1/TV_guerra02.mp3');
        this.load.audio('tv_war_3', '/assets/sounds/sala_1/TV_guerra03.mp3');

        //create loading bar

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0x17C3B2 
            }
        });

        /*
        Loader Events:
            complete - when done loading everything
            progress - loader number progress in decimal
        */

        //simulate large load
        
        for(let i = 0; i < 100; i++){
            this.load.spritesheet("cat" + i, "./assets/sprites/cat.png", {
                frameHeight: 32,
                frameWidth: 32
            });        
        }

        this.load.on('progress', (percent)=> {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            console.log(percent);
        });

        this.load.on('complete', ()=> {
            console.log("done");
        });
    }
    create() {

        this.scene.start('MenuScene');
    }
}

export default LoadScene;