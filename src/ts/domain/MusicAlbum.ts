import IBuyable from './iBuyable';

export default class MusicAlbum implements IBuyable {
    readonly id: number;
    readonly name: string;
    readonly author: string;
    readonly single: boolean,
    readonly price: number;
    readonly pages: number;

    constructor(id: number, name: string, author: string, single: boolean, price: number, pages: number) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.single = single;
        this.price = price;
        this.pages = pages;
    }
}
