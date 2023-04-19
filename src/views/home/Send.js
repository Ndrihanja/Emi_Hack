import React, { useState } from "react";
import emit_logo from "../../assets/images/Logo_Emit.svg";
import changeToCard_Icon from "../../assets/images/new/changeToCard_Icon.svg";
import changeToList_Icon from "../../assets/images/new/changeToList_Icon.svg";
import Modal from "../modal/Modal";
import { NavLink, Routes, Route, useParams } from "react-router-dom";
import ListeProduct from "../product-tab/list-product/ListeProduct";
import CardProduct from "../product-tab/card-product/CardProduct";

// import Navbar from './Navbar';

function Send(props) {
  const [misokatra, setMisokatra] = useState(false);

  const sokafy = () => setMisokatra(!misokatra);

  // var card1 = (
  //   <>
  //     <div className={"card_white_fr"}>
  //       <div className={"tete_white_fr"}>
  //         <div className={"c1_tete_fr"}>
  //         </div>
  //         <div className={"c2_tete_fr"}>
  //           <div className={"jour_fr"}></div>
  //         </div>
  //       </div>
  //       <div className={"corps_white_fr"}>
  //         Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam
  //         nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum door sit
  //         amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
  //         tincidunt ut laoreet dolore
  //       </div>
  //       <div className={"qt_white_fr"}>Quantité: 200 feuilles de copie</div>
  //       <div className={"pied_white_fr"}>
  //         <div className={"pied_left_fr"}>
  //           <div className={"tag_pied_fr"}>M1</div>{" "}
  //           <div className={"tag_pied_fr"}>Informatique</div>
  //           <div className={"tag_pied_fr"}>Algèbre</div>{" "}
  //           <div className={"tag_pied_fr"}>Session:Normale</div>
  //         </div>
  //         <div className={"pied_right_fr"}>
  //           <div className={"right2_fr"}>etat validation</div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  // var card2 = (
  //   <>
  //     <div className={"card_white2_fr"}>
  //       <div className={"tete_white2_fr"}>
  //         <div className={"c1_tete2_fr"}>
  //           <div className={"note2_fr"}>Notes RPM L3</div>
  //           <div className={"comm2_fr"}>
  //             Lorem ipsum dolor sit amet, Lorem ipsum olor sit
  //           </div>
  //         </div>
  //         <div className={"c2_tete2_fr"}>
  //           <div className={"jour2_fr"}>12/01/202</div>
  //         </div>
  //       </div>
  //       <div className={"corps_white2_fr"}>
  //         Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam
  //         nonummy nibh euismod tincidunt ut laoreet dolore
  //       </div>

  //       <div className={"pied_white2_fr"}>
  //         <div className={"pied_left2_fr"}>Année Universiaire 2018-2019</div>
  //         <div className={"pied_right2_fr"}>
  //           <div className={"right22_fr"}>Rectifier</div>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <>
      <div className={"workspace_fr"}>
        {misokatra && <Modal sokafy={sokafy} />}
        <div className={"space_main_fr"}>
          <div className={"head_main_fr"}>
            <div className={"box1_main_fr"}>
              <div className={"c1_box1_fr"}>
                Produit<br></br>
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
          </div>

          <div className={"col1_main_fr"}>
            <div className={"head_col1_fr"}>
              Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum door
              sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore
            </div>
            <div className={"body_col1_fr"}>
              <div className={"body1_col1_fr"}>
                <div className={"c1_col1_fr"}>
                  <div className={"btn_green_fr"}>
                    <div className={"btn_ic_fr"} onClick={sokafy}>
                      Ajout Produit
                    </div>
                  </div>
                </div>
                <div className={"c2_col1_fr"}>
                  <div className={"reste_abs_fr"}>
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
                      <form
                        style={{
                          height: "100%",
                        }}
                      >
                        <input
                          type={"text"}
                          className="search_p"
                          style={{
                            width: "100%",
                            height: "100%",
                            border: "1px solid transparent",
                            outline: "none",
                            background: "rgba(200,200,200,0.2)",
                            padding: "0ch 2ch 0ch 9ch",
                            fontSize: "14px",
                            borderRadius: "10px",
                          }}
                          placeholder={"Recherche..."}
                        />
                      </form>
                    </div>
                    {/* <div className={"reste_search_fr"}><input placeholder='Recherche'/> <div className={"search_icon_fr"}>Q</div></div> */}
                    <NavLink to="list_produit" className={"reste_square_fr"}>
                      <img src={changeToCard_Icon} className={"sary_fr"} />
                    </NavLink>
                    <NavLink to="card_produit" className={"reste_square_fr"}>
                      <img src={changeToList_Icon} className={"sary_fr"} />
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className={"card_cont_col1_fr"}>
                <Routes>
                  <Route path="/list_produit" element={<ListeProduct />} />
                  <Route path="/card_produit" element={<CardProduct />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Send;
