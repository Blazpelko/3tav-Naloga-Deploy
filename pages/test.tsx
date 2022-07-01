
const test = ()=>{
    function print(){
        console.log("kurac");
    }
    return(
        <div>
            <button onClick={()=>print()}>test</button>
        </div>
    );
}

export default test;