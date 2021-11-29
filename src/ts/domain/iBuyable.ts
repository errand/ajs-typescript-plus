interface IBuyable {
    /** @readonly */
    readonly id: number,
    readonly name: string,
    readonly price: number,
    readonly single: boolean,
}

export default IBuyable;
