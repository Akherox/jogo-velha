import React from "react";
import Posicao from "./Posicao"

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proximoJogador: 'X'
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log(e, this.proximoJogador)

        this.setState((state) => ({ proximoJogador: state.proximoJogador === 'X' ? 'O' : 'X' }))
    }

    render() {
        return (
            <div class="Jogo">
                <Posicao linha="0" coluna="0" onClick={this.handleClick} />
                <Posicao linha="0" coluna="1" onClick={this.handleClick} />
                <Posicao linha="0" coluna="2" onClick={this.handleClick} />
                <Posicao linha="1" coluna="0" onClick={this.handleClick} />
                <Posicao linha="1" coluna="1" onClick={this.handleClick} />
                <Posicao linha="1" coluna="2" onClick={this.handleClick} />
                <Posicao linha="2" coluna="0" onClick={this.handleClick} />
                <Posicao linha="2" coluna="1" onClick={this.handleClick} />
                <Posicao linha="2" coluna="2" onClick={this.handleClick} />
            </div>
        );
    }
}
export default Jogo;