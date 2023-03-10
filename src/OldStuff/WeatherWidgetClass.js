import { Component } from "react";

class WeatherWidget extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        };
    }

    fetchData() {
        fetch(`http://api.weatherstack.com/current?access_key=ab3a468647edfe0486657725c9938c5b&query=${this.props.location}`)
                .then(res => res.json())
                .then(data => this.setState(data));
    }

    componentDidMount() {
        if(this.props.location) {
            this.fetchData();
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.location !== this.props.location) {
            this.fetchData();
        }
    }

    render() {
        let data = this.state.data;

        if(!data) {
            return <></>;
        }
    
        return (
            <div className="card">
                <img src={data.current.weather_icons[0]}/>
                <div className="card-body">
                    <h5 className="card-title">
                        {data.location.name}
                    </h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Temp: {data.current.temperature}</li>
                    <li className="list-group-item">{data.current.weather_descriptions[0]}</li>
                    <li className="list-group-item">Wind: {data.current.wind_speed} {data.current.wind_dir}</li>
                    <li className="list-group-item">Humidity: {data.current.humidity}</li>
                </ul>
            </div>
        );
    }
}

export default WeatherWidget;