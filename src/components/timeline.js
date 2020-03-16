import React from 'react';
import styled from 'styled-components';

const Timeline = () => {

	const history = [
		{
			year: 'present',
			role: 'Product Designer',
			company: 'PAX Italia'
		},
		{
			year: '2018',
			role: 'UX Designer',
			company: 'PAX Italia'
		},
		{
			year: '2016',
			role: 'Fullstack Designer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2013',
			role: 'Frontend Developer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2012',
			role: 'Owner',
			company: 'skillybiz.com'
		},
		{
			year: '2009',
			role: 'Web Designer',
			company: 'Freelance'
		}
	];

	const TimelineSection = styled.section`
		.entriesWrapper {
			padding-top: 5em;
			position: relative;
			min-height: 90vh;
			margin: 0;
			overflow: hidden;

			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 19px;
				bottom: 0px;
				width: 4px;
				background-color: #000;
				@media only screen and (min-width: 900px) {
					left: 50%;
				}
			}
			.entries {
				width: calc(100% - 80px);
				max-width: 800px;
				margin: auto;
				position: relative;
				left: -5px;

				.entry {
					position: relative;
					width: 100%;
					float: right;
					padding: 60px 20px;
					clear: both;
					text-align: left;
					margin-top: -50px;

							&.visible {
								.body {
									opacity: 1;
								}
							}
					
					@media only screen and (min-width: 900px) {
						width: calc(50% - 80px);
					}

					.title {
						font-size: 1rem;
						line-height: 0.8;
						padding: 1em;
						position: relative;
						cursor: pointer;
						transition: all 0.3s ease-in-out;
						
						&:hover {
							font-weight: 600;
							&:before {
								background-color: ${(props) => props.theme.colors.primary};
							}
						}

						&:before {
							content: '';
							position: absolute;
							width: 18px;
							height: 18px;
							background-color: #000;
							border-radius: 100%;
							top: 25px;
							right: calc(100% + 25px);
							z-index: 1000;

							@media only screen and (min-width: 900px) {
								right: calc(100% + 84px);
							}
						}
					}
					.body {
						transition: all 0.3s linear;
						p {
							font-size: 1rem;
							font-weight: 800;
							margin: 0.2em 0;

							span {
								display: block;
								font-size: 0.9rem;
								font-weight: 300;
								line-height: 0.9;
							}
						}
					}

					.body {
						@media only screen and (min-width: 900px) {
							position: absolute;
							opacity: 0;
							top: 50px;
							right: 27em;
							min-width: 230px;
							text-align: right;
							.title {
								&:before {
									left: calc(100% + 98px);
								}
								&.big:before {
									transform: translate(-8px, -50%);
								}
							}

							&.visible {
								opacity: 1;
							}
						}
					}

/* 
					&:nth-child(2n) {
						@media only screen and (min-width: 900px) {
							text-align: right;
							float: left;
							.title {
								&:before {
									left: calc(100% + 98px);
								}
								&.big:before {
									transform: translate(-8px, -50%);
								}
							}
						}
					} */
				}
			}
		}
	`;

	const showCurrentItem = (event) => {
		event.preventDefault();
		let target = event.target;
		let parent = target.parentElement;
		parent.classList.toggle('visible');


	}

	return (
		<TimelineSection>
			<div className="entriesWrapper">
				<div className="entries">
					{history.slice(0).reverse().map((job, index) => {
						return (
							<div key={index} className="entry" onClick={showCurrentItem}>
								<a className="title" >{job.year} </a>
								<div className="body">
									<p>
										{job.role}
										<span>{job.company}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</TimelineSection>
	);
};

export default Timeline;
