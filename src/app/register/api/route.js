import { connectDB } from "../../../../lib/connectDB";

export const POST = async (request) => {
    try {
        const newUser = await request.json();

        const db = await connectDB();
        const userCollection = db.collection("user");

        // Check if the user already exists
        const existingUser = await userCollection.findOne({ email: newUser.email });
        if (existingUser) {
            return new Response(JSON.stringify({ message: "User Already Exists" }), { status: 409 });
        }

        // Insert the new user into the database
        const result = await userCollection.insertOne(newUser);

        return new Response(JSON.stringify({ message: "User created successfully", result }), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
};
