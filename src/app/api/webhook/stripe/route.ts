import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const signature = request.headers.get("stripe-signature");

    if (!signature) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    // Verify webhook signature
    // const payload = await request.text();
    // const event = stripe.webhooks.constructEvent(
    //   payload,
    //   signature,
    //   process.env.STRIPE_WEBHOOK_SECRET!
    // );

    // Handle different event types
    // switch (event.type) {
    //   case "checkout.session.completed":
    //     // Handle successful payment
    //     break;
    //   case "customer.subscription.created":
    //     // Handle new subscription
    //     break;
    //   case "customer.subscription.deleted":
    //     // Handle cancelled subscription
    //     break;
    // }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
