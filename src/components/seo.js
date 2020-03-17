import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = (props) => {

	const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          baseUrl
        }
      }
    }
  `);

	const defaults = data.site.siteMetadata;

	if (defaults.baseUrl === '' && typeof window !== 'undefined') {
		defaults.baseUrl = window.location.origin;
	}

	if (defaults.baseUrl === '') {
		console.error('Please set a baseUrl in your site metadata!');
		return null;
	}
	const title = props.title || defaults.title;
	const description = props.description || defaults.description;
	const url = new URL('/blog/' + props.pathname || '', defaults.baseUrl); //to fix for other page
	const image = props.image ? new URL(props.image, defaults.baseUrl) : false;

	console.log(url)
	return (

		< Helmet >
			<title>{title}</title>
			<link rel="canonical" href={url} />
			<meta name="description" content={description} />
			{image && <meta name="image" content={image} />}

			<meta property="og:url" content={url} />
			<meta property="og:type" content="article" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			{image && <meta property="og:image" content={image} />}

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{image && <meta name="twitter:image" content={image} />}
		</Helmet >
	);
};

export default SEO;