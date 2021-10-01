export function map(state = {}, action) {
	switch (action.type) {
		case 'UPDATEMAP':
			const newMap = Array.from(state.map);
			newMap[action.cellX][action.cellY] = action.value;
			return Object.assign({}, state, { map: newMap });
		case 'CREATEMAP':
			return Object.assign({}, state, { map:action.map });
		default:
			return state;
	}
}
