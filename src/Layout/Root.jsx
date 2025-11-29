import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

export default function Root() {
  return (
    <div>
      <Header />
      <Outlet />
      <h1>Footer</h1>
    </div>
  );
}
