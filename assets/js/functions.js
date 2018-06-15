/**
 * @author Raúl Caro Pastorino
 * @copyright Copyright © 2018 Raúl Caro Pastorino
 * @license https://www.gnu.org/licenses/gpl-3.0-standalone.html
 */

/**
 * Crea un nuevo nodo y le asigna una clase.
 * @param  {String} elemento Etiqueta HTML para crear el nodo.
 * @param  {String} clase    Clase para asignar a la etiqueta creada
 * @param  {String} texto    Texto para incluir en el nodo texto.
 * @return {Node}            Devuelve el nodo creado.
 */
function crearNodo(elemento, clase, texto = '') {
    var nuevoNodo = document.createElement(elemento);
    nuevoNodo.setAttribute('class', clase);

    var nodoTexto = document.createTextNode(texto);
    nuevoNodo.appendChild(nodoTexto);
    return nuevoNodo;
}

/**
 * Crea un nuevo nodo y le asigna un id.
 * @param  {String} elemento Etiqueta HTML para crear el nodo.
 * @param  {String} id       Id para asignar a la etiqueta creada
 * @param  {String} texto    Texto para incluir en el nodo texto.
 * @return {Node}            Devuelve el nodo creado.
 */
function crearNodoId(elemento, id, texto = '') {
    var nuevoNodo = document.createElement(elemento);
    nuevoNodo.setAttribute('id', id);

    var nodoTexto = document.createTextNode(texto);
    nuevoNodo.appendChild(nodoTexto);
    return nuevoNodo;
}
