import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ActivityFieldCustomDocument extends Document {
    @Prop()
    id: number;

    @Prop()
    activityId: number;

    @Prop()
    customs: any;
}

export const ActivityFieldCustomSchema = SchemaFactory.createForClass(ActivityFieldCustomDocument);