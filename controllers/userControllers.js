import User from "../models/User";

export const registerUser = async (req, res) => {
    try{
        const { name, email, password } = req.body;
        // this will check  if the user exists or not 
        let user = await UserActivation.findOne({email});

        if(user){
            return res.status(400).json({message: "User have already registered"})  
        }
        // making a new user 
        user = await User.create({
            name,
            email,
            password,
        });

        return res.status(201).json({
            _id: user._id,
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            verified: user.verified,
            admin: user.admin,
            tokon: null,
        })
    } catch (error) {
        return res.status(500).json({ message: "something wemt wrong!" })
    }
};

export { registerUser };