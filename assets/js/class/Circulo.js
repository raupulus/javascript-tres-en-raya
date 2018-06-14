/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
**/

class Circulo extends BaseFicha {
    constructor(color = '#FF0000') {
        super(color);
        this._simbolo = 'O';
    }

    get simbolo() {
        return this._simbolo;
    }
}
