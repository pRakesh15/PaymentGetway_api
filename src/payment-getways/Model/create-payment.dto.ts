import { IsNotEmpty, IsString } from "class-validator";



export class createPaymentDto{
    @IsNotEmpty()
    @IsString()
    readonly razorpay_payment_id: string;

    @IsNotEmpty()
    @IsString()
    readonly razorpay_order_id: string;
    @IsNotEmpty()
    @IsString()
    readonly razorpay_signature: string;
}
