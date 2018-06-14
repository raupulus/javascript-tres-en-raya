/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
 **/

class Equis extends BaseFicha {
    constructor(color = '#0000FF') {
        super(color);
        this._simbolo = 'X';
    }

    get simbolo() {
        return this._simbolo;
    }
}
