
import dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
import { generateToken, setCookies } from "../utils/authHelper.js";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";


export const signup = async (req, res) => {
  const { fullname, email, password, country } = req.body;
  try {
    if (!fullname || !email || !password, !country) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({ fullname, country, email, password:hashedPassword });

    // authenticate
    const { accessToken, refreshToken } = generateToken(newUser._id.toString());

    // store refresh token in DB
    newUser.refreshToken = refreshToken;
    await newUser.save();

    setCookies(res, accessToken, refreshToken);

    const createdUser = await User.findById(newUser._id).select("-password");

    res.status(201).json({
      user: createdUser,
      message: "Account created successfully",
    });
  } catch (error) {
    console.log("Error in signup:", error);
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const { accessToken, refreshToken } = generateToken(user._id.toString());

    user.refreshToken = refreshToken;
    await user.save();

    setCookies(res, accessToken, refreshToken);

    const loggedInUser = await User.findById(user._id).select("-password");

    res.status(200).json({
      user: loggedInUser,
      message: "Logged in successfully",
    });
  } catch (error) {
    console.log("Error in login:", error);
    res.status(500).json({ message: "Internal server error: " + error });
  }
};

export const logout = async (req, res) => {
    try {
        const refreshToken = req.cookies._reflex_refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "Unauthorized user" });
        }

        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

        res.clearCookie("_reflex_accessToken");
        res.clearCookie("_reflex_refreshToken");
        res.status(200).json({ message: "Logged out successful" });
    } catch (error) {
        console.log("Error in logout:", error);
        res.status(500).json({ message: "Internal server error: " + error });
    }
};

export const refreshAccessToken = async (req, res) => {
    try {
        const refreshToken = req.cookies._reflex_refreshToken;
        if (!refreshToken) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
        const decode = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);
        
        const user = await User.findOne({ _id: decode._id });

        if (!user) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
        
        if(user.refreshToken !== refreshToken) {
            return res.status(401).json({ message: "Unauthorized user" });
        }

        const { accessToken } = generateToken(decode._id.toString());
        setCookies(res, accessToken, refreshToken);
        res.status(200).json({ message: "Token refreshed successfully", accessToken });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error: " + error });
    }
};

export const getProfile = async (req, res) => {
    try {
        const user = req.user;
        res.status(200).json({ user });
    } catch (error) {
        console.log("Error in getting profile:", error);
        res.status(500).json({ message: "Internal server error: " + error });
    }
};