import React from 'react';
import LogoEmit from '../../assets/images/Logo_Emit.svg' ;

function Loader(props) {
    return (
        <div className={"loader"}>
            <img src={LogoEmit} alt="logo-emit" className={"loader-logo"}/>
            <div className="animated-icon">
                <i className="fas fa-circle-notch  fa-spin"></i>
            </div>
        </div>
    );
}

export default Loader;