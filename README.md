# Bienvenido a ArtesaniasWeb3.0 📖
---
ArtesaniasWeb3.0 es un smart contract que parte de la idea que los artesanos son
los productores de las artesanias y deben de recibir regalias por la pieza que se vendio
a un precio mayor. En el estado de Oaxaca en Mexico esto es un problema grave, con el contrato inteligente se debe dar solucion.
En la región de Tlaxiaco, Oaxaca en México hay diferentes artesanos de las comunidades indigenas que realizan obras de arte con la herencia milenaria de sus ancestros.

Las funcionalidades principales del contrato son las siguientes:
* Subir un artesania (además, guarda el usuario de la persona que lo sube como "Artesano").
* Obtener todos las artesanias
* Obtener una artesania especifica.
* Obtener lista de artesanos.
* Eliminar la lista de artesanos.
* Eliminar una artesania en específico.
* Vaciar la lista de artesanos.
* Buscar un artesano por su usuario.

## Cómo utilizar este contrato ❔
---
### Pré-requisitos ❕
1. Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
2. Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando ```yarn --version ```. En caso de no tenerlo, puede instalarlo ejecutando el comando ```sudo npm install -g yarn```
3. Instale las dependencias de yarn ejecutando ```yarn install```
4. Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/)
5. Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute ```near --version```. En caso de no tenerlo, instálelo ejecutando el comando ```sudo npm install -g near-cli``` 

Ya tenemos todo lo que necesitamos para probar nuestro contrato inteligente. Ahora vamos a ejecutarlo en nuestra computadora local

## Instalación 📖🐱‍💻
---
1. Clone el repositorio ```git clone git@github.com:josealfredo79/ArtesaniasWeb3.0.git && cd ArtesaniasWeb3.0```
2. Vamos a iniciar sesión en nuestra wallet que creamos anteriormente: ```near login```
3. Dentro del repositorio, instalemos las dependencias del proyecto ejecutando ```npm install```, tranquilo, esto puede tomar unos segundos.
4. Si quieres desplegar el contrato y probar sus funciones, puedes hacerlo con ```yarn deploy:dev``` esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red. Guárdelo, lo necesitará si quiere probar los métodos del contrato inteligente.
5. Por último, si queremos ejecutar los tests desarrollados, podemos hacerlo ejecutando ```yarn test```
   
## Llamadas al Contrato 
---
Algunos de los metodos que podemos ejecutar son los siguientes
- Cargar una artesania
  ```bash
  near call dev-<tu numero de contrato> uploadArtesania('001', 'Sombrero','Sombrero de palma', 'https://www.istockphoto.com/es/foto/sombrero-hecho-de-hojas-de-palma-gm500937574-81078667', 'https://ipfs.io/ipfs/bafybeia5khhhukn672acm6sfredqdereor7n7zsoobvrwcqk7rmn6ihffi', '10000000000000000')' --accountId <tu_user.testnet>
  ```
- Buscar todas las artesanias 
  ```bash
  near call dev-<tu numero de contrato> getArtesanias --accountId <tu_user.testnet>
  ```
- Buscar una artesanias en especifico
```bash
near call dev-<tu numero de contrato> getArtesania '{"ArtesaniaIndex": i32}' --accountId <tu_user.testnet>
  ```
- Eliminar una artesania
```bash
near call dev-<tu numero de contrato> deleteArtesania '{"artesaniaIndex": i32}' --accountId <tu_user.testnet>
  ```
- Donar al proyecto 
```bash
near call dev<tu numero de contrato> donateToProyecto --accountId <tu_user.testnet> --amount i32
  ```
- Buscar los artesanos
  ```bash
  near call dev-<tu numero de contrato> getArtesanos --accountId <tu_user.testnet>
    ```
- Buscar un artesano por nombre de usuario 
  ```bash
  near call dev-<tu numero de contrato> findArtesano '{"ArtesanoUsuario": "usuario.testnet"}' --accountId <tu_user.testnet>
    ```

## Authors
- [Jose Alfredo Roman Cruz](https://github.com/josealfredo79)
- [Mockup](https://www.figma.com/proto/ifJ4898YH5KVwDVdyI006M/ArtesaniasWeb3.0-(Community)?node-id=104%3A21&starting-point-node-id=656%3A108)
