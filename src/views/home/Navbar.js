import {
  faDashboard,
  faHomeAlt,
  faDollar,
  faBottleDroplet,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import emit_logo from "../../assets/images/Logo_Emit.svg";
import default_avatar from "../../assets/images/new/Default_Avatar.svg";
// import home_icon from "../../assets/images/new/Home_Icon.svg";
// import dashboard_icon from "../../assets/images/new/Dashboard_Icon.svg";
// import sendobject_icon from "../../assets/images/new/SendObject_Icon.svg";
// import archives_icon from "../../assets/images/new/Archives_Icon.svg";
// import settings_icon from "../../assets/images/new/Settings_Icon.svg";
// import account_icon from "../../assets/images/new/Account_Icon.svg";
// import logOut_icon from "../../assets/images/new/LogOut_Icon.svg";

function Navbar(props) {
  const changemenu = (e, id) => {
    var nav = document.getElementsByName("bt_nav");
    // console.log(nav.length);
    for (var i = 0; i < nav.length; i++) {
      nav[i].className = "bt_nav_fr";
    }
    document.getElementById(id).className = "bt_nav_fr active_fr";
  };

  return (
    <>
      <div className={"nav_fr"}>
        <div className={"nav_item_fr"}>
          <div className={"nh_fr"}>
            <div className={"emit_fr"}>
              <img src={emit_logo} className={"logo_emit_fr"} />
            </div>
            <div className={"user_fr"}>
              <div className={"card_user_fr"}>
                <div className={"profil1_user_fr"}>
                  <img src={default_avatar} className={"sary_fr"} />
                </div>
                <div className={"profil2_user_fr"}>
                  <div className={"nom_user_fr"}>Utilisater02</div>
                  <div className={"prenom_user_fr"}>@utilisatuer02</div>
                  <div className={"role_user_fr"}>Admin</div>
                  <div className={"bt_modifier_fr"}>Modifier</div>
                </div>
              </div>
            </div>
            <div className={"menu_fr"}>
              <div className={"item_title_fr"}>Menu</div>
              <div className={"bt_nav_cont_fr"}>
                <Link to="accueil" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr active_fr"}
                    id="menu1"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu1")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <FontAwesomeIcon icon={faHomeAlt} />
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Accueil</div>
                  </div>
                </Link>
                <Link to="tableau-de-bord" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu2"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu2")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <FontAwesomeIcon icon={faDashboard}></FontAwesomeIcon>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Tableau de bord</div>
                  </div>
                </Link>
                <Link to="achat" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu3"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu3")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <FontAwesomeIcon icon={faDollar}></FontAwesomeIcon>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Achat</div>
                  </div>
                </Link>
                <Link
                  to="elements-env/list_produit"
                  style={{ color: "inherit" }}
                >
                  <div
                    className={"bt_nav_fr"}
                    id="menu4"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu4")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <FontAwesomeIcon
                          icon={faBottleDroplet}
                        ></FontAwesomeIcon>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Produit</div>
                  </div>
                </Link>
                <Link
                  to="point-vente/form_point_tab"
                  style={{ color: "inherit" }}
                >
                  <div
                    className={"bt_nav_fr"}
                    id="menu5"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu5")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <FontAwesomeIcon icon={faMapLocation}></FontAwesomeIcon>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Point de Vente</div>
                  </div>
                </Link>
                <Link to="stock-produit" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu6"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu6")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <i class="ph-fill ph-package"></i>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Stock Produit</div>
                  </div>
                </Link>
                <Link to="archives" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu7"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu7")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <i class="ph-fill ph-archive"></i>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Archives</div>
                  </div>
                </Link>
              </div>
            </div>
            <div className={"parametres_fr"}>
              <div className={"item_title_fr"}>Paramètres</div>
              <div className={"bt_nav_cont_fr"}>
                <Link to="parametres" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu8"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu8")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <i class="ph-fill ph-gear"></i>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Paramètres</div>
                  </div>
                </Link>
                <Link to="compte" style={{ color: "inherit" }}>
                  <div
                    className={"bt_nav_fr"}
                    id="menu9"
                    name="bt_nav"
                    onClick={(e) => changemenu(e, "menu9")}
                  >
                    <div className={"bt_icon_fr"}>
                      <div className={"bt_sary_fr"}>
                        <i class="ph-fill ph-user-circle-gear"></i>
                      </div>
                    </div>
                    <div className={"bt_title_fr"}>Mon compte</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className={"nf_fr"}>
            <div className={"nav_foot_fr"}>
              <div className={"bt_deconnexion_fr"}>
                <div className={"bt_dec_text"}>Déconnexion</div>
                <div className={"bt_dec_icon"}>
                  <div className={"bt_sary_fr"}>
                    <i class="ph-fill ph-sign-out"></i>
                  </div>
                </div>
              </div>
              <div className={"copyright"}>copyright(c)2023, EMITECH. EMIT</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
