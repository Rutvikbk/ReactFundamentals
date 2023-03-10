import {useState, useRef} from 'react';
import WeatherWidget from './WeatherWidgetClass';

function WeatherApp() {
    const [location, setLocation] = useState('');
    const locationInput = useRef(null);

    function handleClcik(e) {
        e.preventDefault();

        setLocation(locationInput.current.value);
    }

    return (
        <div className='container'>
            <div className='row justify-content-md-center'>
                <form className='row row-cols-lg-auto align-items-center mb-3'>
                    <div className='col-12'>
                        <input 
                            type='text'
                            className='form-control'
                            ref={locationInput}
                        />
                    </div>
                    <div className='col-12'>
                        <button 
                            className='btn btn-primary'
                            onClick={handleClcik}
                        >
                            Get
                        </button>
                    </div>
                </form>
                <WeatherWidget location={location} />
            </div>
        </div>
    )
}

export default WeatherApp;