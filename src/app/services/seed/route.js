import { connectDB } from "../../../../lib/connectDB"
import { CarServices } from "../../../../lib/services";

export const GET = async () => {
    const db = await connectDB();

    const servicesCollection = db.collection("services");

    try {
        await servicesCollection.deleteMany();

        const response = await servicesCollection.insertMany(CarServices);

        return new Response(JSON.stringify({ message: "Seeded Successfully!"}, response))
    } catch (error) {
        console.log(error);
    }
}