import IBuyable from './iBuyable';

export default class Book implements IBuyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly single: boolean,
        readonly author: string,
        readonly price: number,
        readonly pages: number,
    ) {}
}
