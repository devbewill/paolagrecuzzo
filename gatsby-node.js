const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/post.js');
	const tagTemplate = path.resolve('src/templates/tags.js');

	const res = await graphql(`
        query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}

			allContentfulBlogPost {
				group(field: tag) {
					totalCount
					fieldValue
				}
  			}
        }
	`);

	// Extract tag data from query
	const tags = res.data.allContentfulBlogPost.group;

	// Make tag pages
	tags.forEach((tag) => {
		createPage({
			path: `/blog/${tag.fieldValue}/`,
			component: tagTemplate,
			context: {
				tag: tag.fieldValue
			}
		});
	});

	const posts = res.data.allContentfulBlogPost.edges;
	posts.forEach((edge, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;

		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
				next,
				previous
			}
		});
	});
};
