import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    avatar: {type: String, default:""},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    verified: {type: String, required: true},
    verification: {type: Boolean, default: false},
    verificationcode: {type: String, required: false},
    admin:{ type: Boolean, default: false},
},
{ timestamps: true }    
);

const User = model("User", UserSchema);
export default User;

