/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload } from "jsonwebtoken";
import { jwtDecode } from "jwt-decode";

export const jwtVerify = (token: string) => {
  console.log(process.env.JWT_ACCESS_SECRET);
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET as string
    ) as JwtPayload;

    console.log(decoded, "decoded");

    return decoded;
  } catch (error: any) {
    console.log(error);
    return null;
  }
};

export const decode = (token: string) => {
  const decoded = jwtDecode(token) as JwtPayload;

  return decoded;
};
