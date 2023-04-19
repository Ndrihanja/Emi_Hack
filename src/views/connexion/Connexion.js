import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLoggedUser } from "../../reducers/user.reducer";
import { useFormik } from "formik";
import { authicate } from "../../services/auth.service";
/* assets import */
import blured_background from "../../assets/images/blur_blue_geometry.svg";
import emit_logo from "../../assets/images/Logo_Emit.svg";
import sun_icon from "../../assets/images/Sun_Icon.svg";
import moon_icon from "../../assets/images/Moon_Icon.svg";
import Illustration_Login from "../../assets/images/Illustration_Loign.svg";
import lockIcon from "../../assets/images/lock_icon.svg";
import userIcon from "../../assets/images/user_icon.svg";
import { Link, useNavigate } from "react-router-dom";

function Connexion(props) {
  /* states */
  const [isThemeDark, setIsThemeDark] = useState(false);
  const [userNameFind, userUserNameFind] = useState(true);
  const [userSeachLoad, setUserSearchLoad] = useState(false);
  const [showPass, setShowPass] = useState(false);

  /* hoocks */
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* formik send data */
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      authicate(values)
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .then((data) => {
          /* handle user auth */
          console.log(data);
          dispatch(setLoggedUser(data.data.user));
          localStorage.setItem("access_token", data.data.token);
          navigate("/home");
        })
        .catch((error) => {
          alert("mode passe incorect");
          console.error(error);
        });
    },
  });

  /* user search indicator */
  const UserSearchIndicator = () => {
    if (userSeachLoad) {
      return <i className="fas fa-circle-notch fa-spin"></i>;
    }
    if (userSeachLoad === false && userNameFind) {
      return (
        <i className="fa fa-circle-check" style={{ color: "#05b373ff" }}></i>
      );
    }
    if (userSeachLoad === false && userNameFind === false) {
      return (
        <i className="fa fa-times-circle" style={{ color: "#f34336" }}></i>
      );
    }
  };

  return (
    <div className={"connexion"}>
      {/* absolute background item */}
      <img
        src={blured_background}
        alt="blured-background"
        className={"blured-geometry"}
      />
      <img
        src={blured_background}
        alt="blured-background"
        className={"blured-geometry"}
      />
      <img
        src={blured_background}
        alt="blured-background"
        className={"blured-geometry"}
      />

      {/* main content */}
      <div className="connexion-heading">
        <img src={emit_logo} alt="logo-emit" className={"brand-icon"} />
        <div className="heading-control">
          <button
            className={"ge-btn btn-medium"}
            onClick={() => navigate("/inscription")}
          >
            Crée un compte
          </button>
          <button
            className={"btn-theme-switch"}
            onClick={() => setIsThemeDark(!isThemeDark)}
          >
            <img src={isThemeDark ? sun_icon : moon_icon} alt="button-icon" />
          </button>
        </div>
      </div>
      <div className="connexion-body">
        <img
          src={Illustration_Login}
          alt="illustration-heading"
          className={"illustration-login"}
        />
        <div className="login-form">
          <h1 className={"form-title ge-text-h2 ge-medium"}>
            Bienvenue sur <span className={"ge-bold"}>Ge-Note</span>
          </h1>
          <p className={"form-sub-title ge-text-p1"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
            accusamus architecto culpa laboriosam rem. Accusantium aliquid
            assumenda, aut et, excepturi illum in molestias optio quod sed totam
            velit voluptatibus voluptatum?
          </p>
          <form onSubmit={formik.handleSubmit} className={"login-send-form"}>
            <div className="input-section">
              <img src={userIcon} alt="user-icon" />
              <input
                type="text"
                name={"email"}
                placeholder={"Nom d'utilisateur"}
                onChange={formik.handleChange}
                value={formik.values.email}
                onFocus={() => setUserSearchLoad(true)}
                onBlur={() => setUserSearchLoad(false)}
              />
              <UserSearchIndicator />
            </div>
            <div className="input-section">
              <img src={lockIcon} alt="lock-icon" />
              <input
                type={showPass ? "text" : "password"}
                name={"password"}
                placeholder={"Mot de passe"}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <i
                className={
                  showPass
                    ? "fa fa-eye-slash tootle-button"
                    : "fa fa-eye tootle-button"
                }
                onClick={() => setShowPass(!showPass)}
              ></i>
            </div>
            <div className="submit-section">
              <Link to={"/inscription"} className={"ge-text-p1 ge-medium"}>
                Pas de compte?
              </Link>
              <button
                className="ge-btn btn-hight submit-button "
                type={"submit"}
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="connexion-footer">
        <div className="footer-about">
          <span>copyright &copy; 2023, EMITECH</span>
          <span>Ecole de Management et d'Innovation Technologique</span>
        </div>
        <Link href="#">A propos</Link>
      </div>
    </div>
  );
}

export default Connexion;
