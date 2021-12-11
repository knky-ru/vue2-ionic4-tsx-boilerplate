// import { Api } from '@/api';
export class BaseModule {
    root;
    // protected api: Api;
    constructor(root) {
        this.root = root;
        // this.api = new Api({
        // 	onFailRequest: (msg: string, errorDetail: string) => root.notification.failAction(msg, errorDetail, 'Скопировать', () => navigator?.clipboard?.writeText(errorDetail)),
        // 	logout: () => root.authorization.logout(),
        // });
    }
}
