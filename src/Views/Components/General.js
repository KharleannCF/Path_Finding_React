import styled from 'styled-components/macro';

const PencilSelector = styled.div`
	display: flex;
	margin: 0px;
	justify-content: space-between;
	align-items: space-between;
	width: 40%;
	margin-bottom: 1rem;
`;

const Pencil = styled.div`
	background: ${(props) => props.color};
	width: 5rem;
	height: 2rem;
`;

const Option = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	color: white;
`;

export { PencilSelector, Pencil, Option };
