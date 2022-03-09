import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import "./header.css"
import {useContext} from "react"
import { LanguageContext } from "../context/languge";
import { changeLanguageAction } from "../store/action/language";

export default function Header() {
  const isActive = {
    backgroundColor: "rgb(3, 155, 3)",
    borderRadius: "5px",
  };

  // const [moviesList, setMoviesList] = useState([]);
  // useEffect(() => {
  //   axiosInstance
  //     .get("/3/movie/popular")
  //     .then((res) => {
  //       console.log(res.data);
  //       setMoviesList(res.data.results);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // const language = useSelector(state => state.language.lang);
  // const disPatch = useDispatch();
  const {language,setLang} = useContext(LanguageContext)
  const a = changeLanguageAction("ar")
const changeLanguage = () => {
  console.log(a);
  console.log(language );
  setLang(language=== "en"?"ar":"en")
  // language = "ar"
  // language = a.payload
  // disPatch(changeLanguageAction(language==="en"?"ar":"en"))
};
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-danger" to={"/"}>
          Netfliex
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeStyle={isActive}
                className="nav-link "
                aria-current="page"
                to={`/movies/414906`}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={isActive}
                className="nav-link"
                to={"/favorite"}
              >
                Favorite
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={isActive}
                className="nav-link"
                to={"/about-us"}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeStyle={isActive}
                className="nav-link"
                to={"/login"}
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                activeStyle={isActive}
                className="nav-link"
                to={"/register"}
              >
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark" onClick={()=>changeLanguage()}>
              current lang : {language == "ar"? "اب":"en"}
              </button>
            </li>
            <li className="nav-item ">
            <FontAwesomeIcon className="m-2 fs-4 star" icon="fa-solid fa-star" />
            </li>
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
