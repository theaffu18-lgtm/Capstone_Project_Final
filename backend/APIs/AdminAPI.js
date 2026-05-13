import exp from 'express'
import { UserTypeModel } from '../models/userModel.js';
import { verifyToken } from '../middleware/verifyToken.js'
import { checkAdmin } from '../middleware/checkAdmin.js'

export const adminRoute = exp.Router()

import exp from "express";
import { register, authenticate } from "../services/authService.js";

export const adminRoute = exp.Router();


// Register Admin
adminRoute.post("/register", async (req, res, next) => {

  try {

    const adminObj = req.body;

    const newAdmin = await register({
      ...adminObj,
      role: "ADMIN"
    });

    res.status(201).json({
      message: "Admin created successfully",
      payload: newAdmin
    });

  } catch (err) {

    next(err);

  }
});


// Login Admin
adminRoute.post("/login", async (req, res, next) => {

  try {

    const adminCred = req.body;

    const result = await authenticate(adminCred);

    // check role
    if (result.payload.role !== "ADMIN") {

      return res.status(403).json({
        message: "Access denied. Not an admin"
      });

    }

    // set cookie
    res.cookie("token", result.token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
      path: "/"
    });

    res.status(200).json({
      message: "Admin login successful",
      payload: result.payload
    });

  } catch (err) {

    next(err);

  }
});

// Block User
adminRoute.put('/block/:userId', verifyToken, checkAdmin, async (req, res) => {
  try {
    const userID = req.params.userId

    const user = await UserTypeModel.findById(userID)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (!user.isActive) {
      return res.status(400).json({ message: "User already blocked" })
    }

    const updatedUser = await UserTypeModel.findByIdAndUpdate(
      userID,
      { $set: { isActive: false } },
      { new: true }
    )

    res.status(200).json({
      message: "User blocked successfully",
      payload: updatedUser
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})


// Unblock User
adminRoute.put('/unblock/:userId', verifyToken, checkAdmin, async (req, res) => {
  try {
    const userID = req.params.userId

    const user = await UserTypeModel.findById(userID)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (user.isActive) {
      return res.status(400).json({ message: "User already active" })
    }

    const updatedUser = await UserTypeModel.findByIdAndUpdate(
      userID,
      { $set: { isActive: true } },
      { new: true }
    )

    res.status(200).json({
      message: "User unblocked successfully",
      payload: updatedUser
    })

  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
