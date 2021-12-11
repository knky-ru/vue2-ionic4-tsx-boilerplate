import { Getter, Mutation, State } from 'vuex-simple';

import { BaseModule } from '@/store/common/baseModule';

export class DemoModule extends BaseModule {

	@State()
	private textState?: string;

	@Getter()
	get text(): string {
		return this.textState || '';
	}

	@Mutation()
	setText(text: string): void {
		this.textState = text;
	}

}
