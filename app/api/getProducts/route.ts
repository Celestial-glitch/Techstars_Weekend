import Stripe from "stripe";
import { NextResponse } from "next/server";

// @ts-ignore
export async function GET(request) {
    if (!process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY) {
        return NextResponse.json({ error: "Stripe API key not configured" }, { status: 500 });
    }

    const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY, {
        apiVersion: '2022-11-15',
    })
    
    try {
        const prices = await stripe.prices.list({
            limit: 4,
        });

        return NextResponse.json(prices.data.reverse())
    } catch (error) {
        console.error("Stripe error:", error);
        return NextResponse.json({ error: "Failed to fetch prices" }, { status: 500 });
    }
}