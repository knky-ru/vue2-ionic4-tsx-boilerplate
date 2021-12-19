import {VueTsComponent, Component, Watch, Emit} from '@/types/vue-ts-component';
import {VNode} from 'vue';

import {useStore} from 'vuex-simple';
import {RootModule} from '@/store/root';
import {HelloWorld} from '@/components';

interface Props {
	text: string;
	important?: boolean;
}

@Component
export default class Home extends VueTsComponent<Props> {

	text = 'hello';
	store = useStore<RootModule>(this.$store);

	mounted(): void {
		this.store.demo.setText('Hello world!');
		this.text = this.store.demo.text;
	}

	render(): VNode {
		return (
			<div class='ion-page'>
				<ion-header>
					<ion-toolbar color='primary'>
						<ion-title color='light'>Home</ion-title>
					</ion-toolbar>
				</ion-header>

				<ion-content padding>
					<HelloWorld
						msg={this.text}
					/>
				</ion-content>

				<ion-footer>
					<ion-toolbar class='ion-text-center' color='primary'>
					</ion-toolbar>
				</ion-footer>
			</div>
		);
	}

}
