const CreateMap = (map) => {
	return { type: 'CREATEMAP', map };
};
const UpdateMap = (cellX, cellY, value) => {
	return { type: 'UPDATEMAP', cellX, cellY, value };
};

export { UpdateMap, CreateMap };
