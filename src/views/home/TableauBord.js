import React from "react";
import emit_logo from "../../assets/images/Logo_Emit.svg";
import { Radara } from "./dash-chart/Radar";
import { LineCharte } from "./dash-chart/LineChart";
import { Polara } from "./dash-chart/Polar";
import exportService from "../../services/export.service";
// import Navbar from './Navbar';

function TableauBord(props) {
  const exportation = () => {
    exportService.export().then((res) => {
      console.log(res.data);
      window.open(res.data);
    });
  };
  return (
    <>
      <div className={"workspace_fr"}>
        <div className={"space_main_fr"}>
          <div className={"head_main_fr"}>
            <div className={"box1_main_fr"}>
              <div className={"c1_box1_fr"}>
                Tableau de Bord<br></br>
                <div className={"date_fr"}>Récapitulatif</div>
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
              <div className={"c3_box1_fr"} onClick={exportation}>
                Exporter <i class="ph ph-cloud-arrow-down"></i>
              </div>
            </div>
            <div className={"circle-bar"}>
              <div className="chiffre-affaire">
                <h5>Chiffre d'affaire</h5>Ar4000000
              </div>
              <div className="nb-vente-mois">
                <h4>Vendues</h4>Ce mois460
              </div>
              <div className="nb-vente-mois">
                <h4>Favoris</h4>Vin Blanc
              </div>
            </div>
            <div className={"chart-dash"}>
              <div className={"radar"}>
                <Radara />
              </div>
              <div className={"radar"}>
                <Polara />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableauBord;
