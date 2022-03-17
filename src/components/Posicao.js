import React from "react";

class Posicao extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            valor: ''
        }
    }
    jogar(valor) {
        this.setState((state) => ({ valor }))
    }

    render() {
        return (
            <div className="Posicao" onClick={this.props.onClick}>{this.state.valor}</div>
        )
    }
}

export default Posicao;