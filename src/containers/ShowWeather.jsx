import React, {Component} from 'react';
import { connect } from "react-redux";
import { removeCity, toggleShouldDelete } from "../actions/index";
import { Ul, Li } from "../styles/indexComponents";


class GetData extends Component {


    toggle = (event) => {
        let target = event.target;
        if (target.tagName !== "LI")
            return;
        // target.style.textDecoration = (target.style.textDecoration === "line-through") ? "none" : "line-through" ;
        this.props.onToggleShouldDelete(target.getAttribute("data-key"));
    }

    
    render() {
        return (
            <React.Fragment>
                <h2>Your weather data:</h2>
                <Ul onClick = {this.toggle} id = "weather__ul">
                    {
                        (this.props.localState.length) ?
                        this.props.localState.map((element, index) => 
                            <Li key = {index}
                                data-key = {element.id} 
                                style = {{textDecoration: element.shouldDelete ? 'line-through' : 'none'}}
                                >
                                {
                                    (element.temprature) ?
                                    (element.city + " " + element.temprature) :
                                    ("Sorry, cannot find weather for " + element.city)
                                }
                            </Li>
                        ) :

                        <p className = "description">
                            Add your first city!<br/>
                            For example: "London", "Rome", "Moscow"
                        </p>
                    }
                </Ul>

                <div className="flex-center-center">
                    <button className = "button" onClick = {this.props.onRemoveCity}>
                        Save changes
                    </button>
                </div>

            </React.Fragment>
        )
    }

}

function mapStateToProps(state) {
    return {
        localState: state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRemoveCity : () => {
            dispatch(removeCity())
        },

        onToggleShouldDelete : (id) => {
            dispatch(toggleShouldDelete(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetData)