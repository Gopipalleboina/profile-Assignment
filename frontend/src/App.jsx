import { useEffect, useState } from "react";
import Api from "./services/api.js";
import { updateTheme } from "./services/api.js";
import defaultImage from './assets/Gopi.jpeg';
function App() {
  const [profile, setprofile] = useState(null);
  useEffect(() => {
    fetchprofile();
  }, []);
  const fetchprofile = async () => {
    try {
      const res = await Api.get("/profile");
      setprofile(res.data);
    }
    catch (error) {
      console.error(error.message);
    }
  };
  const handleEndorse = async (skillId) => {
    await Api.put(`/profile/endorse/${skillId}`);
    fetchprofile();
  }
  const toggleTheme = async () => {
    const newTheme = profile.theme === "light" ? "dark" : "light";
    try {
      const response = await updateTheme(newTheme);
      setprofile(response.data);
    }
    catch (error) {
      console.error("error updating theme:", error);
    }
  }
  if (!profile) return <h2>Loading...</h2>
  return (
    <div className={`container ${profile.theme}`}>
      <div className="card">
        <button onClick={toggleTheme} className="theme-btn">
          {profile.theme === "light" ? "🌙 Dark" : "☀ Light"}
        </button>
        <img
          src={profile.profilePicture || defaultImage}
          alt="profile"
          className="profile-img"
        />

        <h1>{profile.name}</h1>
        <p>{profile.bio}</p>
        <h3>Skills</h3>
        <div className="skills">
          {profile.skills.map((skill) => (
            <div key={skill._id} className="skill">
              <span>
                {skill.name} ({skill.endorsements})
              </span>
              <button onClick={() => handleEndorse(skill._id)}>
                Endorse
              </button>
            </div>
          ))}
        </div>
        <h3>Social Links</h3>
        <div className="social">
          {profile.socialLinks.map((link) => (
            <a
              key={link._id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default App;