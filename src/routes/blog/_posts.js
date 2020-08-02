// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
  {
    title: "What is ISS?",
    slug: "what-is-iss",
    html: `
			<p>The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. The ISS program is a multi-national collaborative project between five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). It is an international collaborative effort between multiple countries. The ownership and use of the space station is established by intergovernmental treaties and agreements. It evolved from the Space Station Freedom proposal. <a href="https://en.wikipedia.org/wiki/International_Space_Station">continue reading...</a></p>
		`,
  },

  {
    title: "What is the view from ISS?",
    slug: "why-the-view-from-iss",
    html: `
			<p>Check out the ISS <a href="https://www.nasa.gov/multimedia/nasatv/iss_ustream.html">webcam</a>.</p>
		`,
  },

  {
    title: "Do you want to know more?",
    slug: "do-you-want-to-know-more",
    html: `
			<p>Visit official ISS <a href="https://www.nasa.gov/mission_pages/station/main/index.html">website</a>.</p> 
		`,
  },
];

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
