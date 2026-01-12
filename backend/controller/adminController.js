import adminModel from "../models/adminSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    const exist = await adminModel.findOne({ email: email });
    if (exist) {
      return res.status(500).json({
        message: "email already exist",
      });
    }

    const createdUser = await adminModel.create({
      name,
      email,
      password: hash,
    });

    return res.status(201).json({
      message: "user created",
      success: true,
      result: createdUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "user createtion failed",
      success: false,
      result: error.message,
    });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body || {};

   
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

   
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }


    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      { id: admin._id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

 
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    
    return res.status(200).json({
      success: true,
      message: "Login successful",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
      token,
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Login failed",
      error: error.message,
    });
  }
};


export const logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({
    message: "Log out successfully",
    success: true,
  });
};
