const notFound = (req, res) => res.status(404).send("Route does noe exist");

module.exports = notFound;
