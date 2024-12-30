import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { PaymentGetwaysService } from './payment-getways.service';
import { Response } from 'express';
import { createPaymentDto } from './Model/create-payment.dto';

@Controller('payment-getways')
export class PaymentGetwaysController {
    constructor(private readonly paymentService: PaymentGetwaysService) { }

    @Get("/any")
    getStart() {
        return this.paymentService.startService();
    }

    @Post("/checkout")
    postCheckOut(@Body() body: { amount: number }) {
        const { amount } = body; // Extract the `amount` field from the request body
        return this.paymentService.checkout(amount);
    }

    @Post("/paymentVerification")
    async postPaymentVerification(
        @Body() body: createPaymentDto,
        @Res() res: Response
    ) {
        try {
            const isVerified = await this.paymentService.paymentVerification(
                body.razorpay_payment_id,
                body.razorpay_order_id,
                body.razorpay_signature
            );

            if (isVerified) {
                const redirectUrl = `https://payment-gatway-web.vercel.app/coffee/paymentsuccessfull?paymentid=${body.razorpay_payment_id}`;
                return res.redirect(redirectUrl);
            } else {
                return res.status(400).send({ message: "Payment verification failed" });
            }
        } catch (error) {
            console.error("Error during payment verification:", error);
            return res.status(500).send({ message: "Internal server error", error });
        }
    }

    @Get("/getKey")
    getKey() {
        return this.paymentService.getKey()
    }

}
