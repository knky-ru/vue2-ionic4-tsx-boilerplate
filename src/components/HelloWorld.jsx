import { __decorate } from "tslib";
import { VueTsComponent, Component, Prop } from '@/types/vue-ts-component';
import styles from './HelloWorld.css?module';
let HelloWorld = class HelloWorld extends VueTsComponent {
    msg;
    render() {
        return (<div class={styles.hello}>
				<ion-grid>
					<ion-column>
						<div>
							<img alt='Vue logo' src={require('../assets/logo.png')}/>
						</div>
						<h1>
							{this.msg}
						</h1>
						<div>
							<router-link to='/about'>
								<ion-button color='primary'>About</ion-button>
							</router-link>
							<router-link to='/pixi'>
								<ion-button color='secondary'>PixiJS</ion-button>
							</router-link>
						</div>
					</ion-column>
				</ion-grid>
			</div>);
    }
};
__decorate([
    Prop({ default: 'Default text' })
], HelloWorld.prototype, "msg", void 0);
HelloWorld = __decorate([
    Component
], HelloWorld);
export default HelloWorld;
