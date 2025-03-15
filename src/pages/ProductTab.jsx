import Product from "./Product"


function ProductTab(){

   // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>]
    let options = ["hi-tech", "durable", "fast"];
   

    return(
        <>
        {/* <Product tittle="phone" price={30000} features={options}/> */}
        <Product tittle="phone" price={3000} />
        <Product tittle="Laptop" price={40000} />
        <Product tittle="Pen" price={10}/>  
        </>

    );
    
}
export default ProductTab;