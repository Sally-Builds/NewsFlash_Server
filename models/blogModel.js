const slugify = require('slugify');
const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a blog title'],
    unique: true,
  },
  author: {
    type: String,
    default: 'Anonymous Writer',
  },
  preview: {
    type: String,
    required: [true, 'Please you have to provide a preview text or abstract'],
  },
  post: {
    type: String,
    required: [true, 'Please you must provide the blog pose'],
  },
  tags: {
    type: String,
    enum: [
      'Sport',
      'Politics',
      'Entertainment',
      'Technology',
      'Art',
      'Business',
      'Fashion',
      'Education',
    ],
    required: [true, 'Please provide tags for SEO'],
  },
  photo: {
    type: String,
  },
  slug: String,
});

blogSchema.pre('save', function (next) {
  this.slug = slugify(this.title);
  next();
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
