import { VNode } from 'vue';

type ColumnRenderer<RowType> = (row: RowType) => (VNode | string);

interface SlotResult<RowType> {
	default: (props: {
		row: RowType,
	}) => (VNode | string);
}

export const columnScopeSlot = <RowType>(render: ColumnRenderer<RowType>): SlotResult<RowType> => ({
	default: (props) => render(props.row),
});

export function createColumnScopeSlot<RowType>() {
	return (render: ColumnRenderer<RowType>): SlotResult<RowType> => ({
		default: (props) => render(props.row),
	});
}
