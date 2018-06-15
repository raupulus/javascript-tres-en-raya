/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
 **/

class BaseFicha {
    constructor(inColor, inSimbolo, inImagen) {
        this._color = inColor;
        this._simbolo = inSimbolo;
        this._imagen = inImagen;
    }

    get color() {
        return this._color;
    }

    get simbolo() {
        return this._simbolo;
    }

    get imagen() {
        return this._imagen;
    }
}
