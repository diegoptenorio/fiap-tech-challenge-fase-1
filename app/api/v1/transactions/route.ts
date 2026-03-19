import { NextResponse } from "next/server";

const mock = [
    {
        id: "8f9e0b3a-51b1-4d29-a9cf-91b7c9f9999",
        created_at: "2026-02-04T23:03:07.367Z",
    },
    {
        id: "8f9e0b3a-51b1-4d29-a9cf-91b7c9f99968",
        created_at: "2026-02-04T23:03:07.367Z",
    },
    {
        id: "8f9e0b3a-51b1-4d29-a9cf-91b7c9f00844",
        created_at: "2026-02-04T23:03:07.367Z",
    },
    {
        id: "8f9e0b3a-51b1-4d29-a9cf-91b7c9961187",
        created_at: "2026-02-04T23:03:07.367Z",
    },
    {
        id: "8f9e0b3a-51b1-4d29-a9cf-91b7c9f34560",
        created_at: "2026-02-04T23:03:07.367Z",
    },
];

export async function POST() {
    return NextResponse.json({ status: 201 });
}

export async function GET() {
    return NextResponse.json({
        status: 201,
        body: mock,
    });
}
