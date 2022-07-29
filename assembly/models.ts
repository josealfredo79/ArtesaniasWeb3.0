import { context, PersistentVector, u128 } from "near-sdk-as";
@nearBindgen
export class Artesania {
  IdArtesania: string;
  nombre: string;
  descripcion:string;
  ArtesanOwner: string;
  imagen: string;
  archivo: string;
  precioventa: u128;
  
  constructor(IdArtesania: string, nombre: string, descripcion: string, imagen: string, archivo: string, precioventa: u128) {
    
    this.ArtesanOwner = context.sender;
    this.IdArtesania = IdArtesania;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.archivo = archivo;
    this.precioventa = precioventa;
  }
}

@nearBindgen
export class Artesano {
    usuario: string;
    constructor() {
        this.usuario = context.sender;
    }
}

export const allArtesanias = new PersistentVector<Artesania>("A")
export const allArtesanos = new PersistentVector<Artesano>("A")
export const ONE_NEAR = u128.from('10000000000000000')