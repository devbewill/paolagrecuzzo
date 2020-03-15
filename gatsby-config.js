/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'paolagrecuzzo.com',
		author: 'Paola Grecuzzo'
	},
	plugins: [
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: 'SP',
				short_name: 'SP',
				start_url: '/',
				background_color: '#fff',
				theme_color: '#000',
				// Enables "Add to Homescreen" prompt and disables browser UI (including back button)
				// see https://developers.google.com/web/fundamentals/web-app-manifest/#display
				display: 'standalone',
				icon: 'src/images/icon.png', // This path is relative to the root of the site.
				// An optional attribute which provides support for CORS check.
				// If you do not provide a crossOrigin option, it will skip CORS for manifest.
				// Any invalid keyword or empty string defaults to `anonymous`
				crossOrigin: `use-credentials`
			}
		},
		{
			resolve: `gatsby-plugin-scroll-reveal`,
			options: {
				threshold: 0.1, // Percentage of an element's area that needs to be visible to launch animation
				once: true, // Defines if animation needs to be launched once
				disable: false, // Flag for disabling animations

				// Advanced Options
				selector: '[data-sal]', // Selector of the elements to be animated
				animateClassName: 'sal-animate', // Class name which triggers animation
				disabledClassName: 'sal-disabled', // Class name which defines the disabled state
				rootMargin: '0% 50%', // Corresponds to root's bounding box margin
				enterEventName: 'sal:in', // Enter event name
				exitEventName: 'sal:out', // Exit event name
			}
		},
		{
			resolve: `gatsby-plugin-google-fonts`,
			options: {
				fonts: [`Playfair Display\:400,700,900`, `Gothic A1\:100,300,400,700`, `Italiana`],
				display: 'swap'
			}
		},
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},

		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				// path: `${__dirname}/src`
				path: path.join(__dirname, `src`, `images`)
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: true,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
					}
				]
			}
		}
	]
};
