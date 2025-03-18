export default function Price({oldPrice, newPrice}){
    let oldstyle={
        textDecorationLine: "line-through",
    };
    let newstyles={
        fontWeight: "bold",
    };
    let styles={
        backgroundColor:"#e0c367",
        height: "53px",
        width: "250px",
        borderBottomLeftRadius: "25px",
        borderBottomRightRadius: "25px",


    }
    return(
        <div style={styles}>
            <span style={oldstyle}>{oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newstyles}>{newPrice}</span>

        </div>
    );
}