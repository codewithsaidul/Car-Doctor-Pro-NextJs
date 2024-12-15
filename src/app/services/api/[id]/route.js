
import { connectDB } from "../../../../../lib/connectDB"

export const GET = async (req, { params }) => {

    const db = await connectDB();

    const servicesCollection = db.collection("services");

    try {

        // const query = { _id: new ObjectId(id)}

        const response = await servicesCollection.findOne({ _id: params.id });
        console.log(response)
        return new Response(JSON.stringify(response))
    } catch (error) {
        console.log(error);
    }
}