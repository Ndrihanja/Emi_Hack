import React, { useEffect, useState } from "react";
import back_im from "../../../assets/images/vin/bvin1.jpg";
import front_im from "../../../assets/images/vin/vin1.png";
import environment from "../../../env";
import produitService from "../../../services/produit.service";

export default function CardProduct() {
  const [listP, setListP] = useState([]);

  useEffect(() => {
    produitService.getAll().then((res) => {
      setListP(res.data.data);
    });
  }, []);

  console.log("ListCard : ", listP);

  return (
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
}
