const app = require('./src/app');
const port = process.env.PORT || 1001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
