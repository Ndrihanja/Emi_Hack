import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './Accueil';
import Achat from './Achat';
import Archive from './Archive';
import MonCompte from './MonCompte';
import Navbar from './Navbar';
import PointVente from './PointVente';
import Send from './Send';
import StockProduit from './StockProduit';
import TableauBord from './TableauBord';

function Dashboard(props) {
    const not_found = 
        <div className="workspace_fr">
            <div className='space_main_fr'>
                <div className={"not-found-fr"}>
                    <h1>404 NOT FOUND</h1>
                    <button className={"ge-btn btn-hight"}>Revenir a l'acceuil</button>
                </div>
            </div>
        </div>;

    return (
        <>
            <div className={"home_fr"}>
            <div className={"nav2_fr"}>nav bar2</div>
                <Navbar/>

                <Routes>
                    <Route path={"/"} element={<Accueil/>}/>
                    <Route path={"accueil"} element={<Accueil/>}/>
                    <Route path={"elements-env/*"} element={<Send/>}/>
                    <Route path={"achat/*"} element={<Achat/>}/>
                    <Route path={"point-vente/*"} element={<PointVente/>}/>
                    <Route path={"stock-produit/*"} element={<StockProduit/>}/>
                    <Route path={"tableau-de-bord"} element={<TableauBord/>}/>
                    <Route path={"archives"} element={<Archive/>}/>
                    <Route path={"compte"} element={<MonCompte/>}/>
                    <Route path={"*"} element={not_found}/>
                </Routes>
                
            </div>
        </>
    );
}

export default Dashboard;