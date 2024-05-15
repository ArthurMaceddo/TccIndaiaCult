import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUsuario extends Document {
  name: string;
  email: string;
  password: string;
  comparePassword: (enteredPassword: string) => Promise<boolean>;
}

const usuarioSchema = new Schema<IUsuario>({
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
});

usuarioSchema.pre<IUsuario>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  return next();
});

usuarioSchema.methods.comparePassword = async function (
  enteredPassword: string
) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Usuario = mongoose.model<IUsuario>('User', usuarioSchema);

export default Usuario;
