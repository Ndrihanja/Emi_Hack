import React, { useEffect, useState } from "react";
import default_avatar from "../../assets/images/new/Default_Avatar.svg";
// import Navbar from './Navbar';
import back_im from "../../assets/images/vin/bvin1.jpg";
import front_im from "../../assets/images/vin/vin1.png";
import environment from "../../env";
import produitService from "../../services/produit.service";

function Accueil(props) {
  const [listP, setListP] = useState([]);

  useEffect(() => {
    produitService.getAll().then((res) => {
      setListP(res.data.data);
    });
  }, []);

  console.log("ListCard : ", listP);

  const card = (
    <div
      className={"col22_main_fr prod-card"}
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: ".5rem",
      }}
    >
      {listP.map((item) => (
        <div className={"card2_main_fr"}>
          <div className={"card2_body_fr"}>
            <img src={back_im} className={"card2_im_fr"}></img>
            <div className={"card2_info_fr"}>
              <div className={"card2_infofo_fr"}>
                <div className={"card2_prix_fr"}>{item.prix} Ar</div>
                <div className={"card2_cat_fr"}>
                  <b>Petit description</b>
                  <br></br>
                  {item.description}
                </div>
                <div className={"card2_qt_fr"}>Stock: {item.quantite}</div>
              </div>

              <div className={"card2_contim_fr"}>
                <img
                  src={environment.apiURL + item.galerie[0].image}
                  className={"card2_im2_fr"}
                ></img>
              </div>
            </div>
          </div>
          <div className={"card2_foot_fr"}>{item.nom}</div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <div className={"workspace_fr"}>
        <div className={"space_main_fr"}>
          <div className={"head_main_fr"}>
            <div className={"box1_main_fr"}>
              <div className={"c1_box1_fr"}>
                Accueil<br></br>
              </div>
              <div className={"c2_box1_fr"}>
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                  }}
                >
                  <div
                    className="icon"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      fontSize: "25px",
                      padding: "0 2ch",
                    }}
                  >
                    <i className={"ph-light ph-magnifying-glass"}></i>
                  </div>
                  <form>
                    <input
                      type={"text"}
                      className="search_p"
                      style={{
                        width: "100%",
                        border: "1px solid transparent",
                        outline: "none",
                        background: "rgba(200,200,200,0.2)",
                        padding: "2ch",
                        paddingLeft: "9ch",
                        fontSize: "14px",
                        borderRadius: "10px",
                      }}
                      placeholder={"Recherche..."}
                    />
                  </form>
                </div>
              </div>
              <div className={"c3_box1_fr"}>
                Exporter <i class="ph ph-cloud-arrow-down"></i>
              </div>
            </div>
            <div className={"box2_main_fr"}>
              <div className={"c1_box2_fr"}>
                <div className={"bigi_box2_fr"}>Bienvenue</div>
                "Producteur de vins fins depuis 1990 pour donner une idee de ce
                que vous faite..." : VIN'TSIKA
              </div>
              {/* <div className={"c2_box2_fr"}>
                                <div className={"c22_box2_fr"}>
                                    sary
                                </div>
                            </div> */}
            </div>
          </div>

          <div className="slide_box_fr">{card}</div>

          {/* <div className={"tab_main_fr"}>
            <div className={"tab_title_fr"}>Elements à revoir/reexpdier</div>
            <div className={"tab_element_fr"}>
              <table>
                <tr className={"row_fr"}>
                  <th className={"column_t_fr "}>Element</th>
                  <th className={"column_t_fr "}>Motif de rejet</th>
                  <th className={"column_t_fr "}>Exigences</th>
                  <th className={"column_t_fr "}>Status</th>
                </tr>
                <tr className={"row_fr"}>
                  <td className={"column_fr "}>21</td>
                  <td className={"column_fr "}>22</td>
                  <td className={"column_fr "}>23</td>
                  <td className={"column_fr "}>24</td>
                </tr>
                <tr className={"row_fr"}>
                  <td className={"column_fr "}>21</td>
                  <td className={"column_fr "}>22</td>
                  <td className={"column_fr "}>23</td>
                  <td className={"column_fr "}>24</td>
                </tr>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Accueil;
