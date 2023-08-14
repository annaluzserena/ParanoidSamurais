import Phaser from 'phaser';
import LoadScene from './scenes/LoadScene';
import MenuScene from './scenes/MenuScene';
import LobbyScene from './scenes/LobbyScene';
import FirstScene from './scenes/FirstScene';

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [
        LoadScene, MenuScene, LobbyScene, FirstScene
    ],
    physics: {
        default: 'arcade',
        arcade: {
            fps: 60,
            gravity: { y: 300 },
        }
    },
    render: {
        pixelArt: true
    }
};

const game = new Phaser.Game(config);