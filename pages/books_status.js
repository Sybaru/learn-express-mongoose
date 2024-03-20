let BookInstance = require('../models/bookinstance');

exports.show_all_books_status = async (res) => {
  try {
    const books = await Book.find({}, { title: 1, available: 1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch book status' });
  }
};
