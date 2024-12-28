import { Injectable } from '@nestjs/common';
import { appConfig } from 'src/config/app.config';
import { instance } from 'src/main';
import crypto from "crypto"
import { InjectModel } from '@nestjs/mongoose';
import { Payments } from './Model/payments.schema';
import mongoose from 'mongoose';
@Injectable()
export class PaymentGetwaysService {

    constructor(
        @InjectModel(Payments.name)
        private paymentModel: mongoose.Model<Payments>
    ) { }

    startService(): string {
        return "this is a paymentService"
    }

    //function for checkout of paymentgateway or create a order for payment ,,,
    async checkout(amount: number) {
        const options = {
            amount: Number(amount * 100),  // Amount is in currency subunits. Default currency is INR. Hence, amount refers to amount paise thats why multiple it by 100
            currency: "INR",
        };
        const order = await instance.orders.create(options)
        return order;

    }

    //function for payment verification  or order verification..
    async paymentVerification(
        razorpay_payment_id: string,
        razorpay_order_id: string,
        razorpay_signature: string
    ): Promise<boolean> {
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", appConfig.key_secret)
            .update(body.toString())
            .digest("hex");

        // console.log(razorpay_signature);
        // console.log(expectedSignature);

        if (razorpay_signature === expectedSignature) {
            // Save the data in the database (if needed)

           await this.paymentModel.create({razorpay_order_id,razorpay_payment_id,razorpay_signature})
            // console.log("Payment verification successful");

            return true;
        } else {
            console.log("Payment verification failed");
            return false;
        }
    }


    async getKey() {
        return appConfig.key_secret
    }
}
