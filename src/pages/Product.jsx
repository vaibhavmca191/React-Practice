import "./Product.css"; 

 function Product({tittle,price=1})
{
    // console.log(features);
//  const list = features.map((feature)=><li>{feature}</li>)
    let isDiscount = price> 30000 ? "5%" : "";
    let styles = {backgroundColor : price > 30000 ? "pink" : ""};
  return(
      
        <div className="Product" style={styles}>
         <h4>{tittle}</h4>
         <p>Price: {price} </p>
         <p>{isDiscount}</p>
         </div>    
      
    );
}
export default Product;