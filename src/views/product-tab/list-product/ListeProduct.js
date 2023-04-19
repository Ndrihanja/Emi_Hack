import React, { useEffect, useState } from "react";
import produitService from "../../../services/produit.service";
import "./ListProduct.scss";
export default function ListeProduct() {
  const [listP, setListP] = useState([]);

  useEffect(() => {
    produitService.getAll().then((res) => {
      setListP(res.data.data);
    });
  }, []);
  return (
    <div>
      {listP.map((item) => (
        <div className={"row-list"} key={item.id}>
          <div className={"list-detail"}>
            <div className={"img-prod"}></div>
            <div className={"det-prod"}>
              <h4>{item.libelle}</h4>
              <p>{item.description}</p>
            </div>
          </div>
          <div className={"categorie"}>
            <p>{item.categorie}</p>
          </div>
          <div className={"prix"}>
            <p>{item.prix} Ar</p>
          </div>
          <div className={"quantite"}>
            <p>{item.quantite}</p>
          </div>
          <div className={"list-action"}>
            <button className={"list-modif btn-li"}>
              <i class="ph-fill ph-pencil-simple"></i>
            </button>
            <button className={"list-suppr btn-li"}>
              <i class="ph-fill ph-trash"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
