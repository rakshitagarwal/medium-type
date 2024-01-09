import User from "../model/user.js";

export const signupUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = new User(user);
    await newUser.save();
    return response.status(200).json({ msg: "Signup successfull" });
  } catch (error) {
    return response.status(500).json({ msg: "Error while signing up user" });
  }
};
