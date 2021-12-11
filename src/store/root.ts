import { Module } from 'vuex-simple';
export { useStore } from 'vuex-simple';

import { DemoModule } from '@/store/modules/demoModule';

export class RootModule {

	@Module()
	public demo = new DemoModule(this);

}
