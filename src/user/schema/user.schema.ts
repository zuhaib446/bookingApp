import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UserInterface } from '../interface/user.interface';

@Schema({ timestamps: true })
export class User implements UserInterface {
    @Prop()
    firstName: string;

    @Prop({ required: true, unique: true })
    lastName: string;

    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop({
        enum: ['user', 'owner', 'admin'],
        default: 'user',
    })
    role: string;

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