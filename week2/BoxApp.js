import react from "react"
import BoxCard from './BoxCard.js'
import './BoxStyle'

function  BoxApp() {
    return (
        <div className= "flexbox">
        <BoxCard 
             title= 'Title 1'
             subtitle= 'Subtitle 1'
             descritption= 'Hello World 1'
             bgcolor= '#ff0001'
             />

        <BoxCard 
             title= 'Title 2'
             subtitle= 'Subtitle 2'
             descritption= 'Hello World 2'
             bgcolor= '#ffa500'
             />

        <BoxCard 
             title= 'Title 3'
             subtitle= 'Subtitle 3'
             descritption= 'Hello World 3'
             bgcolor= '#fffe01'
             />

        <BoxCard 
             title= 'Title 4'
             subtitle= 'Subtitle 4'
             descritption= 'Hello World 4'
             bgcolor= '#008000'
             />
        </div>
    )
}

export default BoxApp
