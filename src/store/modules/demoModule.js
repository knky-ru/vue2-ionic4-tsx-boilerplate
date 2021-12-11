import { __decorate } from "tslib";
import { Getter, Mutation, State } from 'vuex-simple';
import { BaseModule } from '@/store/common/baseModule';
export class DemoModule extends BaseModule {
    textState;
    get text() {
        return this.textState || '';
    }
    setText(text) {
        this.textState = text;
    }
}
__decorate([
    State()
], DemoModule.prototype, "textState", void 0);
__decorate([
    Getter()
], DemoModule.prototype, "text", null);
__decorate([
    Mutation()
], DemoModule.prototype, "setText", null);
