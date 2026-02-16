import Profile from '../models/Profile.js';
export const getProfile=async(req,res)=>{
    try{
        let profile=await Profile.findOne();
        if(!profile){
            profile=await Profile.create({
                name:"Gopi",
                bio:"Associate Software Developer",
                profilePic:"",
                socialLinks:[],
                skills:[
                    {name:"JavaScript",endorsements:0},
                    {name:"React",endorsements:0},
                    {name:"Node.js",endorsements:0}
                ]
            });
        }
        res.json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

export const updateProfile=async(req,res)=>{
     try{
        const updatedProfile=await Profile.findOneAndUpdate(
            {},
            req.body,
            {new:true}
        );
        res.json(updatedProfile);
     }
     catch(error){
        res.status(500).json({message:error.message});
     }
};

export const endorseSkill=async(req,res)=>{
    try{
        const {skillId}=req.params;
        const profile=await Profile.findOne();
        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        const skill=profile.skills.id(skillId);

        if(!skill){
            return res.status(404).json({message:"skill not found"});
        }
        skill.endorsements+=1;
        await profile.save();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
export const addSkill=async(req,res)=>{
    try{
        const {name}=req.body;

        if(!name){
            return res.status(404).json({message:"Skill name is required"});
        }
        const profile=await Profile.findOne();

        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        profile.skills.push({name});
        await profile.save();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
export const deleteSkill=async(req,res)=>{
    try{
        const{skillId}=req.params;
        const profile=await Profile.findOne();
        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        const skill=profile.skills.id(skillId);
        if(!skill){
            return res.status(404).json({message:"skill not found"});
        }
        skill.deleteOne();
        await profile.save();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
export const addsocialLink=async(req,res)=>{
    try{
        const{platform,url}=req.body;
        if(!platform || !url){
            return res.status(400).json({message:"platform and url are required"});
        }
        const profile=await Profile.findOne();
        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        profile.socialLinks.push({platform,url});
        await profile.save();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};
export const deletesocialLink=async(req,res)=>{
    try{
        const {linkid}=req.params;
        const profile=await Profile.findOne();
        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        const link=profile.socialLinks.id(linkid);
        if(!link){
            return res.status(404).json({message:"link not found"});
        }
        link.deleteOne();
        await profile.save();
        res.status(200).json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
}
export const updateTheme=async(req,res)=>{
    try{
        const{theme}=req.body;
        const profile=await Profile.findOne();
        if(!profile){
            return res.status(404).json({message:"profile not found"});
        }
        profile.theme=theme;
        await profile.save();
        res.json(profile);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

