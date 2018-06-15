/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
**/

class BaseFicha {
    constructor(inColor) {
        this._color = inColor;
    }

    get color() {
        return this._color;
    }
}
