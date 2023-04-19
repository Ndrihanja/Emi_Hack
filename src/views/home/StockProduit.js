import React from "react";
import emit_logo from "../../assets/images/Logo_Emit.svg";
// import Navbar from './Navbar';

function StockProduit(props) {
  var card1 = (
    <>
      <div className={"card3_white_fr"} style={{ height: "100%" }}>
        <div className={"card3_left_fr"}>
          <div className={"card3_comp1_fr card3_green_fr"}>Stock Actuel</div>
          <div className={"card3_comp2_fr card3_green_fr"} style={{ fontSize: "25px" }}>40</div>
        </div>
      </div>
    </>
  );
  var card3 = (
    <>
      <div className={"card3_white_fr"} style={{ height: "100%" }}>
        <div
          className={"card3_left_fr"}
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        >
          <div
            className={"card3_comp1_fr card3_green_fr"}
            style={{ fontSize: "28px" }}
          >
            Benéfice
          </div>
          <div
            className={"card3_comp2_fr card3_green_fr"}
            style={{ fontSize: "15px" }}
          >
            4000000 Ar
          </div>
        </div>
      </div>
    </>
  );
  var card2 = (
    <>
      <div className={"card_white2_fr"}>
        <div className={"tete_white2_fr"}>
          <div className={"c1_tete2_fr"}>
            <div className={"note2_fr"}>Achat vin rouge</div>
            <div className={"comm2_fr"}>
              Lorem ipsum dolor sit amet, Lorem ipsum olor sit
            </div>
          </div>
          <div className={"c2_tete2_fr"}>
            <div className={"jour2_fr"}>12/01/202</div>
          </div>
        </div>
        <div className={"corps_white2_fr"}>
          Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore
        </div>

        <div className={"pied_white2_fr"}>
          <div className={"pied_left2_fr"}>4 Bouteilles</div>
          <div className={"pied_right2_fr"}>
            <div className={"right22_fr"}>Rectifier</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className={"workspace_fr"} style={{ flex: "2" }}>
        <div className={"space_main_fr"}>
          <div className={"head_main_fr"}>
            <div className={"box1_main_fr"}>
              <div className={"c1_box1_fr"}>
                Stock Produits<br></br>
                <div className={"date_fr"}>Vérificationn des Stocks</div>
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

          <div className={"col1_main3_fr"}>
            <div className={"body_col1_fr"}>
              <div
                className={"card3_cont_col1_fr"}
                style={{
                  display: "grid !important",
                  gridTemplateColumn: "1fr 1fr",
                  paddingBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100px",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {card1}
                  {card1}
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    height: "100px",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  {card3}
                  {card3}
                </div>
              </div>
            </div>
          </div>

          <div className={"col2_main3_fr"}>
            <div className={"col22_main_fr"}>
              <div className={"title_21_fr"}>Dernier Activités</div>
              <div className={"card2_cont_fr"}>
                {card2}
                {card2}
                {card2}
                {card2}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StockProduit;
