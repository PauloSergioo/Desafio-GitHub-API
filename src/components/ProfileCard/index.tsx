import "./styles.css";
import perfilImg from "../../assets/perfil.jpg";

export default function ProfileCard() {
  return (
    <div className="card-info container">
      <div>
        <img src={perfilImg} alt="perfilImg" />
      </div>
      <div className="info-container">
        <div className="info-title">
          <h4>Informações</h4>
        </div>
        <div className="info-block">
          <p>Perfil:</p>
          <p>{}</p>
        </div>
        <div className="info-block">
          <p>Seguidores:</p>
          <p>{}</p>
        </div>
        <div className="info-block">
          <p>Localidade:</p>
          <p>{}</p>
        </div>
        <div className="info-block">
          <p>Nome:</p>
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}
