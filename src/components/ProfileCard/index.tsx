import "./styles.css";
import perfilImg from "../../assets/perfil.jpg";

export default function ProfileCard() {


    return(
        <div>
            <div>
                <img src={perfilImg} alt="perfilImg" />
            </div>
            <div>
                <h4>Informações</h4>
            </div>
            <div>
                <p>Perfil:</p>
                <p>{}</p>
            </div>
            <div>
                <p>Seguidores:</p>
                <p>{}</p>
            </div>
            <div>
                <p>Localidade:</p>
                <p>{}</p>
            </div>
            <div>
                <p>Nome:</p>
                <p>{}</p>
            </div>
        </div>

    );
}