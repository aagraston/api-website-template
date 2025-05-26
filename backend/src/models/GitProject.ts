import mongoose, { Schema, Document } from 'mongoose';

export interface IGitProject extends Document {
    title: string;
    url: string;
}

const GitProjectSchema: Schema = new Schema<IGitProject>(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        url: {
            type: String,
            required: true,
            trim: true,
        }
    },
    {collection: 'repos'}
)

export const GitProject = mongoose.model<IGitProject>('repos', GitProjectSchema);