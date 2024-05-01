import mongoose, { Document, Schema } from "mongoose";
import bcrypt from "bcryptjs";

export interface IArtista extends Document {
  name: string;
  email: string;
  password: string;
  genre: string;
  description: string;
  image: string;
  banner: string;
  comparePassword: (enteredPassword: string) => boolean;
}

const artistaSchema = new Schema<IArtista>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  banner: {
    type: String,
    required: true,
  },
});
 artistaSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
 artistaSchema.methods.comparePassword = async function (enteredPassword: string) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Artista = mongoose.model("Artista", artistaSchema);

export default Artista;