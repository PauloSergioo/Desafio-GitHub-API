import "./styles.css";
import { profileDTO } from "../../models/data";

type Props = {
  profile: profileDTO;
};

export default function ProfileCard({ profile }: Props) {
  return (
    <div className="card-info container">
      <div>
        <img src={profile.avatar_url} alt="perfilImg" />
      </div>
      <div className="info-container">
        <div className="info-title">
          <h4>Informações</h4>
        </div>
        <div className="info-block info-perfil">
          <h6>Perfil:</h6>
          <p>{profile.url}</p>
        </div>
        <div className="info-block">
          <h6>Seguidores:</h6>
          <p>{profile.followers}</p>
        </div>
        <div className="info-block">
          <h6>Localidade:</h6>
          <p>{profile.location}</p>
        </div>
        <div className="info-block">
          <h6>Nome:</h6>
          <p>{profile.name}</p>
        </div>
      </div>
    </div>
  );
}
