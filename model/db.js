const mongoose=require('mongoose');
const connection_string='mongodb+srv://saurabh:2Uj7TCQmSZZPi1A5@cluster0-bfqhn.mongodb.net/node-angular?retryWrites=true&w=majority';
mongoose
  .connect(
    connection_string
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((error) => {
    console.log("Connection failed! due to ",error);
  });
// const db = mongoose.connection;

// //Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));