import React from "react" 

function Box ({boxes}) {
    const cardList = boxes.map((box) => {
    return (
        <div key = {box.id} style ={{backgroundColor: box.bgcolor}}>
            <h2> {box.title} </h2>
            <h3> {box.subtitle} </h3>
            <hr/>
            <h4> {box.description}</h4>
        </div>
    )
});
return (
    <>
    {cardList}
    </>
)
}

export default Box
