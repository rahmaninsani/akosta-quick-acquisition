const defaultProps = {
  page: '', // page in src/views/pages
  props: {
    title: '',
    data: {},
    util: {},
    error: '',
  }, // props to pass to page
};

const render = (res, options) => {
  res.render('index', {
    ...defaultProps,
    ...options,
  });
};

module.exports = render;
