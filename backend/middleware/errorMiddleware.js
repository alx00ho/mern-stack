const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || 500;

  res.status(statusCode);

  res.json({
    message: err.message,
    stack: process.env.NODE_DEV === "production" ? undefined : err.stack,
  });
};

module.exports = {
  errorHandler,
};
