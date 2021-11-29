import Cart from './ts/service/Cart';
import Movie from './ts/domain/Movie';

const movie = new Movie(1, 'Мстюки', 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
const cart = new Cart();
cart.add(movie);
cart.remove(1);
console.log(cart);
