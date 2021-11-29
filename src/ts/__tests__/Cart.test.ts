import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty',()=>{
    const cart = new Cart();
    expect(cart.items.length).toBe(0);}
);

test('Should be one item in the Cart',()=>{
    const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const cart = new Cart();
    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].name).toBe('Мстюки');
    }
);

test('Sum should be 110',()=>{
    const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const movie2 = new Movie(2, 'Мстюки', 'Avengers Assemble', 10, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const cart = new Cart();
    cart.add(movie);
    cart.add(movie2);
    expect(cart.getTotalCost()).toBe(110);
    }
);

test('Sum with Discount should be 90',()=>{
    const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const cart = new Cart();
    cart.add(movie);
    expect(cart.getDiscountCost(10)).toBe(90);
    }
);

test('Cart should be empty after item delete',()=>{
    const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
    const cart = new Cart();
    cart.add(movie);
    cart.remove(1);
    expect(cart.items.length).toBe(0);
    }
);
