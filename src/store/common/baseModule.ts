import { State, Mutation, Getter } from 'vuex-simple';

import { RootModule } from '@/store/root';

// import { Api } from '@/api';

export class BaseModule {
	protected root: RootModule;
	// protected api: Api;

	constructor(root: RootModule) {
		this.root = root;

		// this.api = new Api({
		// 	onFailRequest: (msg: string, errorDetail: string) => root.notification.failAction(msg, errorDetail, 'Скопировать', () => navigator?.clipboard?.writeText(errorDetail)),
		// 	logout: () => root.authorization.logout(),
		// });
	}

	// @State()
	// private isFetchingCount = 0;
	//
	// @Getter()
	// public get isFetching() {
	// 	return this.isFetchingCount > 0;
	// }
	//
	// @Mutation()
	// public setIsFetching(value: boolean): void {
	// 	this.isFetchingCount += value ? 1 : -1;
	// }
}
