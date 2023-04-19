import React, { useEffect, useState } from "react";
import MadaMap from "../../components/mada/MadaMap";
import { NavLink, Routes, Route } from "react-router-dom";
import FormPoint from "../../components/tab-point/FormPoint";
import ListPoint from "../../components/tab-point/ListPoint";
import pointventeService from "../../services/pointvente.service";
import regionService from "../../services/region.service";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

{
  /* Steeve debut */
}
var is_at = 0;
{
  /* Steeve Fin */
}

function PointVente() {
  {
    /* Steeve debut */
  }
  var data_ex = 0;

  const [nombre_etape, setNombre] = useState(2);
  const [index_at, setIndex] = useState(0);

  const afficheo = (e, index) => {
    var tabcontent = document.getElementsByClassName("etapy");
    var tabcontent1 = document.getElementsByClassName("etapy1");

    for (var i = 0; i < nombre_etape; i++) {
      tabcontent[i].style.display = "none";
    }

    for (var i = 0; i < nombre_etape; i++) {
      tabcontent1[i].className = "etapy1";
    }

    tabcontent[index].style.display = "block";
    tabcontent1[index].className = "etapy1 form_active";
    // tabcontent[index].className = "form_active";
    is_at = index;
    setIndex(index);
  };

  const next = (e) => {
    var new_at = is_at + 1;
    if (is_at < nombre_etape - 1) {
      setIndex(new_at);
      is_at = new_at;
      afficheo(e, new_at);
    }

    // alert("next");
  };

  const prev = (e) => {
    var new_at = is_at - 1;
    if (is_at > 0) {
      setIndex(new_at);
      is_at = new_at;
      afficheo(e, new_at);
    }
  };

  const [positions, setPositions] = useState([]);
  const [currentPosition, setCurrentPosition] = useState({
    lat: -14.363056,
    lng: 49.852778,
  });
  const [position, setPosition] = useState([-14.363056, 49.852778]);
  const [center, setCenter] = useState([-14.363056, 49.852778]);

  const handleChangeCenter = (newCenter) => {
    setCenter([currentPosition.lat, currentPosition.lng]);
  };

  const handleButtonClick = () => {
    handleChangeCenter([currentPosition.lat, currentPosition.lng]);
  };

  const handleClick = (e) => {
    const { lat, lng } = e.latlng;
    setPositions([{ lat, lng }]);
    setCurrentPosition({ lat, lng });
  };

  {
    /* Steeve Fin */
  }

  const [region, setRegion] = useState(null);
  const [data, setData] = useState(null); //point de vente
  
  useEffect(() => {
    regionService.getAll().then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  function handleChildClick(value) {
    console.log("valeur reçue du composant enfant:", value.id);
    setRegion(value);
  }
  return (
    <>
      <div className={"workspace_fr"}>
        <div className={"space_main_fr"}>
          <div className={"parent-point"}>
            <div className={"map-point"}>
              <div className={"map-map"}>
                {/* Steeve debut */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    position: " relative",
                  }}
                >
                  <div
                    className={"form_etape"}
                    style={{
                      width: "100%",
                      height: "90vh",
                      marginTop: "-35px",
                    }}
                  >
                    <div className={"form_etape_head"}>
                      <div className={"form_bt_center"}>
                        <button
                          className={"etapy1 form_active"}
                          onClick={(e) => afficheo(e, 0)}
                        >
                          0
                        </button>
                        <button
                          className={"etapy1"}
                          onClick={(e) => afficheo(e, 1)}
                        >
                          1
                        </button>
                      </div>
                    </div>
                    <div className={"form_etape_body"}>
                      <div
                        id="etape0"
                        className="etapy"
                        style={{ display: "block", position: "relative" }}
                      >
                        <div
                          style={{
                            position: "absolute",
                            float: "none",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -45%)",
                          }}
                          onClick={handleButtonClick}
                        >
                          <MadaMap
                            onChildClick={handleChildClick}
                            setCurrentPosition={setCurrentPosition}
                          />
                        </div>
                      </div>
                      <div
                        id="etape1"
                        className="etapy"
                        style={{ display: "none" }}
                      >
                        <div style={{ width: "100%" }}>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div>
                              <p>Latitude : {currentPosition.lat}</p>
                              <p>Longitude : {currentPosition.lng}</p>
                            </div>
                            <div>
                              <button
                                onClick={handleButtonClick}
                                style={{
                                  position: "absolute",
                                  right: "0",
                                  marginTop: "35px",
                                  padding: "10px",
                                  backgroundColor: "#fff",
                                  border: "1px solid #FF2C2C",
                                  borderRadius: "8px",
                                }}
                              >
                                Here
                              </button>
                            </div>
                          </div>
                          <MapContainer
                            center={center}
                            key={center.toString()}
                            zoom={8.5}
                            scrollWheelZoom={false}
                            style={{ height: "500px" }}
                          >
                            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                            {positions.map((position, index) => (
                              <Marker
                                key={index}
                                position={[
                                  currentPosition.lat,
                                  currentPosition.lng,
                                ]}
                              >
                                <Popup>Position {index + 1}</Popup>
                              </Marker>
                            ))}
                            <MapEvents onClick={handleClick} />
                          </MapContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Steeve Fin */}
              </div>
            </div>
            <div className={"tab-left-point"}>
              <div className={"nav-top-point"}>
                <NavLink to="form_point_tab" className={"reste_square_fr"}>
                  Formulaire d'ajout
                </NavLink>
                <NavLink to="list_point_tab" className={"reste_square_fr"}>
                  Liste
                </NavLink>
              </div>
              <div className={"tab-tab"}>
                <Routes>
                  <Route
                    path="/form_point_tab"
                    element={
                      <FormPoint
                        currentPosition={currentPosition}
                        region={region}
                      />
                    }
                  />
                  <Route
                    path="/list_point_tab"
                    element={<ListPoint data={data} region={region} />}
                  />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function MapEvents({ onClick }) {
  useMapEvents({
    click(e) {
      onClick(e);
    },
  });

  return null;
}

export default PointVente;
