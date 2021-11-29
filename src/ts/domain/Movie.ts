import IBuyable from './iBuyable';

/** @implements {IBuyable} */
export default class Movie implements IBuyable {
    constructor(
        /** @readonly */
        readonly id: number,
        readonly name: string,
        readonly single: boolean,
        readonly slogan: string,
        readonly price: number,
        readonly tags: string[],
        readonly duration: number,
    ) {}
}
