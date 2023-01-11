import { Outlet } from "react-router-dom";
import Search from "../../../components/Search";

export default function Products() {
  return (
    <>
      <Search />
      <Outlet/>
    </>
  );
}