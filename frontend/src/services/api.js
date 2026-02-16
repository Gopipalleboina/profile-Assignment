import axios from 'axios';

const Api=axios.create({
    baseURL: "http://localhost:5000/api"
});

export const updateTheme=(theme)=>{
    return Api.put("/profile/theme",{theme});
}
export default Api;