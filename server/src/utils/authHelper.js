import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";

export const generateToken = (_id) => {
  const accessToken = jwt.sign({ _id }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  const refreshToken = jwt.sign({ _id }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

export const setCookies = (res, accessToken, refreshToken) => {
  res.cookie("_reflex_accessToken", accessToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 30 * 60 * 60 * 1000,
  });

  res.cookie("_reflex_refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
};
