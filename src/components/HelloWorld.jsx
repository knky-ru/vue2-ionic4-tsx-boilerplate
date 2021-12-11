import { __decorate } from "tslib";
import { VueTsComponent, Component, Prop } from '@/types/vue-ts-component';
let HelloWorld = class HelloWorld extends VueTsComponent {
    msg;
    render() {
        return (<div class="hello">
				<ion-grid>
					<ion-row className="ion-justify-content-center ion-align-items-center">
						<img alt="Vue logo" src="../assets/logo.png"/>
							<h1>
								{this.msg}
							</h1>
					</ion-row>
				</ion-grid>
			</div>);
    }
};
__decorate([
    Prop()
], HelloWorld.prototype, "msg", void 0);
HelloWorld = __decorate([
    Component({
        name: 'hello-world',
    })
], HelloWorld);
export default HelloWorld;
