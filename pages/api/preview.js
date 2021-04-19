export default async function preview(req, res) {
  try {
    console.error("TODO Check session for `Auth.currentAuthenticatedUser()`");
  } catch (error) {
    return res.status(401).json(error);
  }

  res.setPreviewData({});

  const { slug } = req.query;

  if (!slug) {
    return res.redirect(302, "/");
  }

  // TODO Fetch posts by `slug` and get first `post`
  const [project] = require("fixtures").projects.filter((project) => project.slug === slug);

  if (!project) {
    return res.status(404).json({ message: "Post not found" });
  }

  res.redirect(`/projects/${project.slug}`);
}
