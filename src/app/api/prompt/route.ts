import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest): Promise<NextResponse> => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({}).populate('creator');

        return new NextResponse(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        return new NextResponse("Failed to fetch all prompts", { status: 500 });
    }
};
