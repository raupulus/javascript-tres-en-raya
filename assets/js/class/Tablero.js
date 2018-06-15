/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Clase principal para el juego del tres en raya pero dinámico.
 */
class Tablero {
    constructor(inCasillas = 3, fichaTurno = 'X') {
        this._turno = fichaTurno; // Nombre de la clase que tiene el turno
        this._numMovimientos = 0;
        this._terminado = false;

        // Creo matriz del volumen de [inCasillas][inCasillas]
        this._casillas = Array(inCasillas).fill([]);
        this._casillas.forEach((ele, idx, arr) => {
            arr[idx] = Array(inCasillas).fill('');
        });
    }

    /**
     * Getter para el turno actual
     * @returns {*} devolverá un objeto que hereda de BaseFicha.
     */
    get turno() {
        return this._turno;
    }

    /**
     * Getter para el número de movimientos dados en la partida.
     * @returns {number} Devuelve un valor Integer.
     */
    get numMovimientos() {
        return this._numMovimientos;
    }

    /**
     * Devuelve una matriz con los objetos de tipo Equis() y Circulo().
     * @returns {Array} Array con todos los objetos.
     */
    get casillas() {
        return this._casillas;
    }

    /**
     * Aumenta los movimientos actuales y devuelve si aún quedan huecos libres.
     * @returns {boolean}
     * @private
     */
    _aumentarMovimiento() {
        this._numMovimientos++;
        return this._numMovimientos > this._casillas;
    }

    /**
     * Comprueba la jugada en el eje horizontal
     * @param claseFicha Recibe la clase con la que se instanciaron las fichas.
     * @returns {boolean} Devuelve booleano indicando si hay línea ganadora.
     * @private
     */
    _comprobarHorizontal(claseFicha) {
        var coincidencias = 0;

        for (let y in this._casillas) {
            if (this._casillas[0][y] instanceof claseFicha) {
                coincidencias++;
                for (let x = 1; x < this._casillas.length; x++) {
                    if (this._casillas[x][y] instanceof claseFicha) {
                        coincidencias++;
                    }
                }

                if (coincidencias === this._casillas.length) {
                    return true;
                }

                coincidencias = 0;
            }
        }
        return false;
    }

    /**
     * Comprueba la jugada en el eje vertical.
     * @param claseFicha Recibe la clase con la que se instanciaron las fichas.
     * @returns {boolean} Devuelve booleano indicando si hay línea ganadora.
     * @private
     */
    _comprobarVertical(claseFicha) {
        var coincidencias = 0;

        for (let x in this._casillas) {
            if (this._casillas[x][0] instanceof claseFicha) {
                coincidencias++;
                for (let y = 1; y < this._casillas.length; y++) {
                    if (this._casillas[x][y] instanceof claseFicha) {
                        coincidencias++;
                    }
                }

                if (coincidencias === this._casillas.length) {
                    return true;
                }

                coincidencias = 0;
            }
        }
        return false;
    }

    /**
     * Compruebo las dos diagonales (X) del tablero solo si en alguna de las
     * dos puntas existe ficha colocada.
     * @param claseFicha Recibe la clase con la que se instanciaron las fichas.
     * @returns {boolean} Devuelve booleano indicando si hay línea ganadora.
     * @private
     */
    _comprobarDiagonal(claseFicha) {
        var coincidencias1 = 0;
        var coincidencias2 = 0;

        if ((this._casillas[0][0] instanceof claseFicha) ||
            (this._casillas[this._casillas.length - 1][0] instanceof claseFicha))
        {

            for (let x in this._casillas) {
                if (this._casillas[x][x] instanceof claseFicha) {
                    coincidencias1++;
                }

                if (this._casillas[(this._casillas.length - 1) - x][x]
                    instanceof claseFicha) {
                    coincidencias2++;
                }
            }
        }

        return (coincidencias1 === this._casillas.length) ||
               (coincidencias2 === this._casillas.length);
    }

    /**
     * Comprueba si hay alguna línea en el tablero para declarar ganador.
     * @returns {boolean} Devuelve booleano donde true significa que se ha
     *                    comprobado y no hay ganador.
     * @private
     */
    _comprobarGanador() {
        var claseFicha = this._turno === 'X' ? Equis : Circulo;

        var h = this._comprobarHorizontal(claseFicha);
        var v = this._comprobarVertical(claseFicha);
        var d = this._comprobarDiagonal(claseFicha);

        return h === v === d;
    }

    /**
     * Situal una ficha del jugador actual en la posición pasada como parámetro.
     * en caso de no poder hacerlo se entiende que ya hay una ficha en su lugar.
     * @param x Posición X en la matríz
     * @param y Posición Y en la matriz
     * @returns {boolean} Devuelve booleano si ha sido posible colocar ficha.
     * @private
     */
    _colocarFicha(x, y) {
        if(this._casillas[x][y] instanceof BaseFicha){
            return false;
        } else if (this._turno === 'X') {
            this._casillas[x][y] = new Equis();
        } else if (this._turno === 'O') {
            this._casillas[x][y] = new Circulo();
        }

        return true;
    }

    /**
     * Asigno el jugador con el turno correspondiente a jugar.
     * @private
     */
    _cambiarJugador() {
        this._turno = this._turno ==='X' ? 'O' : 'X';
    }

    /**
     * Inicia la jugada moviendo ficha al lugar indicado.
     * Devuelve booleano que será false si ha terminado y true si continua la
     * partida por no haber aún ganador.
     * @param x Posición X en la matríz
     * @param y Posición Y en la matriz
     * @returns {*} Devuelve un Array donde la primera posición es el código de
     *              resultado, la segunda posición es el mensaje de información.
     */
    nuevaJugada(x, y) {
        if (this._terminado) {
            return ['terminado', 'La partida ha finalizado, comienza otra'];
        }

        if (this._aumentarMovimiento()) {
            this._terminado = true;
            return ['empate', 'Esto es un claro caso de empate'];
        }

        if (! this._colocarFicha(x, y)) {
            return ['ficha', 'Ya hay una ficha en esta posición'];
        }

        if(this._comprobarGanador()){
            this._terminado = true;
            return ['ganada', 'Ha ganado el jugador: ' + this._turno,
                this._turno, //Jugador que ha ganado
                this._numMovimientos, //Cantidad de movimientos
            ];
        }

        this._cambiarJugador();
        return true;
    }
}
