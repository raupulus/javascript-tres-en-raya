/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

class Tablero {
    constructor(inCasillas = 3, fichaTurno = 'X') {
        this._turno = fichaTurno; // Nombre de la clase que tiene el turno
        this._numMovimientos = 0;
        this._terminado = false;

        // Creo matriz del volumen de [inCasillas][inCasillas]
        this._casillas = [];
        for (let x = 0; x < inCasillas; x++) {
            let c = this._casillas[x] = [];
            while (c.length < inCasillas) {
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

    /*
     * Devuelve una matriz con los objetos de tipo Equis() y Circulo().
     */
    get casillas() {
        return this._casillas;
    }

    /**
      * Aumenta los movimientos actuales y devuelve si aún quedan huecos libres.
      */
    _aumentarMovimiento() {
        this._numMovimientos++;
        return this._numMovimientos > this._casillas;
    }

    /**
      * Si encuentra una coincidencia de la primera columna comprueba la fila
      * para devolver un booleano indicando si está completa.
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

    _comprobarVertical(claseFicha) {
        var coincidencias = 0;

        for (let x in this._casillas) {
            if (this._casillas[0][x] instanceof claseFicha) {
                coincidencias++;
                for (let y = 1; y < this._casillas.length; y++) {
                    if (this._casillas[x][y] instanceof claseFicha) {
                        coincidencias++;
                    }
                    console.log(x+':'+y);
                }

                if (coincidencias === this._casillas.length) {
                    return true;
                }

                coincidencias = 0;
            }
        }
        return false;
    }

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

                if (this._casillas[this._casillas.length - 1][x]
                    instanceof claseFicha) {
                    coincidencias2++;
                }
            }
        }

        return (coincidencias1 === this._casillas.length) ||
               (coincidencias2 === this._casillas.length);
    }

    _comprobarGanador() {
        var claseFicha = this._turno === 'X' ? Equis : Circulo;

        var h = this._comprobarHorizontal(claseFicha);
        var v = this._comprobarVertical(claseFicha);
        var d = this._comprobarDiagonal(claseFicha);

        return h === v === d;
    }

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
      */
    _cambiarJugador() {
        this._turno = this._turno ==='X' ? 'O' : 'X';
    }

    /**
     * Comrpueba si está ocupada la posición del tablero por alguna ficha.
     * @private
     */
    _ocupada() {

    }

    /**
      * Inicia la jugada moviendo ficha al lugar indicado.
      * Devuelve booleano que será false si ha terminado y true si continua la
      * partida por no haber aún ganador.
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
            return ['ganada', 'Ha ganado el jugador: ' + this._turno];
        }

        this._cambiarJugador();

        return true;
    }
}
