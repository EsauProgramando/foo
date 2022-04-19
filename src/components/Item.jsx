const Item = (props) => {
  const { product } = props;
  return (
    <article className="popular__card">
      <img className="popular__card-img" src={product.img} alt=".." />
      <div className="popular__card-body">
        <h3 className="card__body-title">{product.title}</h3>
        <p className="card__body-desc">{product.desc}</p>
        <span className="card__body-price">$ {product.price}.00</span>
        <div className="card__body-cant">
          <button>+ ADD</button>
        </div>
      </div>
    </article>
  );
};

export default Item;
