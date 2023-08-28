

const Shop = (props) => {

  return (
    <div>
        <div className="Shop__ItemsContainer">
            {props.jewelery.map(current => (
                <div className="Shop__Items" >
                    <div>
                        <img src={current.image} alt="" />
                        <div className="Shop__ItemsTitle">{current.title}</div>
                        <div className="Shop__Cost">${current.price}</div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Shop;