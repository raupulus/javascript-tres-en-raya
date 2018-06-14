/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Tablero {
    constructor(casillas = 3) {
        this._turno = 'X'; // Nombre de la clase que tiene el turno
        this._numMovimientos = 0;

        // Creo matriz del volumen de [casillas][casillas]
        this._casillas = [];
        for (let x = 0; x < casillas; x++) {
            let c = this._casillas[x] = [];
            while (c.length < casillas) {
                c.push('');
            }
        }
    }

    get turno() {
        return this._turno;
    }

    get numMovimientos() {
        return this._numMovimientos;
    }

    _aumentarMovimiento() {
        this._numMovimientos++;
    }

    _comprobarHorizontal() {
        return false;
    }

    _comprobarVertical() {
        return false;
    }

    _comprobarDiagonal() {
        var coincidencias1 = 0;
        var coincidencias2 = 0;

        var claseActual = this._turno === 'X' ? Equis : Circulo;

        if ((this._casillas[0][0] instanceof claseActual) ||
            (this._casillas[this._casillas.length - 1][0] instanceof claseActual))
        {

            for (let x in this._casillas) {
                if (this._casillas[x][x] instanceof claseActual) {
                    coincidencias1++;
                }

                if (this._casillas[this._casillas.length - 1][x]
                    instanceof claseActual) {
                    coincidencias2++;
                }
            }
        }

        return (coincidencias1 === this._casillas.length) ||
               (coincidencias2 === this._casillas.length);
    }

    _comprobarGanador() {
        var h = this._comprobarHorizontal();
        var v = this._comprobarVertical();
        var d = this._comprobarDiagonal();

        if (false === h === v === d) {
            console.log('No ha ganado');
            return false;
        }

        return true;
    }

    _colocarFicha(x, y) {
        if (this._turno === 'X') {
            this._casillas[x][y] = new Equis();
        } else if (this._turno === 'O') {
            this._casillas[x][y] = new Circulo();
        }
    }

    nuevaJugada(x, y) {
        this._aumentarMovimiento();
        this._colocarFicha(x, y);
        if(this._comprobarGanador()){
            console.log('Han ganado las ' + this._turno);
            return true;
        }
    }
}
