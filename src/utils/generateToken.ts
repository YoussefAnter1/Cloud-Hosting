import jwt from "jsonwebtoken";
import { JWTPayload } from "./types";
import { cookies } from "next/headers";

// Genereate JWT Token
export function generateJWT(jwtPayload: JWTPayload): string {
  const privateKey = process.env.JWT_SECRET as string;
  const token = jwt.sign(jwtPayload, privateKey, {
    expiresIn: "30d",
  });
  return token;
}

// Set Cookie with JWT

export async function setCookie(jwtPayload: JWTPayload) {
  // const token =generateJWT(jwtPayload);

  const token = generateJWT(jwtPayload);

  // ---
  (await cookies()).set("jwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // development = http , production = https
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, //30
  });
  
}
