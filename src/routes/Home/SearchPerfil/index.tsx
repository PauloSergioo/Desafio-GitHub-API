import { Outlet } from "react-router-dom";
import Search from "../../../components/Search";

export default function SearchPerfil() {
  return (
    <>
      <main>
        <section>
          <Search />
          <Outlet />
        </section>
      </main>
    </>
  );
}
