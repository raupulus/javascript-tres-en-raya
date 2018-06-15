/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://wwww.gnu.org/licenses/gpl.txt
 **/

/**
 * Clase para representar un tipo de ficha, hereda de BaseFicha().
 */
class Equis extends BaseFicha {
    constructor(color = '#0000FF', inImagen = '') {
        super(color, 'O', inImagen);
    }
}
