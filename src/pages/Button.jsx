function printHello()
{
    console.log("Hello!");
    console.log(event);   
}

function printBye()
{
    console.log("bye!");  
}

function hnadleDbCLick()
{
    console.log("you double clicked!");  
}


export default function Button1() {
    return(
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
               Nam corrupti pariatur quisquam suscipit quo placeat velit 
               neque a veritatis! Cupiditate eos, consequuntur eum quibusdam esse magnam ullam quos asperiores perspiciatis.</p>
               <button onDoubleClick={hnadleDbCLick}>double click me!</button>
        </div>
    )

}