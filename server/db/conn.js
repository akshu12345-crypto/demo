const mongoose = require("mongoose");
const DB =
  "mongodb+srv://user123:Radhe@demoapi.kbpet4e.mongodb.net/DemoAPI?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Database Connected"))
  .catch((error) => {
    console.log(error);
  });
