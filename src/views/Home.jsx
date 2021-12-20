import { __decorate } from "tslib";
import { VueTsComponent, Component } from '@/types/vue-ts-component';
import { useStore } from 'vuex-simple';
import { HelloWorld } from '@/components';
let Home = class Home extends VueTsComponent {
    text = 'hello';
    store = useStore(this.$store);
    mounted() {
        this.store.demo.setText('Hello world!');
        this.text = this.store.demo.text;
    }
    render() {
        return (<div class='ion-page'>
				<ion-header>
					<ion-toolbar color='primary'>
						<ion-title color='light'>Home</ion-title>
					</ion-toolbar>
				</ion-header>

				<ion-content padding>
					<HelloWorld msg={this.text}/>
				</ion-content>

				<ion-footer>
					<ion-toolbar class='ion-text-center' color='primary'>
					</ion-toolbar>
				</ion-footer>
			</div>);
    }
};
Home = __decorate([
    Component
], Home);
export default Home;
