var productos = [
    {nombre: 'camisa', precio:300},
    {nombre: 'pantalon', precio:500},
    {nombre: 'zapatos', precio:400},
    {nombre: 'sombrero', precio:200}
];

var carrito =[];
/*
function  mostrarMenu(){
    var menu = "Seleccione un producto para agregar al carrito:\n";
    for (var i = 0; i < productos.length; i++){
        menu += (i+1) + ". " + productos[i].nombre + " -$" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver carrito y total \n";
    menu += (productos.length + 2) + ". Salir \n";
    return menu;
}
*/
function MenuFuncion() {
    var menu = "Seleccione una opción:\n";
    for (var i = 0; i < productos.length; i++) {
        menu += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
    }
    menu += (productos.length + 1) + ". Ver Carrito y Total\n";
    menu += (productos.length + 2) + ". Eliminar produto\n";
    menu += (productos.length + 3) + ". Menú Administración\n";
    menu += (productos.length + 4) + ". Salir\n";
    return menu;
}

function agregarAlCarrito(index){
    var productoSeleccionado = productos[index];
    carrito.push(productoSeleccionado);
    console.log('Producto "'+ productoSeleccionado.nombre +'"agregado al carrito.');
}
    

    function mostrarCarritoYTotal(){
        if (carrito.length === 0 ){
            console.log("El carrito esta vacio. ");
        }else {
            var mensajeCarrito = "Carrito de compras : \n";
            var total = 0;
            for (var i = 0; i < carrito.length; i++){
                mensajeCarrito += (i + 1) + ". " + carrito[i].nombre + "-$" + carrito[i].precio + "\n";
                total += carrito[i].precio;
            }
            mensajeCarrito += "\nTotal: $" + total;
            console.log(mensajeCarrito);
        }
    }

    function actualizarCarrito() {
        if (carrito.length === 0) {
            alert("El carrito está vacío, no hay nada que eliminar.");
            return;
        }

        var mensaje = "Seleccione el número del producto que desea eliminar:\n";

        for (var i = 0; i < carrito.length; i++) {
            mensaje += (i + 1) + ". " + carrito[i].nombre + " - $" + carrito[i].precio + "\n";
        }

        var opcionEliminar = Number(prompt(mensaje));

        if (!isNaN(opcionEliminar) && opcionEliminar >= 1 && opcionEliminar <= carrito.length) {
                var eliminado = carrito.splice(opcionEliminar - 1, 1);
                alert(`Producto "${eliminado[0].nombre}" eliminado del carrito.`);
        }else {
            alert("Opción inválida.");
            }
    }

    /*
    var opcion;
    do{
        opcion = prompt(mostrarMenu());

        opcion = Number(opcion);

        if(isNaN(opcion)||opcion < 1 || opcion > productos.length + 2){
            console.log("Opcion no valida, por favor intente de nuevo.");
        } else if (opcion >= 1 && opcion <= productos.length){
            agregarAlCarrito(opcion - 1);
        }else if (opcion === productos.length + 1){
            mostrarCarritoYTotal();
        }
    }while (opcion !== productos.length + 2);

    
console.log("Gracias por visitar la tienda. ");
*/
function menuAdmin() {
    var opcion;
    do {
        opcion = prompt(`
        *** Menú de Administración ***
        1. Ver productos
        2. Agregar producto
        3. Eliminar producto
        4. Modificar precio de un producto
        5. Salir
        `);

        switch(opcion) {
            case '1': // Ver productos
                var lista = "Productos disponibles:\n";
                for (var i = 0; i < productos.length; i++) {
                    lista += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
                }
                alert(lista);
                break;

            case '2': // Agregar producto
                var nombre = prompt("Nombre del nuevo producto:");
                var precio = parseInt(prompt("Precio del producto:"));
                if (nombre && !isNaN(precio)) {
                    productos.push({nombre: nombre, precio: precio});
                    alert(`${nombre} agregado con precio $${precio}`);
                } else {
                    alert("Datos inválidos.");
                }
                break;

            case '3': // Eliminar producto
                var listaEliminar = "Seleccione un producto a eliminar:\n";
                for (var i = 0; i < productos.length; i++) {
                    listaEliminar += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
                }
                var eliminar = parseInt(prompt(listaEliminar)) - 1;
                if (eliminar >= 0 && eliminar < productos.length) {
                    var quitado = productos.splice(eliminar, 1);
                    alert(`${quitado[0].nombre} eliminado del catálogo.`);
                } else {
                    alert("Opción inválida.");
                }
                break;

            case '4': // Modificar precio
                var listaPrecios = "Seleccione el producto para modificar su precio:\n";
                for (var i = 0; i < productos.length; i++) {
                    listaPrecios += (i + 1) + ". " + productos[i].nombre + " - $" + productos[i].precio + "\n";
                }
                var modificar = parseInt(prompt(listaPrecios)) - 1;
                if (modificar >= 0 && modificar < productos.length) {
                    var nuevoPrecio = parseInt(prompt(`Nuevo precio para ${productos[modificar].nombre}:`));
                    if (!isNaN(nuevoPrecio)) {
                        productos[modificar].precio = nuevoPrecio;
                        alert(`Precio actualizado: ${productos[modificar].nombre} ahora cuesta $${nuevoPrecio}`);
                    } else {
                        alert("Precio inválido.");
                    }
                } else {
                    alert("Opción inválida.");
                }
                break;

            case '5':
                alert("Saliendo del menú administración...");
                break;

            default:
                alert("Opción inválida.");
        }
    } while (opcion !== '5');
}

function mostrarMenu() {
    var opcion;
    do {
        opcion = prompt(MenuFuncion());
        opcion = Number(opcion);

        if (isNaN(opcion) || opcion < 1 || opcion > productos.length + 4) {
            alert("Opción no válida, intenta de nuevo.");
        } else if (opcion >= 1 && opcion <= productos.length) {
            agregarAlCarrito(opcion - 1);
        } else if (opcion === productos.length + 1) {
            mostrarCarritoYTotal();
        } else if (opcion === productos.length + 2) {
            actualizarCarrito();
        } else if (opcion === productos.length + 3) {
            menuAdmin();
        }
    } while (opcion !== productos.length + 4);

    alert("Gracias por visitar la tienda.");
}


mostrarMenu();

