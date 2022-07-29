import { context, logging, ContractPromiseBatch, u128 } from 'near-sdk-as';
import { Artesania, allArtesanias, Artesano, allArtesanos, ONE_NEAR } from './models'

const ArtesanOwner = context.sender;
const allArtesaniasIndex = allArtesanias.length;
const allArtesanosIndex = allArtesanos.length;

// Crea  a nueva instancia de una artesania y la almacena sobre  PersistentVector
export function uploadArtesania(IdArtesania: string, nombre: string, descripcion: string, imagen: string, archivo: string, precioventa: u128): Artesania {
    const newArtesaniaUpload = new Artesania(IdArtesania, nombre, descripcion, imagen, archivo, precioventa);
    allArtesanias.push(newArtesaniaUpload);
    logging.log('Nueva artesania publicada: ' + newArtesaniaUpload.nombre)
     addArtesano();
    return newArtesaniaUpload;
}

// Adds a nuevo artesano sobre allArtesanos PersistentVector
export function addArtesano(): Artesano {
    const data = new Array<Artesano>(allArtesanosIndex) 
    let exists = false;
     const artesano = new Artesano()
    for(let i = 0; i < allArtesanosIndex; i++) {
        data[i] = allArtesanos[i];
    }
    for(let x = 0; x < data.length; x++) {
        if(context.sender == data[x].usuario) {
             logging.log('Este usuario es realmente un artesano!')
             exists = true;
            break
        }
    }
    if(exists == false) {
        logging.log('El usuario no es Artesano, Agregarlo ahora')
        allArtesanos.push(artesano)
        return artesano
    }
    return artesano
}

// Returns todas las artesanias on the PersistentVector
export function getArtesanias(): Artesania[] {
    const data = new Array<Artesania>(allArtesaniasIndex);
    for(let i = 0; i < allArtesaniasIndex; i++) {
        data[i] = allArtesanias[i]
    }
    return data;
}

// Retorna a una artesania   (si existe)
export function getArtesania(artesaniaIndex: i32): Artesania {
    if(allArtesanias.length < artesaniaIndex) {
        logging.log('La artesania no existe')
    }
    return allArtesanias[artesaniaIndex]
}

// Usado para validar en testeo para borrar deleteartesanias funcion
export function artesaniasLen(): number {
    return allArtesanias.length;
}

// Vacia el PersistentVector para borrar las artesanias
export function deleteArtesanias(): void {
    while(allArtesanias.length > 0) {
        allArtesanias.pop();
    }
}

// Borra una artesania (si existe) basado en la posicion de la artesania PersistentVector
export function deleteArtesania(artesaniaIndex: i32): bool {
    if(allArtesanias.length < artesaniaIndex) {
        logging.log('Esta artesania no existe')
        return false
    }
    allArtesanias.swap_remove(artesaniaIndex);
    logging.log('La artesania ha sido borrada!');
    return true
}

// Permite a un usuario cambiar la propiedad de una artesania en caso de que sea necesario
export function changeArtesaniasOwner(artesaniaIndex: i32): bool {
    if(allArtesanias.length < artesaniaIndex) {
         logging.log('Esta artesania no existe')
         return false;
    } else if(allArtesanias[artesaniaIndex].ArtesanOwner == context.sender) {
            logging.log('Este usuario ya posee esta artesania.')
            return false;
        }
    else {
        allArtesanias[artesaniaIndex].ArtesanOwner = context.sender;
        logging.log('Intercambio de propiedad de artesania!')
        return true;
    }
}

// Retorna el dueño del contrato
export function getContratoOwner(): string {
    return ArtesanOwner;
}

// Retorna todos los artesanos
export function getArtesanos(): Artesano[] {
    const data = new Array<Artesano>(allArtesanosIndex);
    for(let i = 0; i < allArtesanosIndex; i++) {
        data[i] = allArtesanos[i]
    }
    return data;
}

// Usado para tester la  función  deleteArtesanos 
export function getArtesanosLen(): number {
    return allArtesanos.length;
}
// Checa si un artesano existe basado en su usuario, para hacerlo mas facil la busqueda
export function findArtesano(ArtesanoUsuario: String):bool {
    const data = new Array<Artesano>(allArtesanosIndex);
    if(allArtesanosIndex <= 0) {
        logging.log("No hay artesanos ahora")
        return false;
    } else {
        for(let i = 0; i < allArtesanosIndex; i++) {
            data[i] = allArtesanos[i]
            if(data[i].usuario == ArtesanoUsuario) {
                logging.log('Artesano ' + ArtesanoUsuario + ' fue encontrado!')
                return true
            }
            break
        }
        logging.log('Este artesano no existe.')
        return false;
    }
}
// Eliminar todos  allArtesanos PersistentVector
export function deleteArtesanos(): void {
    while(allArtesanos.length > 0) {
        allArtesanos.pop()
    }
    logging.log(
        'Se ha vaciado la lista de contributors'
    )
}
// Coloca al usuario para hacer una donacion al dueño de la artesania 
export function makeDonacion(ArtesanoOwnerIndex: i32): bool {
    const data = new  Array<Artesania>(allArtesaniasIndex);
    if(ArtesanoOwnerIndex > allArtesaniasIndex) {
        logging.log('El artesano no/ArtesaniaOwner existe.')
        return false
    } else {
         assert(context.attachedDeposit > ONE_NEAR, 'Monto a donar'); 
        return true

    }
   }

// Permite al usuario realizar una donacion
export function donateToProyecto(): void {
    assert(context.attachedDeposit > ONE_NEAR, 'Tu necesitas depositar algun Near.')
    logging.log('Gracias por su contribucion')
}
