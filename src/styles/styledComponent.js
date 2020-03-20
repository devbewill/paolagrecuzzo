import styled from 'styled-components';

export const getRandomColor = () => {
	return `hsla(${360 * Math.random()},100%,70%,1)`;
};

export const Container = styled.div`
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	max-width: ${(props) => (props.fullwidth ? 'none' : '50vw')};
	flex-grow: 1;

	@media only screen and (max-width: 600px) {
		max-width: ${(props) => (props.fullwidth ? 'none' : '90vw')};
	}
`

export const ImageWrapper = styled.div`
	margin: 0 auto;
	padding: 5vw ${(props) => props.sidePadding || '0'};

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	img {
		margin: 0 auto;
	}
`

export const Arrow = styled.i`
		position: relative;
		display: inline-block;
		vertical-align: middle;
		width: 20px;
		height: 20px;
		border-width: 3px 3px 0 0;
		border-style: solid;
		transform: rotate(-135deg);
		animation: leftRight 1s linear infinite;
		color: ${(props) => props.theme.colors.primary};

		&:before{
			content: "";
			right: 0;
			top: -2px;
			position: absolute;
			height: 3px;
			box-shadow: inset 0 0 0 32px;
			transform: rotate(-45deg);
			width: 3vw;
			transform-origin: right top;
		}
		&:after {
			content: "";
		}

		@keyframes leftRight {
			0% {
				margin-left: 2rem
			}

			50%{
				margin-left: 2.5rem
			}

			100%{
				margin-left: 2rem
			}
		}
		
	`
