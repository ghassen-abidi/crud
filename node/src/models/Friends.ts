const mongoose = require("mongoose");
const FriendSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  
});
export default mongoose.model("friends", FriendSchema);
