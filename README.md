# Prueba tecnica Konecta cloud

## Para arrancar los servicios
La prueba consta de 2 partes un cliente y un servidor, se devera realizar 'npm run start' en cada caso.

## Navegacion
Se iniciara con un login en el cual se podra tanto registrarse como logearse. En caso de registrarse como admin, marcar el checkbox.

### Login admin
En caso de loguearse como admin iras a /admin. Aqui podras ver los productos disponibles, junto con su información completa.
- Borrar: Para borrar un registro, solo es necesario pulsar en el boton 'delete' del mismo.
- Actualizar: Para poder actualizar un registro copiar el id en la primera linea de la tabla destinada a introducir datos (esto autocompletara el resto de valores, para poder modificarlos), finalmente pulsar el boton 'update'. No se puede modificar ni id, ni fecha de creación.
- Añadir: Para añadir un nuevo producto solo sera necesario rellenar en la linea de arriba de la tabla destinada a ello. Finalmente pulsar boton 'add'. No se permite o se ignorara, la introduccion de id y fecha de creación (son valores autogenerados).

### Login no admin
Si el usuario que se loguea no es admin sera redirecionado a la pagina de compras (sales).

### Pagina de compras(sales)
Aqui se podran comprr productos. Para ello solo sera necesario decir la cantidad que se quiere en 'amount' y posteriormente pulsar en comprar. No esta permitido cantidades negativas, ni 0 en tal caso se devolverar un mensaje de error.
En caso de quedarse sin estoy o que este sea insuficiente tambie seras informado.

### Pagina direct
En esta pagina se realizan 2 queries directas donde se devuelve el producto mas vendido, asi como el producto con mas stock
