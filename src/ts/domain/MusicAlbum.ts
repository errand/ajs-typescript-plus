import IBuyable from './iBuyable';

export default class MusicAlbum implements IBuyable {
    constructor(
        /** @readonly */
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly single: boolean,
        readonly price: number,
    ) {}
}
