import React from "react"



class ToDo4List extends React.Component{
    constructor(props) {
        super(props)
        
}




    
    completeTodo() {
        this.props.completeTodo(this.props.completeTodo(this.props.id));
    }

    deleteTodo() {
        this.props.deleteTodo(this.props.deleteTodo(this.props.id));
    }

    

    render() {
        let styleComplete = {textDecorationLine: 'none'}
        if (this.props.isCompleted){
            styleComplete = {textDecorationLine: 'line-through'}
        }
        return (
            <div className ="todo3Div">
                
               
                    
                    <input type="checkbox"className= "cb2" id={this.props.id} onClick={() => {this.completeTodo()}} checked={this.props.isCompleted}/>
                    <label style={styleComplete} for={this.props.id}> {this.props.text} </label>
                    <button className="btn3" onClick={()=>{this.deleteTodo()}}>x</button>
                    
                
                
                
                    
                <div>
                
                </div>

            </div>
        )
    }
}
export default ToDo4List