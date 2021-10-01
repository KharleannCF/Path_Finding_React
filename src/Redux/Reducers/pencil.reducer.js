export function pencil(
	state = { color: 'rgb(0,100,0)', value: 1, text: 'Wall' },
	action
) {
	switch (action.type) {
		case 'SELECT':
			return Object.assign({}, state, {
				color: action.color,
				value: action.value,
				text: action.text,
			});
		default:
			return state;
	}
}
