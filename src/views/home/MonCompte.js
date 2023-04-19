import React from 'react';
import emit_logo from '../../assets/images/Logo_Emit.svg';
// import Navbar from './Navbar';

function MonCompte(props) {
    var card1 =
    <>
    <div className={"card3_white_fr"}>
        <div className={"card3_left_fr"}>
            <div className={"card3_comp1_fr card3_green_fr"}>Elements envoyés</div>
            <div className={"card3_comp2_fr card3_green_fr"}>50</div>
            <div className={"card3_comp3_fr"}>Date entre:
                <input type={"date"}/>
                <input type={"date"}/>
            </div>

        </div>
        <div className={"card3_right_fr"}>

        </div>
    </div>

    </>;

    var card2 = <>
<div className={"card_white2_fr"}>
    <div className={"tete_white2_fr"}>
        <div className={"c1_tete2_fr"}>
            <div className={"note2_fr"}>Notes RPM L3</div>
            <div className={"comm2_fr"}>Lorem ipsum dolor sit amet, Lorem ipsum olor sit</div>
        </div>
        <div className={"c2_tete2_fr"}>
            <div className={"jour2_fr"}>12/01/202</div>
        </div>
    </div>
    <div className={"corps_white2_fr"}>
    Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
    </div>
    
    <div className={"pied_white2_fr"}>
        <div className={"pied_left2_fr"}>
           Année Universiaire 2018-2019
        </div>
        <div className={"pied_right2_fr"}>
            <div className={"right22_fr"}>
                Rectifier
            </div>
        </div>
        
    </div>
</div>

    </>;
 

    return (
        <>
            <div className={"workspace_fr"}>
                <div className={"space_main_fr"}> 
                    <div className={"head_main_fr"}>
                        <div className={"box1_main_fr"}>
                            <div className={"c1_box1_fr"}>Mon compte<br></br>
                                <div className={"date_fr"}>26 janvier 2023 14h 22mm</div></div>
                            <div className={"c2_box1_fr"}><input placeholder='Recherche'/> <div className={"search_icon_fr"}>Q</div></div>
                            <div className={"c3_box1_fr"}>icons</div>
                        </div>
                        
                    </div>
                    
                    <div className={"head_main4_fr"}>
                        <div className={"l1_main4_fr"}>
                            <div className={"c1_main4_fr"}>Bonjour <b>Edouardo Stevano</b></div>
                            <div className={"c2_main4_fr"}>sary</div>
                        </div>
                        <div className={"l2_main4_fr"}>
                            Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                            Lorem ipsum door sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                        </div>
                    </div>

                    <div className={"body_main4_fr"}>
                        <div className={"c1_body4_fr"}>
                            <div className={"c1_centre_fr"}>Sary</div>
                        </div>
                        <div className={"c2_body4_fr"}>
                            <div className={"c2_title_fr"}>Informations personnelles</div>
                            <div className={"c2_continput_fr"}>
                                <div className="input-section">
                                    <img src={""} alt="user-icon"/>
                                    <input type="text" name={"email"} placeholder={"Nom d'utilisateur"}/>
                                    <i className="fas fa-circle-notch fa-spin"></i>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MonCompte;