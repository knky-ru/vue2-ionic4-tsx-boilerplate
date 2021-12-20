import { __decorate } from "tslib";
import { VueTsComponent, Component } from '@/types/vue-ts-component';
import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';
import PixiFps from 'pixi-fps';
let Pixi = class Pixi extends VueTsComponent {
    appPixi;
    fpsCounter;
    delta = 0;
    mounted() {
        sound.add('my-sound', { url: './assets/sounds/sound_04684.mp3', volume: 0.3 });
        this.drawPixi();
    }
    render() {
        return (<div class='ion-page'>
				<ion-header>
					<ion-toolbar color='primary'>
						<ion-buttons slot='start'>
							<ion-back-button color='light' default-href='/'></ion-back-button>
						</ion-buttons>
						<ion-title color='light'>
							PixiJS {this.delta}
						</ion-title>
					</ion-toolbar>
				</ion-header>

				<ion-content>
					<canvas id='pixi'></canvas>
				</ion-content>

				<ion-footer>
					<ion-toolbar class='ion-text-center' color='primary'>
					</ion-toolbar>
				</ion-footer>
			</div>);
    }
    drawPixi() {
        const canvas = document.getElementById('pixi');
        this.fpsCounter = new PixiFps();
        this.appPixi = new PIXI.Application({
            width: window.innerWidth,
            height: window.innerHeight,
            antialias: true,
            transparent: true,
            view: canvas,
        });
        const container = new PIXI.Container();
        const texture = PIXI.Texture.from('./assets/images/logoV.png');
        const bunny = new PIXI.Sprite(texture);
        bunny.anchor.set(0.5);
        bunny.x = 240;
        bunny.y = 240;
        container.addChild(bunny);
        this.appPixi.ticker.add((delta) => {
            this.delta = delta;
            bunny.rotation -= 0.01 * delta;
        });
        this.appPixi.stage.addChild(container);
        this.appPixi.stage.addChild(this.fpsCounter);
        sound.play('my-sound');
    }
};
Pixi = __decorate([
    Component
], Pixi);
export default Pixi;
