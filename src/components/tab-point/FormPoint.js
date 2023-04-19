import React, { useEffect, useState } from "react";
import pointventeService from "../../services/pointvente.service";

export default function FormPoint(props) {
  const [nom, setNom] = useState("");
  const [longitude, setLongitude] = useState("");
  const [adresse, setAdresse] = useState("");
  const [latitude, setLatitude] = useState("");
  const [image, setImage] = useState(null);
  const [region_id, setRegion_id] = useState(0);

  const onChangePhoto = (e) => {
    const fileList = [];
    for (let i = 0; i < e.target.files.length; i++) {
      fileList.push(e.target.files[i]);
    }
    setImage(fileList);
  };

  const create = () => {
    let data = {
      nom: nom,
      region_id: props.region?.id,
      longitude: longitude,
      latitude: latitude,
      adresse: adresse,
    };
    if (image) {
      data["image"] = image;
    }

    pointventeService
      .insertPoint(data)
      .then((res) => {
        console.log("liste ", res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("datas ", data);
  };

  return (
    <>
      <div className={"form-point"}>
        <form className={"form-start-point"} method="post">
          <div className={"form-start-group"}>
            <label htmlFor="nom">Nom du point de vente</label>
            <input
              type="text"
              name="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              placeholder="Saisir le nom du point du vente..."
            />
          </div>
          <div className={"form-start-group"}>
            <label htmlFor="nom">Région</label>
            <input
              type="text"
              name="id"
              value={props.region?.id}
              placeholder="Selectionné un région"
            />
          </div>
          <div className={"position"}>
            <div className={"form-start-group"}>
              <label htmlFor="longitute">Longitude</label>
              <input
                type="text"
                name="longitude"
                value={props.currentPosition?.lng}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="Saisir la longitude..."
              />
            </div>
            <div className={"form-start-group"}>
              <label htmlFor="latitude">Latitude</label>
              <input
                type="text"
                name="latitude"
                value={props.currentPosition?.lat}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="Saisir la latitude..."
              />
            </div>
            <div className={"form-start-group"}>
              <label htmlFor="adresse">Adresse</label>
              <input
                type="text"
                name="adresse"
                value={adresse}
                onChange={(e) => setAdresse(e.target.value)}
                placeholder="Saisir l'adresse..."
              />
            </div>
            <div className={"form-start-group"}>
              <label htmlFor="image">Photo point de vente</label>
              <input
                type="file"
                name="image"
                onChange={(e) => onChangePhoto(e)}
                placeholder="importer photo..."
              />
            </div>
          </div>
          <div className={"btn-div"}>
            <button className={"btn-point"} type="button" onClick={create}>
              Créer
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
