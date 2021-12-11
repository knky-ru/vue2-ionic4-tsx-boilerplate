import { __decorate } from "tslib";
import { Module } from 'vuex-simple';
export { useStore } from 'vuex-simple';
import { DemoModule } from '@/store/modules/demoModule';
export class RootModule {
    demo = new DemoModule(this);
}
__decorate([
    Module()
], RootModule.prototype, "demo", void 0);
