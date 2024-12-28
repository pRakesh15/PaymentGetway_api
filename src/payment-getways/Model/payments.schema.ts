import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema({
    timestamps:true
})
export class Payments{
    @Prop()
    razorpay_payment_id:string;

    @Prop()
    razorpay_order_id:string;


    @Prop()
    razorpay_signature:string;
}

export const  PaymentSchema =SchemaFactory.createForClass(Payments)