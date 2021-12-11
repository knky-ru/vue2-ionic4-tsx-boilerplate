import {VueTsComponent, Component, Watch, Emit, Prop} from '@/types/vue-ts-component';
import {VNode} from 'vue';

import styles from './HelloWorld.css?module';

interface Props {
	msg?: string;
}

@Component
export default class HelloWorld extends VueTsComponent<Props> {

	@Prop()
	msg: Props['msg'];

	render(): VNode {
		return (
			<div class={styles.hello}>
				<ion-grid>
					<ion-row class='ion-justify-content-center ion-align-items-center'>
						<img alt='Vue logo' src={require('../assets/logo.png')} />
							<h1>
								{ this.msg }
							</h1>
					</ion-row>
				</ion-grid>
			</div>
		);
	}

}
