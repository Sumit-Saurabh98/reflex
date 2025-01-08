import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const accessToken = req.cookies._reflex_accessToken;

    if (!accessToken) {
      res
        .status(401)
        .json({ message: "Unauthorized - No access token provided" });
      return;
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
      const user = await User.findById(decoded._id).select("-password");

      if (!user) {
        res.status(401).json({ message: "User not found" });
        return;
      }

      req.user = user;

      next();

  } catch (error) {
    console.log("Error in auth middleware :- ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

