import IBuyable from '../domain/iBuyable';

export default class Cart {
    /** @private */
    private _items: IBuyable[] = [];

    /**
     * Adds item to the Cart
     * @param {interface} item - An interface param.
     */
    add(item: IBuyable): void {
        this._items.push(item);
    }
    /**
     * Counts total sum in the Cart
     * @returns {number}
     */
    getTotalCost(): number {
        return this._items.reduce((a, b) => a + b.price, 0);
    }

    /**
     * Counts total sum in the Cart with Discount
     * @param {number} number
     * @returns {number}
     */
    getDiscountCost(discount: number): number {
        return this.getTotalCost() - ((this.getTotalCost() * discount) / 100);
    }

    /**
     * Deletes items from the Cart by id
     * @param {number} id
     */
    remove(id: number): void {
        this._items.splice(this._items.findIndex(item => {
            return item.id === id;
        }), 1);
    }

    get items(): IBuyable[] {
        return [...this._items];
    }
}
