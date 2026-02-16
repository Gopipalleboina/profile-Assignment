import axios from 'axios';

const Api=axios.create({
    baseURL: "https://profile-assignment-backend-65wj.onrender.com/api"
});

export const updateTheme=(theme)=>{
    return Api.put("/profile/theme",{theme});
}
export default Api;