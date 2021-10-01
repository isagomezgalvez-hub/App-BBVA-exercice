# App-BBVA-exercice
Ejercicio Técnico para proceso de selección.

La aplicación consta de 3 rutas:
- auth/login: Muestra la pantalla de login y es la primera pantalla que encontramos al acceder a la aplicación. Se muestra esta pantalla por defecto cuando un usuario no está logueado. 
  - email: user@userdemo.com
  - password: userdemo
- auth/register: Muestra una pantalla de registro donde se puede registrar un nuevo usuario si no se quiere acceder con el usuario proporcionado como demo.
- / : Muestra el dashboard de usuario. Esta ruta sólo está disponible para usuarios autenticados, si intentas acceder a el sin registro se te redireccionará a la pantalla de login. Dentro de este dashboard encontrarás un contador y un botón logout para salir de la app.

## Tecnologías aplicadas
El proyecto contiene las siguientes librerias:
- React
- Redux
- Redux-thunk
- Firebase
- Sweetalert2
- Validator


## Backend
Para rodar esta aplicación obteniendo datos de un back-end se ha utilizado servicio de Firebase.

## Arrancar la aplicación
Para arrancar la aplicación

```bash
npm i // Instala las dependencias
npm run start // Arranca la aplicación para el desarrollo
```


