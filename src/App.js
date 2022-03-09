import { useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./header/header";
import AboutUs from "./pages/aboutus";
import Favorite from "./pages/favorite";
import Home from "./pages/home";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Notfound from "./pages/notfound";
import Register from "./pages/register";
import {LanguageContext} from "./context/languge"

function App() {
  const [language, setLang] = useState("ar");
  return (
    <LanguageContext.Provider value={{language,setLang}} >
       <div
      className={language === "en" ? "text-left" : "text-right"}
      dir={language === "en" ? "ltr" : "rtl"}
    >
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path={"/"} exact component={Home} />
          <Route path={"/movies/:id"} exact component={Movies} />
          <Route path={"/about-us"} exact component={AboutUs} />
          <Route path={"/favorite"} exact component={Favorite} />
          <Route path={"/login"} exact component={Login} />
          <Route path={"/register"} exact component={Register} />
          <Route path={"*"} exact component={Notfound} />
        </Switch>
      </BrowserRouter>
    </div>
    </LanguageContext.Provider>
   
  );
}

export default App;
