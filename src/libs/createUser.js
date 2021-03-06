import User from "../models/User";

export const createAdminUser = async () => {
  const userFound = await User.findOne({ email: "admin@local" });

  if (userFound) return;

  const newUser = new User({
    username: "admin",
    email: "admin@local",
  });

  newUser.password = await newUser.encryptPassword("admin");

  const admin = await newUser.save();

  console.log("Admin user created", admin);
};
