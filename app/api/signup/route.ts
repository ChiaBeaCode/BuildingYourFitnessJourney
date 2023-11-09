import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/utils/mongo/clientPromise";

export async function POST(request: Request) {
  const data = await request.json();

  const { email, username, password } = data;
  if (!email || !username || !password)
    return NextResponse.json({
      message: "Username, Password, and/or Email is missing",
      status: 400,
    });

  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (userExists) {
      return NextResponse.json({
        message: "User already exists",
        status: 400,
      });
    }

    const hashedpassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        name: username,
        password: hashedpassword,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      status: 400,
      body: JSON.stringify({ message: "User could not be created" }),
    });
  } finally {
    await prisma.$disconnect();
  }
}
