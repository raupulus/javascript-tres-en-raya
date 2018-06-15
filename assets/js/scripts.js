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
    tablero = new Tablero();
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
function placePieces(td, object) {
    td.style.backgroundColor = object.color;
}

function showInfo(info) {
    // Pintar también en barra superior del juego
    console.log(info);
}

/**
  * Comprueba la casilla que se ha pulsado y registra esa pulsación o muestra
  * error por la barra de información.
  */
function clickBox(me) {
    var trparent = me.parentNode;
    var td = me;
    var x = td.getAttribute('data-x');
    var y = trparent.getAttribute('data-y');

    var jugada = tablero.nuevaJugada(x,y);

    if (jugada[0] === 'terminado') {
       showInfo(jugada[1]);
        return false;
    } else if (jugada[0] === 'ficha') {
        showInfo(jugada[1]);
        return false;
    } else if (jugada[0] === 'empate') {
        showInfo(jugada[1]);
        showInfo();
    } else if (jugada[0] === 'ganada') {
        showInfo(jugada[1]);
    }

    placePieces(td, tablero.casillas[x][y]);

    return true;
}

function addEvents() {
    var td = Array.from(document.getElementsByClassName('game-table-td'));
    td.forEach((ele, idx) => {
        ele.addEventListener('click', function() {
            clickBox(this);
        });
    })
}

function createGame(size) {
    tablero = new Tablero(size, 'X');
    var tabla = crearNodoId('table', 'game-table');
    var tr = crearNodo('tr', 'game-table-tr');
    var td = crearNodo('td', 'game-table-td');

    for (let x = 0; x < size; x++) {
        let newtd = td.cloneNode(true);
        newtd.setAttribute('data-x', x);
        tr.appendChild(newtd);
    }

    // Mediante un array de filas, itero mientras añado a la tabla y las marco.
    Array(size).fill(tr).forEach((ele, idx) => {
        let newtr = ele.cloneNode(true);
        newtr.setAttribute('data-y', idx);
        tabla.appendChild(newtr);
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
