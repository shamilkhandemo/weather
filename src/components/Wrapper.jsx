import React, { Component } from 'react';
import AddCity from '../containers/AddCity';
import ShowWeather from '../containers/ShowWeather';
import { BgColor, ItemCenterCenter } from '../styles/indexComponents';

class Wrapper extends Component {

    render() {
        return (
            <React.Fragment>
                <BgColor>
                        <AddCity/>
                        <ShowWeather/>
                </BgColor>
            </React.Fragment>
        )
    }
}

export default Wrapper;