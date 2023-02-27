import React, { useContext, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Breadcrumb } from "../components/breadcrumb/Breadcrumb";
import "./layout.scss";
import { BreadcrumbContext } from "../context/BreadcrumbContext";

export const Layout = () => {
  const { setLocalCategories } = useContext(BreadcrumbContext);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();
  const filter = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search.length && search.trim() !== "") {
      setLocalCategories([]);
      navigate(`/items?q=${search}`);
      setSearch("");
    }
  };
  return (
    <>
      <header className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="d-flex align-items-center">
                <div className="contentLogo">
                  <img
                    className="logo"
                    src={require("./../assets/Logo_ML@2x.png.png.png")}
                    alt="logo mercado libre"
                  />
                </div>
                <div className="filter">
                  <form onSubmit={(e) => filter(e)}>
                    <input
                      placeholder="Nunca dejes de buscar"
                      className="filter__input"
                      name="search"
                      value={search}
                      onChange={(e: any) => setSearch(e.target.value)}
                    ></input>
                    <button className="filter__btn">
                      <img
                        src={require("./../assets/ic_Search.png")}
                        alt="lupa filtro"
                      />
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="container-fluid main">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-12 breadcrumb">
                  <Breadcrumb></Breadcrumb>
                </div>
                <div className="col-12 content">
                  <Outlet />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
