import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";

import { connectDB } from "@/database";

export const GET = async () => {
  const client = await connectDB;
  const db = client.db("wedding-invitation");

  const result = await db.collection('guest_book').find().toArray();

  return NextResponse.json({ result });
}

export const POST = async (request) => {
  const client = await connectDB;
  const db = client.db("wedding-invitation");

  const { guestName, password, contents, createdAt } = await request.json();
  if (!guestName || !password || !contents || !createdAt) throw new Error('guestName, password, contents, createdAt is required');

  await db.collection('guest_book').insertOne({
    guestName,
    password,
    contents,
    createdAt,
  });

  return NextResponse.json({ result: true });
}

export const DELETE = async (request) => {
  const client = await connectDB;
  const db = client.db("wedding-invitation");

  const { _id } = await request.json();
  if (!_id) throw new Error('id is required');

  await db.collection('guest_book').deleteOne({
    "_id": new ObjectId(_id),
  });

  return NextResponse.json({ result: true });
}