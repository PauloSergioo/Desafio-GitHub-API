import Button from "../Button";
import "./styles.css";

export default function Search() {
  return (
    <main>
      <section>
        <div className="search-card container">
          <div className="search-title">
            <h2>Encontre um perfil Github</h2>
          </div>
          <div className="search-form">
            <form>
              <input type="text" placeholder="Usuário Github" />
            </form>
          </div>
          <Button name="Encontrar" />
        </div>
      </section>
    </main>
  );
}
