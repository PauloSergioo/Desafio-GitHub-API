import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { profileDTO } from "../../models/data";
import Button from "../Button";
import ProfileCard from "../ProfileCard";
import "./styles.css";

type FormData = {
  profileName: string;
};

export default function Search() {
  const [profileData, setProfileData] = useState<profileDTO>();

  const [formData, setFormData] = useState<FormData>({
    profileName: "",
  });

  function handleProfileName(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  }

  function handleFormSubmit(event: any) {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${formData.profileName}`)
      .then((response) => {
        setProfileData(response.data);
        console.log(response.data);
      })
      .catch(() => {
        setProfileData(undefined);
      });
  }

  return (
    <main>
      <section id="search-section">
        <div className="search-card container">
          <div className="search-title">
            <h2>Encontre um perfil Github</h2>
          </div>
          <div className="search-form">
            <form onSubmit={handleFormSubmit}>
              <input
                name="profileName"
                value={formData.profileName}
                type="text"
                placeholder="Usuário Github"
                onChange={handleProfileName}
              />
              <Button name="Encontrar" />
            </form>
          </div>
        </div>
      </section>
      <section>
        {(profileData && <ProfileCard profile={profileData} />) ||
          (!profileData && (
            <div className="container">
              <div className="info-error">Erro ao buscar usuário</div>
            </div>
          ))}
      </section>
    </main>
  );
}
