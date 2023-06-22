import { useState, useContext } from "react";

import ServiceContext from "../contexts/ServiceContext";

function ServiceCard({ service }) {
    
    const { services, dispatch } = useContext(ServiceContext);


    const handleRemoveItem = (id) => {

        dispatch(
          {
            type: "REMOVE_SERVICE",
            payload: id
          }
        )
      };

    return (

        <div className='divServices'>

            <div className='serviceType'>
                <div className="serviceLabel">Atendimento</div>
                {service.type}
            </div>

            <div className='serviceTime'>
                <div className="serviceLabel">Tempo estimado</div>
                {service.time}
            </div>

            <button style={{
                backgroundColor: "#8a6df1",
                color: "#2F2D2D"
            }} onClick={() => {handleRemoveItem(service.id) }}>Remover
            </button>

        </div>

    );
}

export default ServiceCard;