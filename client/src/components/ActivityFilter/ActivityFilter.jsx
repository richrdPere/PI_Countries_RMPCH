// Liberias
import React, { useState, useEffect} from 'react'
import { useNavigate  } from 'react-router-dom'

import '../../css/homePage.css'

const ActivityFilter = ({activities, onSelectActivity, onClearActivityFilter}) => {

    // Estado local para la actividad seleccionada
    const [selectedActivity, setSelectedActivity] = useState(null);
    // Obtener la función de navegación
    const navigate = useNavigate();

    // Efecto para gestionar el filtro basado en la actividad seleccionada
    useEffect(() => {
        // Si hay una actividad seleccionada
        if (selectedActivity) {
        // Buscar la actividad correspondiente en el array de actividades
        const activity = activities.find(activity => activity.name === selectedActivity);
        // Si se encontró la actividad, llamar a onSelectActivity con los países asociados
        if (activity) {
            onSelectActivity(activity.countries);
        }
        }
    }, [selectedActivity, activities, onSelectActivity]);

    // Función para borrar el filtro
    const handleClearFilter = () => {
        // Restablecer la actividad seleccionada
        setSelectedActivity('');
        // Llamar a onSelectActivity con una cadena vacía para limpiar el filtro
        onSelectActivity('');
        // Navegar a la ruta '/redirect'
        navigate('/homePage');
    };


    return (
        <div className='container__ordenacion'>
            {/* Etiqueta para mostrar el título */}
            <div className='search__label'>
                <h5>Filtrar por actividad:</h5>
            </div>
            
            {/* Select para elegir una actividad */}
            <select className='search-select'
                value={selectedActivity || ''}
                onChange={e => setSelectedActivity(e.target.value)}
            >
                {/* Opción por defecto */}
                <option value="">Seleccione una actividad</option>
                {/* Mapear actividades para crear opciones */}
                {activities.map(activity => (
                    <option key={activity.id} value={activity.name}>
                        {activity.name}
                    </option>
                ))}
            </select>
            
            {/* Mostrar botón "Borrar filtro" si hay una actividad seleccionada */}
            {selectedActivity && <button className='search-button' onClick={handleClearFilter}>Borrar filtro</button>}
        </div>
    )
}

export default ActivityFilter