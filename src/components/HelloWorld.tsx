import {VueTsComponent, Component, Watch, Emit, Prop} from '@/types/vue-ts-component';
import {VNode} from 'vue';

import styles from './HelloWorld.css?module';

interface Props {
	msg?: string;
}

@Component
export default class HelloWorld extends VueTsComponent<Props> {

	@Prop({default: 'Default text'})
	msg: Props['msg'];

	render(): VNode {
		return (
			<div class={styles.hello}>
				<ion-grid>
					<ion-column>
						<div>
							<img alt='Vue logo' src={require('../assets/logo.png')} />
						</div>
						<h1>
							{ this.msg }
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
			</div>
		);
	}

}
