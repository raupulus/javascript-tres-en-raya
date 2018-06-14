/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */


/**
  * Tirada demostrativa en Diagonal. Comenzando las ficha 'X'
  */
function tiradaDemostrativa() {
    var tablero = new Tablero();
    tablero.nuevaJugada(0,0);
    tablero.nuevaJugada(0,1);
    tablero.nuevaJugada(1,1);
    tablero.nuevaJugada(0,2);
    tablero.nuevaJugada(2,2);
    tablero.nuevaJugada(1,2);
}

tiradaDemostrativa();
