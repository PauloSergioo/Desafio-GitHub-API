import { Link } from "react-router-dom";
import Button from "../Button";
import "./styles.css";

export default function HomeCard() {
  return (
    <main>
      <section>
        <div className="home-card ml40">
          <div className="home-title">
            <h1>Desafio Github API</h1>
            <h4>DevSuperior - Escola de programação</h4>
          </div>
          <div>
            <Link to={"/search"}>
            <Button name="Começar"/>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
