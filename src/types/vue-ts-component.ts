import Vue from 'vue';

type CssClass = (string | false | {
	[key: string]: string;
});

export class VueTsComponent<P = {}> extends Vue {
	public $props: P & {
		key?: string | number,
		ref?: string,
		class?: CssClass | CssClass[],
		click?: (e: Event) => void,
	};

	public $clipboard: (value: string) => void;
}

export { Component, Prop, Watch, Emit } from 'vue-property-decorator';
