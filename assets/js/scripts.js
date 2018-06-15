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

/*
 * Pinta las piezas en el juego.
 */
function placePieces() {

}

function showInfo() {
    console.log();
}

/**
  * Comprueba la casilla que se ha pulsado y registra esa pulsación o muestra
  * error por la barra de información.
  */
function clickBox(id) {
    alert(id);
    // Error:
    // showInfo('Ya existe ficha aquí')
}

function addEvents() {


}

function createGame(size) {
    tablero = new Tablero(size, 'X');
    var tabla = crearNodoId('table', 'game-table');
    var tr = crearNodo('tr', 'game-table-tr');
    var td = crearNodo('td', 'game-table-td');

    for (let x = 1; x <= size; x++) {
        tr.appendChild(td.cloneNode(true));
    }

    // Mediante un array de filas, itero mientras añado a la tabla
    Array(size).fill(tr).forEach(ele => {
        tabla.appendChild(ele.cloneNode(true));
    });

    document.getElementById('game-display').appendChild(tabla);
}

/**
 * Inicializa el juego.
 */
function init() {
    createGame(3);
    addEvents();
}

init();
