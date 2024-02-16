import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import User from "../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateToken.js";
import { CookieOptions } from "../constants.js";
import { validateToken } from "../utils/validateToken.js";

const registerController = asyncHandler(async (req, res, next) => {
  const { username, password } = req.body;

  //   validations
  if (!username?.trim() || !password.trim())
    throw new ApiError(400, "All fields required");

  if (password.length < 6)
    throw new ApiError(400, "Password should be 6 character long");

  // if (!req?.file) throw new ApiError(400, "Avatar is required");

  const isUserExists = await User.findOne({ username });

  if (isUserExists)
    return next(new ApiError(400, "Username or email already exists"));

  let user = await User.create({
    username,
    password,
  });

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  let newUser = await User.findByIdAndUpdate(
    user._id,
    {
      $set: { refreshToken },
    },
    { new: true }
  ).select("-password");

  return res
    .status(201)
    .cookie("accessToken", accessToken, CookieOptions)
    .cookie("refreshToken", refreshToken, CookieOptions)
    .json(
      new ApiResponse(
        201,
        { newUser, refreshToken, accessToken },
        "User create successfully"
      )
    );
});

const loginController = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  if (!username) throw new ApiError(400, "Username required");

  if (!password?.trim()) throw new ApiError(400, "Fields should not be empty");

  const fetchedUser = await User.findOne({ username });
  if (!fetchedUser) throw new ApiError(400, "Wrong username or password");

  const isPasswordCorrect = await fetchedUser.isPasswordCorrect(password);
  if (!isPasswordCorrect) throw new ApiError(400, "Password is wrong");

  const accessToken = generateAccessToken(fetchedUser);
  const refreshToken = fetchedUser.refreshToken;

  return res
    .status(200)
    .cookie("accessToken", accessToken, CookieOptions)
    .cookie("refreshToken", refreshToken, CookieOptions)
    .json(
      new ApiResponse(
        200,
        { fetchedUser, refreshToken, accessToken },
        "User logged in successfully"
      )
    );
});

const getAllUserController = asyncHandler(async (req, res) => {
  if (!req?.user)
    return next(
      new ApiError(400, "User not found maybe error in verifing jwt")
    );

  const allUsers = await User.find().select("_id username");
  // console.log("user :-", req.user);
  // console.log("all users :- ", allUsers);

  if (allUsers.length === 0)
    return next(new ApiError(400, "No users found in db"));

  const filteredUsers = allUsers.filter(
    (user) => user.username !== req?.user.username
  );
  // console.log(filteredUsers);

  return res
    .status(202)
    .json(
      new ApiResponse(202, filteredUsers, "All users fetched successfully")
    );
});

const updateProfileImage = asyncHandler(async (req, res, next) => {
  console.log(req.file);

  if (!req?.file) return next(new ApiError(400, "Images not available"));

  return res
    .status(202)
    .json(new ApiResponse(202, {}, "Profile image updated successfully"));
});

const getUser = asyncHandler(async (req, res) => {
  if (!req.user) {
    return next(new ApiError(400, "Authentication failed"));
  }

  return res
    .status(201)
    .json(new ApiResponse(201, req.user, "User fetched successfully"));
});

const logout = asyncHandler(async (req, res) => {
  if (!req.user)
    return next(
      new ApiError(400, "Unable to logout reason :- authentication failed")
    );

  const logoutUser = await User.findByIdAndUpdate(req.user._id, {
    $set: {
      refreshToken: null,
    },
  });

  if (!logoutUser)
    return next(new ApiError(400, "invalid cookies or expired cookies"));

  return res
    .status(200)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json(new ApiResponse(200, logoutUser, "Logout Successfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  // console.log("refrsh token :- ", refreshToken);

  if (!refreshToken) return next(new ApiError(400, "Refresh token required"));

  const userDetails = validateToken(
    refreshToken,
    process.env.REFRESH_TOKEN_KEY
  );

  if (!userDetails)
    return next(
      new ApiError(
        400,
        "Invalid or expired refresh token login again to get new one"
      )
    );

  const newAccessToken = generateAccessToken(userDetails);
  // console.log("new access token :- ", newAccessToken);

  return res
    .status(200)
    .cookie("accessToken", newAccessToken, CookieOptions)
    .json(new ApiResponse(200, {}, "Access token refresh successfully"));
});

export {
  registerController,
  loginController,
  getUser,
  logout,
  refreshAccessToken,
  getAllUserController,
  updateProfileImage,
};
