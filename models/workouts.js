const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userCreated: {
    type: Date,
    default: Date.now,
  },

  lastUpdated: Date,

  fullName: String,
});

UserSchema.methods.setFullName = function () {
  this.fullName = `${this.firstName} ${this.lastName}`;

  return this.fullName;
};

UserSchema.methods.lastUpdatedDate = function () {
  this.lastUpdated = Date.now();

  return this.lastUpdated;
};

const Workout = mongoose.model("Workout", UserSchema);

module.exports = Workout;
