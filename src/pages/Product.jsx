import "./Product.css"; 
import Price from "./Price";

 function Product({title, idx})
{
   let oldPrices = ["12,495", "11,900", "1,599", "599"];
   let newPrices = ["8,495", "9,900", "599", "399"];
   let description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["instutive surface", "designed for ipad pro"],
    ["designed for ipad pro", "instutive surface"],
    ["wireless","optical orientation"],
   ];


  return(
      
        <div className="Product" >
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <p>{description[idx][2]}</p>
            <p>{description[idx][3]}</p>
            
          <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
         </div>    
      
    );
}
export default Product;