const multer = require('multer');
const sharp = require('sharp');
const Blog = require('../models/blogModel');
const APIFeatures = require('../utils/apiFeature');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadUserPhoto = upload.single('photo');

exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    // .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/img/users/${req.file.filename}`);

  next();
});

//create Blog
exports.createBlog = catchAsync(async (req, res, next) => {
  if (req.file) req.body.photo = req.file.filename;
  const newBlog = await Blog.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      newBlog,
    },
  });
});

//get Blog
exports.getBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOne({ slug: req.params.slug });

  if (!blog) {
    return next(new AppError('No blog found with that slug', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      blog,
    },
  });
});

//Get all Blog
exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Blog.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const blogs = await features.query;
  res.status(200).json({
    status: 'success',
    results: blogs.length,
    data: {
      blogs,
    },
  });
});

//Update blog
exports.updateBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOneAndUpdate(
    { slug: req.params.slug },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  if (!blog) {
    return next(new AppError('No blog found with that slug', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      blog,
    },
  });
});

//
exports.deleteBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOneAndDelete({ slug: req.params.slug });
  if (!blog) {
    return next(new AppError('No blog found with that slug', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});

exports.deleteAllBlog = catchAsync(async (req, res, next) => {});
