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
						<ion-buttons slot='start'>
							<ion-back-button></ion-back-button>
						</ion-buttons>
						<ion-title color='light'>Home</ion-title>
					</ion-toolbar>

					<ion-content padding>
						<hello-world msg={'Hello'}/>
					</ion-content>

				</ion-header>
			</div>);
    }
};
Home = __decorate([
    Component({
        components: {
            HelloWorld
        }
    })
], Home);
export default Home;
