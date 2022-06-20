const mongoose = require('mongoose');
const application = require('./application');

const DB =
  'mongodb+srv://Danielmishan:Danielush7598@cluster0.cwwwndg.mongodb.net/Store?retryWrites=true&w=majority';

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const server = application.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
