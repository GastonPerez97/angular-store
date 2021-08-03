# AngularStore

https://angular-store-tw2.vercel.app/

Aplicación Web de tipo "E-Commerce" que cuenta con las siguientes funcionalidades:
- Gestión de usuarios (persistencia, autenticación y autorización).
- Signup.
- Signin.
- Validación de E-Mail una vez registrado.
- Recupero de contraseña.
- Gestión de productos.
- Visualización de productos.
- Agregar producto al carrito.
- Ver carrito de compras.
- Carga de nuevo producto (solo disponible para administrador).

Esta aplicación no cuenta con un sistema de pago real.

## Tecnologías utilizadas:
- Frontend: Angular, Bootstrap, Firebase.
- [Backend](https://github.com/GastonPerez97/taller-web2-api): NodeJS, Express, MongoDB, Mongoose.

## Detalles relevantes de las funcionalidades:
- Gestión de usuarios:
  * Se utiliza Firebase para la autenticación de usuarios.
  * Firebase es el encargado de la validación de E-Mail, recuperación de contraseña y seguridad de la información del usuario (tal como la contraseña).
  * Validación de datos ingresado por el usuario.
  * No es posible utilizar el mismo mail para registrar múltiples usuarios.

- Gestión de productos:
  * Se utiliza la siguiente API para la gestión de productos: https://github.com/GastonPerez97/taller-web2-api
  * Desde la visualización del producto será posible agregar el mismo al carrito de compras.
  * No es posible agregar al carrito si la sesión no fue iniciada.
  * En la visualización del carrito de compras se muestra el detalle de los productos del pedido
a realizar, pudiendo aumentar o disminuir la cantidad de cada producto o simplemente eliminarlo.
  * Se utiliza el Local Storage para el almacenamiento de los productos agregados al carrito.

## Carga de producto:

Por motivos de seguridad solo el administrador puede cargar nuevos productos.
A continuación se muestra un ejemplo de esta funcionalidad:

https://user-images.githubusercontent.com/58083159/128065468-361c4f0e-8575-42b6-822b-081d48365615.mp4
