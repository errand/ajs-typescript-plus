import Cart from './ts/service/Cart';
import Movie from './ts/domain/Movie';

const movie = new Movie(1, 'Мстюки', false, 'Avengers Assemble', 100, ['фантастика', 'боевик', 'приключения', 'фэнтези'], 137);
const cart = new Cart();
cart.add(movie);
cart.add(movie);
cart.add(movie);
cart.add(movie);
cart.decrease(1);
console.log(cart);
