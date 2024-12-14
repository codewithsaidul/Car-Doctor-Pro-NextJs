import { connectDB } from "../../../../../lib/connectDB"

export const GET = async (req) => {
    const db = await connectDB();

    const servicesCollection = db.collection("services");

    try {
        const response = await servicesCollection.find().toArray();
        return new Response(JSON.stringify(response))
    } catch (error) {
        console.log(error);
    }
}