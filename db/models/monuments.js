import mongoose from "mongoose";

const MonumentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  materialUsed: {
    type: String,
    required: false,
  },
  condition: {
    type: String,
    required: false,
  },
  state: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  yearBuilt: {
    type: String,
    required: false,
  },
  longitude:{
    type:Number,
    required:true,
  },
  latitude:{
    type:Number,
    required:true,
  }
});

const Monument =
  mongoose.models.Monument || mongoose.model("Monument", MonumentSchema);

export default Monument;

//singular == Monument
