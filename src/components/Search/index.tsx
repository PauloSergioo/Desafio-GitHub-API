import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

type FormData = {
  profileName: string;
};

export default function Search() {
  const [nameData, setNameData] = useState<string>();

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
    setNameData(formData.profileName);
  }

  useEffect(() => {
    axios.get(`https://api.github.com/users/${formData.profileName}`)
    .then(response => {
      setNameData(response.data)
      console.log(formData.profileName)
    })
  }, []);

  return (
    <main>
      <section>
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
            </form>
          </div>
          <Link  to={"info"}>
            <Button name="Encontrar" />
          </Link>
        </div>
      </section>
    </main>
  );
}
