import * as React from "react";
import logoMono from "../../assets/img/logoMono.png";
import { navDropLincks } from "./data";

function NavBar() {
  return (
    <>
      <div
        class="w-100 d-flex justify-content-center align-items-center"
        style={{ position: "fixed", backgroundColor: "red", zIndex: 999 }}
      >
        <h5 style={{ color: "white" }}>COMING SOON. Сайт в разработке.</h5>
      </div>
      <nav class="mb-5">
        <div class="shadow-lg">
          <div class="container">
            <nav class="navbar navbar-expand-lg">
              <div class="container px-0 d-block">
                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-none nav-menu__logo-mobile">
                    <a href="/">
                      <img src={logoMono} width="150" height="150" alt="" />
                    </a>
                  </div>
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                </div>
                <div
                  class="collapse navbar-collapse flex-column align-items-start py-3"
                  id="navbarNavDropdown"
                >
                  <div class="d-flex justify-content-between align-items-center w-100">
                    <div class="d-flex align-items-center nav-menu__logo-desktop">
                      <a href="/">
                        <img src={logoMono} width="160" height="160" alt="" />
                      </a>
                    </div>

                    <div class="w-100">
                      <div class="d-flex flex-wrap justify-content-end">
                        <div class="d-flex align-items-center flex-wrap navbar-collapse__menu-item mb-3">
                          <a
                            href="/login"
                            class="btn btn-light rounded-5 accent-colors text-accent-colors"
                          >
                            Войти
                          </a>

                          <a
                            href="/shopping-cart"
                            class="btn btn-light position-relative m-3 rounded-5 accent-colors"
                          >
                            <i class="bi bi-cart"></i>
                            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              0
                              <span class="visually-hidden">
                                unread messages
                              </span>
                            </span>
                          </a>
                          <div>
                            <select
                              class="form-select"
                              id="floatingSelect"
                              aria-label="Floating label select example"
                            >
                              <option selected>Русский</option>
                              <option value="1">Английский</option>
                            </select>
                          </div>
                          <div class="w-70 d-flex justify-content-around align-items-center m-3 flex-wrap">
                            <h4>8 800 55 35 35</h4>
                          </div>
                        </div>
                      </div>
                      <ul class="navbar-nav d-flex flex-wrap justify-content-around">
                        {navDropLincks.map((item) => {
                          return (
                            <li key={item.id} class="nav-item dropdown">
                              <button
                                class="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                {item.name}
                              </button>

                              <ul class="dropdown-menu">
                                {item.links.map((item) => {
                                  return (
                                    <li key={item.id}>
                                      <a class="dropdown-item" href={item.url}>
                                        {item.text}
                                      </a>
                                    </li>
                                  );
                                })}
                              </ul>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
