/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Tablero {
    constructor() {
        this._casillas = 3;
        this._turno = 'X'; // Siempre comienzan las fichas X
        this._numMovimientos = 0;
    }

    _aumentarMovimiento() {
        this._numMovimientos++;
    }

    _comprobarHorizontal() {

    }

    _comprobarVertical() {

    }

    _comprobarDiagonal() {

    }

    _comprobarGanador() {
        this._comprobarHorizontal();
        this._comprobarVertical();
        this._comprobarDiagonal();
    }
}
