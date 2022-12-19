import { model, Schema } from "mongoose";

const ImageSchema = new Schema({
  originalname: String,
  mimetype: String,
  filename: String,
  path: String,
  size: Number,
});

const BackgroundImageSchema = new Schema({
  originalname: String,
  mimetype: String,
  filename: String,
  path: String,
  size: Number,
});

const PrimarySpeakerSchema = new Schema({
  originalname: String,
  mimetype: String,
  filename: String,
  path: String,
  size: Number,
  name: {
    type: String,
    required: [true, "The primary speaker requires a name"],
  },

  color: {
    type: String,
    required: [
      true,
      "The primary speaker requires a color in hexadecimal values",
    ],
  },
  geolocation: {
    type: String,
    required: [true, "The primary speaker requires geolocation coordinates"],
  },
});

const SecondarySpeakerSchema = new Schema({
  originalname: String,
  mimetype: String,
  filename: String,
  path: String,
  size: Number,
  name: {
    type: String,
    required: [true, "The secondary speaker requires a name"],
  },
  color: {
    type: String,
    required: [
      true,
      "The secondary speaker requires a color in hexadecimal values",
    ],
  },
  geolocation: {
    type: String,
    required: [true, "The secondary speaker requires geolocation coordinates"],
  },
});

const LocationSchema = new Schema({
  name: String,
  address: String,
  city: String,
  image: ImageSchema,
  //background_image: BackgroundImageSchema,
  //primaryspeaker: PrimarySpeakerSchema,
  //secondaryspeakers: [SecondarySpeakerSchema],
});

const location = model("location", LocationSchema);

export default location;
