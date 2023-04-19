import React from "react";
import emit_logo from "../../assets/images/Logo_Emit.svg";
import changeToCard_Icon from "../../assets/images/new/changeToCard_Icon.svg";
import changeToList_Icon from "../../assets/images/new/changeToList_Icon.svg";

// import Navbar from './Navbar';

function Archive(props) {
  var card1 = (
    <>
      <div className={"card_white_fr"}>
        <div className={"tete_white_fr"}>
          <div className={"c1_tete_fr"}>
            <div className={"note_fr"}> Vin Blanc Maroparasy</div>
            <div className={"annee_fr"}>Année Universiaire 2022-2023</div>
          </div>
          <div className={"c2_tete_fr"}>
            <div className={"jour_fr"}>il y a 2 jours</div>
          </div>
        </div>
        <div className={"corps_white_fr"}>
          Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore Lorem ipsum door sit
          amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore
        </div>
        <div className={"qt_white_fr"}>Quantité: 200 feuilles de copie</div>
        <div className={"pied_white_fr"}>
          <div className={"pied_left_fr"}>
            <div className={"tag_pied_fr"}>M1</div>{" "}
            <div className={"tag_pied_fr"}>Informatique</div>
            <div className={"tag_pied_fr"}>Algèbre</div>{" "}
            <div className={"tag_pied_fr"}>Session:Normale</div>
          </div>
          <div className={"pied_right_fr"}>
            <div className={"right2_fr"}>etat validation</div>
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
            <div className={"note2_fr"}>
              <i className={"ph-fill ph-heart"}></i> Vin Blanc Maroparasy
            </div>
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
          <div className={"pied_left2_fr"}>Année Universiaire 2018-2019</div>
          <div className={"pied_right2_fr"}>
            <div className={"right22_fr"}>Rectifier</div>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div className={"workspace_fr"}>
        <div className={"space_main_fr"}>
          <div className={"col23_main_fr"}>
            <div className={"col-6"}>
              <div className={"col21_main_fr"}>
                Calendar
                <p></p>
              </div>
              <div className={"col21_main_fr"}>
                <div className={"title_21_fr"}>Tag de recherche rapide</div>
              </div>
            </div>
            <div className={"col22_main_fr"}>
              <div className={"title_21_fr"}>Archives des ventes</div>
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

export default Archive;
