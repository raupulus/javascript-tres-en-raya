/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

var tablero;

/**
  * Tirada demostrativa en Diagonal. Comenzando las ficha 'X'
  */
function tiradaDemo() {
    var tablero = new Tablero();
    tablero.nuevaJugada(0,0);  // Jugador X
    tablero.nuevaJugada(0,1);  // Jugador Y
    tablero.nuevaJugada(1,1);  // Jugador X
    tablero.nuevaJugada(0,2);  // Jugador Y
    tablero.nuevaJugada(2,2);  // Jugador X
}
//tiradaDemo();

function resetGame() {
    
}

function showInfo() {

}

function addEvents() {

}

function createGame(size) {
    tablero = new Tablero(size, 'X');
}

function init() {
    createGame(3);
    addEvents();
}
