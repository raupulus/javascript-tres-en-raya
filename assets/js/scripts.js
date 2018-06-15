/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

var tablero;

/**
 * Limpia el juego y lo reinicia dejándolo listo para comenzar de nuevo.
 */
function resetGame() {
    var tabla = document.getElementById('game-table');

    if (document.removeChild(tabla)) {
        showInfo('Juego Reseteado');
        createGame();
    } else {
        showInfo('Ha ocurrido un error, recarga la página');
    }
}

/**
 * Coloca las piezas dentro del tablero de juego.
 * @param td
 * @param object
 */
function placePieces(td, object) {
    td.style.backgroundColor = object.color;
}


function showInfo(info) {
    var infobox = document.getElementById('game-header');
    // Pintar también en barra superior del juego
    console.log(info);
}

/**
 * Comprueba la casilla que se ha pulsado y registra esa pulsación o muestra
 * error por la barra de información.
 * @param me Referencia al objeto actual, quien activó el evento.
 * @returns {boolean} Devuelve true si la jugada se ha llevado a cabo correcta.
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

/**
 * Añade eventos al juego para interactuar en él.
 */
function addEvents() {
    var td = Array.from(document.getElementsByClassName('game-table-td'));
    td.forEach((ele, idx) => {
        ele.addEventListener('click', function() {
            clickBox(this);
        });
    });

    document.getElementById('btn-restart').addEventListener('click', resetGame);
}

/**
 * Crea el juego inicial instanciando el tablero y generando la tabla sobre la
 * que pintar el juego.
 * @param size
 */
function createGame(size, jugador1) {
    tablero = new Tablero(size, jugador1);
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
function gameInit(size = 3, jugador1 = 'X') {
    createGame(size);
    addEvents();
}
