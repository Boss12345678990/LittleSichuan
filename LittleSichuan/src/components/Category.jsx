
const Category = ({title, chineseTitle, food, type, handleopen}) => {
    
    return (
        <section className="category" id={type.replace("-", " ").toLowerCase()}>
        <h2>
            <span className="store-icon"></span>
            {title}
            <span style={{ color: "#d32f2f", marginLeft: "10px" }}>{chineseTitle}</span>
        </h2>
        <div className="product-grid2">
            {food.filter((product) => product.type === type).map((item, index) => (
            <div className="product-card2" onClick={() => handleopen(item)} key={index}>
                <img src={`./src/assets/${item.photo}.jpeg`} alt={item.name} />
                <div className="product-detail2">
                <div className="product-name">
                    <h3>{item.name}</h3>
                    <p style={{ color: "#d32f2f" }}>{item.chinese}</p>
                </div>
                <div className="product-price">
                    <h3>${parseFloat(item.price).toFixed(2)}</h3>
                </div>
                </div>
            </div>
            ))}
        </div>
    </section>
    )
}

export default Category;