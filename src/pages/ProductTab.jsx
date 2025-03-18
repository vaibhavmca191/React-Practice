import Product from "./Product"


function ProductTab(){

   // let options = [<li>"hi-tech"</li>, <li>"durable"</li>, <li>"fast"</li>]
    // let options = ["hi-tech", "durable", "fast"];
 
        let styles = {
            display: "flex",
            flexwrap: "wrap",
            color : "green",
            justifyContent: "center",
            alignItems: "center"
        
        };

    return(
        <div style={styles}>
        {/* <Product tittle="phone" price={30000} features={options}/> */}
        <Product title="Logitech MX Master"  idx={0}/>
        <Product  title="Apple Pencil (2 nd Gen)" idx={1} />
        <Product title="Zebronics Zeb-transformer" idx={2} />  
        <Product title="Petronics Toad 23" idx={3}/>  
        </div>

    );
    
}
export default ProductTab;