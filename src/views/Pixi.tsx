import styles from './Pixi.css?module';

import {VueTsComponent, Component, Watch, Emit} from '@/types/vue-ts-component';
import {VNode} from 'vue';

import * as PIXI from 'pixi.js';
import { sound } from '@pixi/sound';
import { Application } from 'pixi.js';
import PixiFps from 'pixi-fps';

interface Props {
	text: string;
	important?: boolean;
}

@Component
export default class Pixi extends VueTsComponent<Props> {

	appPixi: Application;
	fpsCounter: any;
	delta: number = 0;

	mounted(): void {
		sound.add('my-sound', {url: './assets/sounds/sound_04684.mp3', volume: 0.3});
		this.drawPixi();
	}

	render(): VNode {
		return (
			<div class='ion-page'>
				<ion-header>
					<ion-toolbar class={styles.toolbar} color='primary'>
						<ion-buttons slot='start'>
							<ion-back-button color='light' default-href='/' />
							<ion-title color='light'>PixiJS and PixiSound</ion-title>
						</ion-buttons>
					</ion-toolbar>
				</ion-header>

				<ion-content>
					<canvas id='pixi'></canvas>
				</ion-content>

				<ion-footer>
					<ion-toolbar color='primary'>
						<ion-title color='light'>Footer</ion-title>
					</ion-toolbar>
				</ion-footer>
			</div>
		);
	}

	public drawPixi(): void {
		const canvas: HTMLCanvasElement = document.getElementById('pixi') as HTMLCanvasElement;

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
}
