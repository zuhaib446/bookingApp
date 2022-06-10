import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserInterface } from '../interface/user.interface';

@Schema({ timestamps: true })
export class User implements UserInterface {
    @Prop()
    firstName: string;

    @Prop()
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({ type: [String], default: ['user'], enum: ['user', 'owner', 'admin'] })
    role: [string];

    @Prop()
    bankAccount: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    avatar: string;

    @Prop({ type: Boolean, default: false })
    isActive: boolean;

    @Prop({ type: Boolean, default: false })
    isVerified: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);