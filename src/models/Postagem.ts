import mongoose, { Document, Schema } from "mongoose";


export interface IPostagem extends Document {
    title: string;
    description: string;
    
}

const postagemSchema = new Schema<IPostagem>({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Postagem = mongoose.model<IPostagem>("Postagem", postagemSchema);



export default Postagem;
