import {Artesania, allArtesanias, allArtesanos, Artesano} from "../models"
import { getArtesanias, uploadArtesania, deleteArtesanias, artesaniasLen, getArtesanos, findArtesano, deleteArtesanos, getArtesanosLen } from "..";
import { context, Context, logging, u128 } from "near-sdk-as";

const IdArtesania = '001'  
const nombre = 'Sombrero'
const descripcion = 'Sombrero de palma'
const imagen ='https://www.istockphoto.com/es/foto/sombrero-hecho-de-hojas-de-palma-gm500937574-81078667'
const archivo = 'https://ipfs.io/ipfs/bafybeia5khhhukn672acm6sfredqdereor7n7zsoobvrwcqk7rmn6ihffi'
const precioventa = u128.from('1000000000000000000000000')
const artesanousuario = 'Don Jose'

let newArtesania = new Artesania(IdArtesania, nombre, descripcion, imagen, archivo, precioventa);

const allArtesaniasIndex = allArtesanias.length;
const allArtesanosIndex = allArtesanos.length;

const contsData = new Array<Artesano>(allArtesanosIndex);
for(let x = 0; x < allArtesanosIndex; x++) {
    contsData[x] = allArtesanos[x]
}

const data = new Array<Artesania>(allArtesaniasIndex);
for(let i=0; i < allArtesaniasIndex; i++) {
    data[i] = allArtesanias[i]
}

describe("uploadArtesania", () => {
    it('podria retornar "newArtesaniaUpload"', () => {
        expect(uploadArtesania('001', 'Sombrero','Sombrero de palma', 'https://www.istockphoto.com/es/foto/sombrero-hecho-de-hojas-de-palma-gm500937574-81078667', 'https://ipfs.io/ipfs/bafybeia5khhhukn672acm6sfredqdereor7n7zsoobvrwcqk7rmn6ihffi', precioventa)).toStrictEqual(newArtesania);
    })
})

describe("getArtesanias", () => {
    it('podria retornar todas las artesanias', () => {
        expect(getArtesanias()).toStrictEqual(data)
    })
})

describe("getArtesanos", () => {
    it('podria retornar todos los artesanos', () => {
        expect(getArtesanos()).toStrictEqual(contsData)
    })
})

describe("findArtesano", () => {

    it('Podria ser verdadero', () => {
        expect(findArtesano(artesanousuario)).toBeFalsy()
    })
})

describe("deleteArtesanos", () => {
    it("Podria borrar todos los artesanos", () => {
        deleteArtesanos()
        expect(getArtesanosLen()).toBe(0, "La lista de artesanos esta vacia.")
    })
})

describe("deleteArtesanias", () => {
    it('Podrias borrar artesanias', () => {
        deleteArtesanias()
        expect(artesaniasLen()).toBe(0, 'Artesanias podrian ser borradas!')
    })
})