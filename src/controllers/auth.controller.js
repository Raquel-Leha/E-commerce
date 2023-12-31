import { User } from "../models";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config";
import { userSchema } from "../libs/schemaValidator";
import createError from "http-errors";
import { signAccessToken } from "../helpers/signAccessToken";

export const signIn = async (req, res, next) => {
  console.log(req.body)

    try {
        const result = await userSchema.validateAsync(req.body);
        

        const userFound = await User.findOne({ email: result.email });
      
        if (!userFound) return next(createError.Unauthorized('User not found'));
      
        const isMatch = await userFound.validPassword(result.password);
      
        if (!isMatch) return res.status(401).json({ message: "Invalid password" });

        const token = await signAccessToken(userFound.id);

        res.json({token})
  
    } catch (error) {
        if(error.isJoi) return next(createError.BadRequest(error.message))
        next(error);
        
    }

};

export const signUp = async (req, res, next) => {
  try {

    const result = userSchema.validateAsync(req.body);

    const userFound = await User.findOne({ email: result.email });
    
    if (userFound) {
      res.statusMessage = "User already exists";
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({
      email: result.email,
      password: result.password,
    });
    user.password = await user.generateHash(user.password);

    const newUser = await user.save();

    /*HASTA AQUI FUNCIONA*/
    

    jwt.sign({ id: newUser._id }, JWT_SECRET, (err, token) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.json({ token });
      }
    });
  } catch (error) {
    if (error.isJoi) return next(createError.NotFound());
    next(error);
  }
  return res.json("signup");
};

export const profile = async (req, res) => {
  const user = await User.findOne({ _id: req.user }).select("password");
  console.log(user)
  if (!user) return res.status(401).json({ message: "User not found" });
  res.json(user);
};
