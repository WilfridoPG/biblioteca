import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';

const Suscriptores=({suscriptores})=>{
    if(!suscriptores) return <h1>Cargando... </h1>;
    console.log(suscriptores);
    return(

        <div className="row">
            <div className="col-md-12 mb-4">

            </div>
            <div className="col-md-8">
                <h2>
                    <i className="fas fa-users">Suscriptores</i>
                </h2>
             </div>
             <table className="">
                 
             </table>

        </div>
        
    )
}
export default compose(
    firestoreConnect([{collection:'suscriptores'}]),
    connect((state,props)=>({
        suscriptores:state.firestore.ordered.suscriptores
    }))
)(Suscriptores);