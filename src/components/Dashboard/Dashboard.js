import Table from "./Table/Table";
import Filter from "./Filter/Filter";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Dashboard() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("login")) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Filter />
      <Table />
    </div>
  );
}
