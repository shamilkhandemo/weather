import React, { Component } from 'react';
import { connect } from "react-redux";
import { addCity, setWeather } from "../actions/index";
import { Title} from '../styles/indexComponents';


class AddCity extends Component {
    
    state = {
        id: Date.now().toString()
    }

    componentDidMount() {
        let input = document.getElementById('addCity__input');
        input.addEventListener('click', function(event){
            input.value = "";
            event.preventDefault();
        });
    }
    
    setWeather = (id, city) => {
        const url = 'https://api.openweathermap.org/data/2.5/find?q=';
        const appID = '8c6b34946a9936a4f503e2797bfc6840';
        const query = `&type=like&APPID=${appID}`;
        fetch(`${url}${city}${query}`)
            .then(response => response.json())
            .then(data => this.props.onSetWeather(id, data.list[0].main.temp - 273.15))
            .catch(message => console.log(message));
    }


    addCity = () => {
        let input = document.getElementById('addCity__input');
        let re = /^[a-zA-Z]+$/;
        if (!re.test(input.value)) {
            input.value = "Please write only english letters";
            return;
        }

        this.props.onAddCity(this.state.id, input.value);
        this.setWeather(this.state.id, input.value);
        input.value = "";
        this.setState({id: Date.now().toString()});
    }
    
    render() {
        return (
            <React.Fragment>
                <h2>
                    Add new city
                </h2>
                <div className="flex-center-center flex-column ">
                    
                            <div className="flex-center-center">
                                <input type="text" id = "addCity__input" className = "input" autoFocus/>
                            </div>
                        
                            <div className="flex-center-center">
                                <button className = "button" onClick = {this.addCity}>
                                    Add
                                </button>
                            </div>
                       
                    
                </div>
            </React.Fragment>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return {
        onAddCity: (id, city) => {
            dispatch(addCity(id, city))
        },

        onSetWeather : (id, value) => {
            dispatch(setWeather(id, value))
        }
    }
}

export default connect (null, mapDispatchToProps)(AddCity);




