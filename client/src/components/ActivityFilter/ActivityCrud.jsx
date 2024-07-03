import React from "react";

const ActivityCrud = ({ activities, formatDuration }) => {
    
    // const [actividades, setActividades] = useState([]);


    // Función para eliminar una Actividad
    // const removeActivity = (id) => {
    //     let filterActivities = activities.filter((act) => {
    //         return act.id !== id;
    //     })

        
    // }

    // Función para editar una Actividad
    // const removeActivity = (id) => {

    // }


    // return (
    //     <>
    //         {activities.length > 0
    //             ? activities.map((activity, index) =>
    //                 <div key={activity.id} className="modal__Activities">
    //                     <h3>Actividad {index + 1}:</h3>
    //                     <p className="no-margin">Nombre: {activity.name}</p>
    //                     <p className="no-margin">Tipo: {activity.type}</p>
    //                     <p className="no-margin">Dificultad: {activity.difficulty}</p>
    //                     <p className="no-margin">Duración: {formatDuration(activity.duration)}</p>
    //                     <p className="no-margin">Temporada: {activity.season}</p>

    //                     <button onClick={removeActivity(activity.id)}>Eliminar</button>
    //                     {/* <button>Editar</button> */}
    //                 </div>
    //             )
    //             : <h4>No registradas</h4>}
    //     </>
    // );
};

export default ActivityCrud;
