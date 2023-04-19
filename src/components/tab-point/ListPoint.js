import React, { useEffect, useState } from "react";
import regionService from "../../services/region.service";

function ListPoint(props) {
  const [listPointVente, setListPointVente] = useState([]);

  useEffect(() => {
    regionService.getListBy(props.region?.id).then((res) => {
      if (res.data.data[0].point_de_vente) {
        setListPointVente(res.data.data[0].point_de_vente);
      }
    });
  }, [props.region?.id]);

  return (
    <>
      <div></div>
      <div>
        {listPointVente.map((item) => (
          <div className={"row-list"} key={item.id}>
            <div className={"list-detail"}>
              <div className={"img-prod"}></div>
              <div className={"det-prod"}>
                <h4>{item.nom}</h4>
                <p>{item.adresse}</p>
              </div>
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
    </>
  );
}

export default ListPoint;
