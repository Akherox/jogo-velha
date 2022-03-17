import React from "react";
import Posicao from "./Posicao"

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proximoJogador: 'X',
            posicaoLivre: '9',
            dados: [
                ['', '', ''],
                ['', '', ''],
                ['', '', ''],
            ]
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, posicao) {
        try {
            posicao.jogar(this.state.proximoJogador)

            let dados = this.state.dados;

            dados[posicao.props.linha][posicao.props.coluna] = this.state.proximoJogador;

            this.verificarmosGanhador()

            this.setState((state) => ({ proximoJogador: state.proximoJogador === 'X' ? 'O' : 'X', posicaoLivre: state.posicaoLivre--, dados, }))
        }
        catch (e) { }
    }

    verificarmosGanhador() {
        if (this.verificarJogador('X')) {
            console.log('X ganhou')
        }
        else if (this.verificarJogador('O')) {
            console.log('0 ganhou')
        }
        else if (this.state.posicaoLivre === 0) {
            console.log('Velha ganhou')
        }
    }
    verificarJogador(jogador) {
        for (let l = 0; l < 3; l++) {
            if (this.verificarLinha(jogador, l)) {
                return true;
            }
        }
        for (let c = 0; c < 3; c++) {
            if (this.verificarColuna(jogador, c)) {
                return true;
            }
        }
        return false;
    }

    verificarLinha(jogador, linha) {
        for (let c = 0; c < 3; c++) {
            if (this.state.dados[linha][c] !== jogador) {
                return false;
            }
        }
        return true;
    }

    verificarColuna(jogador, coluna) {
        for (let l = 0; l < 3; l++) {
            if (this.state.dados[l][coluna] !== jogador) {
                return false;
            }
        }
        return true;
    }

    verificarDiagonal(jogador, diagonal) {
        for (let d = 0; d < 3; d++) {
            if (this.state.dados[d][diagonal] !== jogador) {
                return false;
            }
        }
        return true;
    }


        render() {
            return (
                <div className="Jogo">
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