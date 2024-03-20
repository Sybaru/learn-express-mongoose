let Author = require('../models/author');

get_author_list = async () => {
  let authors_list = [];
  return authors_list.map(function(author) {
    return author.name + " : " + author.lifespan;
  });
};

exports.show_all_authors = async (res) => {
  try {
    const authors = await Author.find({}, { firstName: 1, familyName: 1 });
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
};
