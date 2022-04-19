import logo from "../assets/images/logo.svg";
import iconLupa from "../assets/images/icon-lupa.svg";
import iconCar from "../assets/images/icon-car.svg";
import iconPlay from "../assets/images/icon-play.svg";
import iconStar from "../assets/images/icon-star.svg";

const Header = () => {
  const starArray = [1, 2, 3, 4, 5];
  return (
    <header className="container__header">
      <nav className="nav__bar">
        <div className="logo__name">
          <img src={logo} alt="Nombre Logo" />
          <h2>Foo</h2>
        </div>
        <ul className="nav__items">
          <li>Home</li>
          <li>Menu</li>
          <li>Contact</li>
          <li>Shop</li>
        </ul>
        <div className="search">
          <img className="icon__lupa" src={iconLupa} alt="Icono Lupa" />
          <input type="text" placeholder="Search" />
          <div className="search__car">
            <img src={iconCar} alt="Icono Carrito" />
            <span>2</span>
          </div>
        </div>
      </nav>
      <div className="body__header">
        <h1>
          Fast <span>Food Delivery</span>
        </h1>
        <p>
          Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium
          doloremque laudantium
        </p>
        <div className="body__header-buttons">
          <button className="btn__order">Order Now</button>
          <div className="play__button">
            <button>
              <img src={iconPlay} alt="Icono Play" />
            </button>
            Watch Video
          </div>
        </div>
        <div className="body__header-rating">
          <div className="rating__stars">
            {starArray.map((star) => {
              return <img key={star} src={iconStar} alt="Icono Estrella" />;
            })}
          </div>
          <p>
            5 star rating <span>based on 1788 reviews</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
