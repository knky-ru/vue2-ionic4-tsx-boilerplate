<template>
    <div class="ion-page">
        <ion-header>
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-back-button></ion-back-button>
                </ion-buttons>
                <ion-title color="light">Home</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content padding>
            <HelloWorld msg="Welcome to Your Vue.js + Ionic 4 App!"/>

            <canvas id="pixi"></canvas>

            <v-stage ref="stage" :config="stageSize">
                <v-layer ref="layer">
                    <v-rect
                            ref="rect"
                            @dragstart="changeSize"
                            @dragend="changeSize"
                            :config="{
            width: 50,
            height: 50,
            fill: 'green',
            draggable: true
          }"
                    />
                    <v-regular-polygon
                            ref="hexagon"
                            :config="{
          x: 200,
          y: 200,
          sides: 6,
          radius: 20,
          fill: 'red',
          stroke: 'black',
          strokeWidth: 4
        }"
                    />
                </v-layer>
            </v-stage>

        </ion-content>
        <ion-footer>
            <ion-toolbar class="ion-text-center" color="primary">
                <ion-button fill="clear" color="light" @click="seeAbout">
                    About
                    <ion-icon slot="end" name="logo-ionic"></ion-icon>
                </ion-button>
            </ion-toolbar>
        </ion-footer>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue';
import Konva from 'konva';
import * as PIXI from 'pixi.js';
import {namespace} from 'vuex-class';

const DemoModule = namespace('DemoModule');

const width = window.innerWidth;
const height = window.innerHeight;

interface LooseObject {
	[key: string]: any;
}

@Component({
	components: {
		HelloWorld,
	},
})
export default class Demo extends Vue {


	@DemoModule.State
	public title!: string;

	@DemoModule.Getter
	public titleUpperCase!: string;

	@DemoModule.Action
	public updateTitle!: (newTitle: string) => void;

	public stageSize = {
		width,
		height,
	};

	public mounted() {
		this.drawPixi();

		const vm = this;
		const amplitude = 100;
		const period = 5000;

		const centerX = (vm.$refs.stage as LooseObject).getNode().getWidth() / 2;

		this.updateTitle('SUCK');

		const hexagon = (this.$refs.hexagon as LooseObject).getNode();

		// example of Konva.Animation
		const anim = new Konva.Animation((frame) => {
			if (frame === undefined) { return; }
			hexagon.setX(
				amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX,
			);
		}, hexagon.getLayer());

		anim.start();
	}

	public drawPixi() {
		const canvas: HTMLCanvasElement = document.getElementById('pixi') as HTMLCanvasElement;

		const app = new PIXI.Application({
			width: window.innerWidth,
			height: window.innerHeight,
			antialias: true,
			transparent: true,
			view: canvas,
		});

		const graphics = new PIXI.Graphics();

		graphics.beginFill(0xDE3249);
		graphics.drawRect(50, 50, 100, 100);
		graphics.endFill();

		graphics.lineStyle(2, 0xFEEB77, 1);
		graphics.beginFill(0x650A5A);
		graphics.drawRect(200, 50, 100, 100);
		graphics.endFill();

		graphics.lineStyle(10, 0xFFBD01, 1);
		graphics.beginFill(0xC34288);
		graphics.drawRect(350, 50, 100, 100);
		graphics.endFill();

		graphics.lineStyle(2, 0xFFFFFF, 1);
		graphics.beginFill(0xAA4F08);
		graphics.drawRect(530, 50, 140, 100);
		graphics.endFill();

		graphics.lineStyle(0);
		graphics.beginFill(0xDE3249, 1);
		graphics.drawCircle(100, 250, 50);
		graphics.endFill();

		graphics.lineStyle(2, 0xFEEB77, 1);
		graphics.beginFill(0x650A5A, 1);
		graphics.drawCircle(250, 250, 50);
		graphics.endFill();

		graphics.lineStyle(10, 0xFFBD01, 1);
		graphics.beginFill(0xC34288, 1);
		graphics.drawCircle(400, 250, 50);
		graphics.endFill();

		graphics.lineStyle(2, 0xFFFFFF, 1);
		graphics.beginFill(0xAA4F08, 1);
		graphics.drawEllipse(600, 250, 80, 50);
		graphics.endFill();

		graphics.beginFill(0xFF3300);
		graphics.lineStyle(4, 0xffd900, 1);
		graphics.moveTo(50, 350);
		graphics.lineTo(250, 350);
		graphics.lineTo(100, 400);
		graphics.lineTo(50, 350);
		graphics.closePath();
		graphics.endFill();

		graphics.lineStyle(2, 0xFF00FF, 1);
		graphics.beginFill(0x650A5A, 0.25);
		graphics.drawRoundedRect(50, 440, 100, 100, 16);
		graphics.endFill();

		graphics.lineStyle(2, 0xFFFFFF);
		graphics.beginFill(0x35CC5A, 1);
		graphics.drawStar(360, 370, 5, 50);
		graphics.endFill();

		graphics.lineStyle(2, 0xFFFFFF);
		graphics.beginFill(0xFFCC5A, 1);
		graphics.drawStar(280, 510, 7, 50);
		graphics.endFill();

		graphics.lineStyle(4, 0xFFFFFF);
		graphics.beginFill(0x55335A, 1);
		graphics.drawStar(470, 450, 4, 50);
		graphics.endFill();

		const path = [600, 370, 700, 460, 780, 420, 730, 570, 590, 520];

		graphics.lineStyle(0);
		graphics.beginFill(0x3500FA, 1);
		graphics.drawPolygon(path);
		graphics.endFill();

		app.stage.addChild(graphics);
	}

	public changeSize(event: Event) {
		(event.target as LooseObject).to({
			scaleX: Math.random() + 0.8,
			scaleY: Math.random() + 0.8,
			duration: 0.2,
		});
	}

	private seeAbout(): void {
		this.$router.push('/about');
	}
}
</script>
