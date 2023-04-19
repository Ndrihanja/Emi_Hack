import React, { useEffect, useState } from "react";
import produitService from "../../services/produit.service";

var is_at = 0;

function Achat(props) {
  const [listP, setListP] = useState([]);
  const [entana, setEntana] = useState([]);

  useEffect(() => {
    produitService.getAll().then((res) => {
      setListP(res.data.data);
    });
  }, []);

  const ajoutPannier = (
    id,
    libelle,
    description,
    categorie,
    quantite,
    prix
  ) => {
    var newProduit = {
      id: id,
      libelle: libelle,
      description: description,
      categorie: categorie,
      quantite: 1,
      prix: prix,
    };

    const idExists = entana.some((item) => item.id === newProduit.id);
    if (!idExists) {
      setEntana([...entana, newProduit]);
    } else {
      var isanyvao = 1;
      for (var i = 0; i < entana.length; i++) {
        if (entana[i].id == newProduit.id) {
          isanyvao = entana[i].quantite + 1;
          break;
        }
      }
      newProduit = {
        id: id,
        libelle: libelle,
        description: description,
        categorie: categorie,
        quantite: quantite,
        prix: prix,
      };

      setEntana(
        entana.map((item) => (item.id === newProduit.id ? newProduit : item))
      );
    }
  };

  const retirerPannier = (id) => {
    const retirer = entana.filter((item) => item.id !== id);
    setEntana(retirer);
  };

  const addQuantite = (id, libelle, description, categorie, prix, quantite) => {
    var isanyvao = 1;
    let oldPrix = listP.find((ls) => ls.id === id);
    for (var i = 0; i < entana.length; i++) {
      if (entana[i].id == id) {
        isanyvao = entana[i].quantite + 1;
        break;
      }
    }
    var newProduit = {
      id: id,
      libelle: libelle,
      description: description,
      categorie: categorie,
      quantite: isanyvao,
      prix: oldPrix.prix * isanyvao,
    };

    setEntana(
      entana.map((item) => (item.id === newProduit.id ? newProduit : item))
    );
  };

  const removeQuantite = (
    id,
    libelle,
    description,
    categorie,
    quantite,
    prix
  ) => {
    var isanyvao = 1;
    let oldPrix = listP.find((ls) => ls.id === id);
    for (var i = 0; i < entana.length; i++) {
      if (entana[i].id === id) {
        if (quantite <= 1) {
          //alert("");
        } else {
          isanyvao = entana[i].quantite - 1;
          break;
        }
      }
    }
    var newProduit = {
      id: id,
      libelle: libelle,
      description: description,
      categorie: categorie,
      quantite: isanyvao,
      prix: oldPrix.prix * isanyvao,
    };

    setEntana(
      entana.map((item) => (item.id === newProduit.id ? newProduit : item))
    );
  };

  //PARTIE ETAP//////////////////
  var data_ex = 0;

  const [nombre_etape, setNombre] = useState(3);
  const [index_at, setIndex] = useState(0);

  useEffect(() => {}, []);

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

    console.log("entana " + entana);

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

  //////////////////////////////
  return (
    <div className={"workspace_fr"}>
      <div className="space_main_fr">
        <div className={"form_etape"} style={{ width: "90%", height: "80vh" }}>
          <div className={"form_etape_head"}>
            <div className={"form_bt_center"}>
              <button
                className={"etapy1 form_active"}
                onClick={(e) => afficheo(e, 0)}
              >
                0
              </button>
              <button className={"etapy1"} onClick={(e) => afficheo(e, 1)}>
                1
              </button>
              <button className={"etapy1"} onClick={(e) => afficheo(e, 2)}>
                2
              </button>
            </div>
          </div>
          <div className={"form_etape_body"}>
            <div id="etape0" className="etapy">
              <div className={"form-achat"}>
                <div className={"left-form-achat"}>
                  <h4>Les produits</h4>
                  <div className={"scroll-prod"}>
                    {listP.map((item) => (
                      <div key={item.id} className={"prod-items"}>
                        <h5>{item.libelle}</h5>
                        <p>{item.prix} Ar</p>
                        <div className={"btn-panier"}>
                          <button
                            className={"btn-panier-btn"}
                            onClick={(e) =>
                              ajoutPannier(
                                item.id,
                                item.libelle,
                                item.description,
                                item.categorie,
                                item.quantite,
                                item.prix
                              )
                            }
                          >
                            <i class="ph-fill ph-shopping-cart"></i>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={"right-form-achat"}>
                  <table className={"table-left-achat"}>
                    <tr>
                      <th>Produit</th>
                      <th>Quantité</th>
                      <th>Prix</th>
                      <th></th>
                    </tr>
                    {entana.map((item) => (
                      <tr key={item.id} className={"item-entana"}>
                        <td>
                          <h4>{item.libelle}</h4>
                        </td>
                        <td>
                          <div className={"bnt-td"}>
                            <button
                              className={"moov-entana"}
                              onClick={(e) =>
                                addQuantite(
                                  item.id,
                                  item.libelle,
                                  item.description,
                                  item.categorie,
                                  item.prix,
                                  item.quantite
                                )
                              }
                            >
                              {" "}
                              +{" "}
                            </button>
                            <p>{item.quantite} bouteille(s)</p>
                            <button
                              className={"moov-entana"}
                              onClick={(e) =>
                                removeQuantite(
                                  item.id,
                                  item.libelle,
                                  item.description,
                                  item.categorie,
                                  item.quantite,
                                  item.prix
                                )
                              }
                            >
                              {" "}
                              -{" "}
                            </button>
                          </div>
                        </td>
                        <td>{item.prix}</td>
                        <td>
                          <button
                            className={"retire-entana"}
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "10px",
                              backgroundColor: "brown",
                              cursor: "pointer",
                            }}
                            onClick={(e) => retirerPannier(item.id)}
                          >
                            <i class="ph-fill ph-trash"></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>
            <div id="etape1" className="etapy" style={{ display: "none" }}>
              <div className="client_list">
                <h3>Liste des clients:</h3>
                <div className="thelist">
                  <div className="client_element">Tovonalintsoa Tovokely</div>

                  <div className="client_element">Rakotomalala sitra</div>
                </div>
              </div>
              <div className="client_form">
                <input type="text" name="nom" />
                <input type="text" name="nom" />
                <input type="text" name="nom" />
              </div>
            </div>
            <div id="etape2" className="etapy" style={{ display: "none" }}>
              <div
                className="achat_fin"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "center",
                  alignItems: "center",
                }}
              >
                <h3>Facturation de vos achats</h3>
                <p>Facture par mail</p>
                <textarea></textarea>
                <br></br>

                <p>Message à envoyer:</p>
                <textarea></textarea>

                <br></br>

                <button
                  type="button"
                  style={{
                    padding: "1rem",
                    color: "white",
                    background: "#FF2E2E",
                    outline: "none",
                    border: "none",
                    borderRadius: "8px",
                  }}
                  onClick={() => {
                    produitService.pay().then((res) => {
                      console.log("dda ", res.data);
                      produitService.mail().then((res) => {});
                      window.open(
                        res.data.data.url,
                        "_blank",
                        "noopener,noreferrer"
                      );
                    });
                  }}
                >
                  Enregistrer achay
                </button>
              </div>
            </div>
          </div>

          <div className={"form_etape_foot"}>
            <div className={"form_bt_center"}>
              <button onClick={(e) => prev(e)}>prev</button>
              <button onClick={(e) => next(e)}>next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achat;
