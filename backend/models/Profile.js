import mongoose from "mongoose";
const socialLinkSchema=new mongoose.Schema({
    platform:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    }
});
const skillSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    endorsements:{
        type:Number,
        default:0
    }
});
const profileSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    bio:{
        type:String
    },
    profilePicture:{
        type:String
    },
    socialLinks:[socialLinkSchema],
    skills:[skillSchema],
    theme:{
        type:String,
        default:"light"
    }
},
{timestamps:true}
);
const Profile=mongoose.model("Profile",profileSchema);
export default Profile;