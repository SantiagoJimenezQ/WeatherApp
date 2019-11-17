import React from "react";

class Form extends React.Component {
    render() {
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="Madrid"/>
                <input type="text" name="country" placeholder="Spain"/>
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;