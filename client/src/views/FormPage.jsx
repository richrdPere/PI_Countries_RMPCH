// Librerías
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Redux
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/actions/countriesActions';
import { getActivities } from '../redux/actions/activitiesActions';

// CSS
import "../css/formPage.css";


const capitalizeWords = (str) => {
  return str.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
};

const FormPage = () => {
    // Definir estados locales usando hooks
    const dispatch = useDispatch();// Manejador para activar acciones de Redux
    const countries = useSelector(state => state.countries);// Obtener la lista de países desde el estado de Redux
    const activities = useSelector(state => state.activities);// Obtener la lista de actividades desde el estado de Redux
    const navigate = useNavigate();// Hook para la navegación entre páginas

    // Cargar la lista de países al cargar el componente
    useEffect(() => {
        dispatch(getCountries());// Disparar la acción para obtener la lista de países desde Redux
    }, [dispatch]);// Se ejecuta cuando el componente se monta y cuando 'dispatch' cambia

    // Estados locales para almacenar los datos del formulario
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [nameExistsError, setNameExistsError] = useState(false);

    const [type, setType]= useState('');
    const [typeError, setTypeError] = useState('');

    const [difficulty, setDifficulty] = useState('');
    const [difficultyError, setDifficultyError] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [hoursError, setHoursError] = useState('');
    const [minutesError, setMinutesError] = useState('');
    const [season, setSeason] = useState('');
    const [seasonError, setSeasonError] = useState('');
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [selectedCountriesError, setSelectedCountriesError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [inputBusqueda, setInputBusqueda] = useState('');
    
    // Funciones de validación para cada campo del formulario
    const validateName = (value) => {
        if (!value) {
            return 'Por favor, ingrese el nombre de la actividad';
        }
        if (/[^a-zA-Z\s]/.test(value)) {
            return 'El nombre no debe contener caracteres especiales ni números';
        }
        return '';
    };

    const validateType = (value) => {
        if (!value.trim()) {
            return 'El tipo de Actividad no puede estar vacía.';
        }
        return '';
    };

    const validateDifficulty = (value) => {
        const difficultyPattern = /^[1-5]$/;
        if (!difficultyPattern.test(value.toString())) {
            return 'Debe seleccionar un nivel de dificultad';
        }
        return '';
    };

    const validateHours = (value) => {
        if (!value) {
            return 'Por favor, ingrese las horas';
        }
        if (isNaN(value) || value < 0) {
            return 'No se permite texto ni números negativos';
        }
        if (value > 23) {
            return 'Debe respetar el límite de 23 horas y 59 minutos';
        }
        if (value.length<2) {
            return 'Debe proporcionar dos digitos en el campo de horas';
        }
        return '';
    };

    const validateMinutes = (value) => {
        if (!value) {
        return 'Por favor, ingrese los minutos';
        }
        if (isNaN(value) || value < 0) {
        return 'No se permite texto ni números negativos';
        }
        if (value > 59) {
        return 'Debe respetar el límite de 59 minutos';
        }
        if (value.length<2) {
        return 'Debe proporcionar dos digitos en el campo de minutos';
        }
        return '';
    };
    
        
    const validateSeason = (value) => {
        if (!value.trim()) {
            return 'La temporada no puede estar vacía.';
        }
        return '';
    };

    // Manejadores de cambio para los campos del formulario
    const handleNameChange = (e) => {
        const value = e.target.value;
        const formattedValue = capitalizeWords(value); // Convertir la primera letra de cada palabra a mayúscula
        setName(formattedValue);
        setNameError(validateName(formattedValue));

        // Verificar si la actividad ya existe en la lista de actividades
        const activityExists = activities.some(activity => activity.name === formattedValue);
        setNameExistsError(activityExists);
    };

    const handleTypeChange = (e) => {
        const value = e.target.value;
        setType(value);
        setTypeError(validateType(value));
    };
    
    const handleDifficultyChange = (e) => {
        const value = e.target.value;
        setDifficulty(value);
        setDifficultyError(validateDifficulty(value));
    };

    // Manejador de cambio para las horas
    const handleHoursChange = (e) => {
        const value = e.target.value;
        setHours(value);
        setHoursError(validateHours(value));
    };

    // Manejador de cambio para los minutos
    const handleMinutesChange = (e) => {
        const value = e.target.value;
        setMinutes(value);
        setMinutesError(validateMinutes(value));
    };

    const handleSeasonChange = (e) => {
        const value = e.target.value;
        setSeason(value);
        setSeasonError(validateSeason(value));
    };

    const handleInputBusquedaChange = (e) => {
        setInputBusqueda(e.target.value);
    };

    // Manejador de cambio para la selección de países
    const handleCountryChange = (e, countryId) => {
        const isChecked = e.target.checked;
        if (isChecked) {
        setSelectedCountries([...selectedCountries, countryId]);
        setSelectedCountriesError(false); // Eliminar el mensaje de error
        } else {
        setSelectedCountries(selectedCountries.filter(id => id !== countryId));
        }
    };
    

    // Manejador para crear una nueva actividad
    const handleCreateActivity = async () => {
        // Validaciones de los campos del formulario
        if (
            !name ||
            !type ||
            !difficulty ||
            (!hours && !minutes) ||
            !season ||
            difficultyError !== '' || 
            typeError !== '' ||
            hoursError !== '' || 
            minutesError !== '' ||
            seasonError !== '' || 
            selectedCountries.length === 0 || 
            nameError !== '' ||
            nameExistsError !== false
        ) {
            setErrorMessage('Por favor debe completar todos los campos');
            setNameError(validateName(name));
            setTypeError(validateType(type));
            setDifficultyError(validateDifficulty(difficulty));
            setHoursError(validateHours(hours));
            setMinutesError(validateMinutes(minutes));
            setSeasonError(validateSeason(season));
            setSelectedCountriesError(selectedCountries.length === 0);
            return;
        }

        // Crear los datos para la nueva actividad
        const newActivityData = {
            name: name,
            type: type,
            difficulty: parseInt(difficulty),
            duration: parseFloat(`${hours}.${minutes}`),
            season: season,
            countries: selectedCountries.map(countryId => countries.find(country => country.id === countryId).cca3),
        };

        try {
        // Enviar la solicitud POST para crear la actividad
        const response = await axios.post('http://localhost:3001/activities', newActivityData, {
            headers: {
            'Content-Type': 'application/json',
            },
        });

        // Actualizar la lista de actividades
        dispatch(getActivities());
        console.log('Actividad creada exitosamente:', response.data);

        // Navegar a la página de inicio
        navigate('/HomePage');

        // Restablecer los campos del formulario y mensajes de error
        setName('');
        setType(''),
        setDifficulty('');
        setHours('');
        setMinutes('');
        setSeason('');
        setSelectedCountries([]);
        setSelectedCountriesError(false);
        setErrorMessage('');
        } catch (error) {
        console.error('Error al crear la actividad:', error);
        setErrorMessage('Hubo un error al crear la actividad.');
        }
    };

    // Renderizar el componente del formulario
    return (
        <div className='form-container'>
            <div className='search-container' >
                <h1>Crear Actividad Turística</h1>
            </div>

            <div className='form-error'>{errorMessage}</div>

            <form>
                <div className='form-field'>
                    <div className='search-label'>Nombre:</div>

                    <input 
                        className='search-input'
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                    />
                    {nameExistsError && (
                        <p className='form-error'>
                            ¡Esta actividad ya está registrada!
                        </p>
                    )}
                    <p className='form-error'>{nameError}</p>
                </div>

                <div className='form-field'>
                    <div className='search-label'>Tipo de Actividad:</div>
                        <select className='search-select' value={type} onChange={handleTypeChange}>
                            <option value="">Seleccione una Actividad</option>
                            <option value="Cultura">Cultura</option>
                            <option value="Gastronomia">Gastronomia</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                        </select>

                    <p className='form-error'>{typeError}</p>
                </div>


                <div className='form-field'>
                    <div className='search-label'>Dificultad:</div>

                    <select className='search-option' value={difficulty} onChange={handleDifficultyChange}>
                        <option value="">Seleccione una dificultad</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>

                    <p className='form-error'>{difficultyError}</p>
                </div>
                
                {/* Campos para la duración */}
                <div className='form-field'>
                    <div className='search-label'>Duración:</div>
                        <input 
                            className='search-input'
                            type="number"
                            value={hours}
                            onChange={handleHoursChange}
                            placeholder="Horas"
                        />
                        <input
                            className='search-input'
                            type="number"
                            value={minutes}
                            onChange={handleMinutesChange}
                            placeholder="Minutos"
                        />
                    <p className='form-error'>{hoursError || minutesError}</p>
                </div>

                <div className='form-field'>
                    <div className='search-label'>Temporada:</div>
                        <select className='search-select' value={season} onChange={handleSeasonChange}>
                            <option value="">Seleccione una temporada</option>
                            <option value="Verano">Verano</option>
                            <option value="Otoño">Otoño</option>
                            <option value="Invierno">Invierno</option>
                            <option value="Primavera">Primavera</option>
                        </select>

                    <p className='form-error'>{seasonError}</p>
                </div>

                <div className='form-field'>
                    <div className='search-label'>Seleccione los países:</div>
                    <input
                        className='search-input'
                        type="text"
                        placeholder="Buscar país"
                        value={inputBusqueda}
                        onChange={handleInputBusquedaChange}
                        style={{ marginBottom: '10px' }}
                    />

                    <div className='form-countryCheckWrapper'>
                        {countries
                        .filter(pais => pais.name.toLowerCase().includes(inputBusqueda.toLowerCase()))
                        .map(pais => (
                            <label className='form-checkbox' key={pais.id}>
                            <input
                                className='search-input'
                                type="checkbox"
                                value={pais.id}
                                checked={selectedCountries.includes(pais.id)}
                                onChange={(e) => handleCountryChange(e, pais.id)}
                            />
                            {pais.name}
                            </label>
                        ))}
                    </div>
                    {selectedCountriesError && (
                        <p className='form-error'>
                            Por favor seleccione al menos un país.
                        </p>
                    )}
                </div>
                <button className='search-button' type="button" onClick={handleCreateActivity}>
                    Crear Actividad
                </button>
            </form>
        </div>
    );
}

export default FormPage;