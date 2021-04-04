import React from 'react'
import CustomButton from '../../Component/Custombutton/Custombutton';
import InputForm from '../../Component/Inputform/Inputform';
import './Todo.css'

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todoitems: "",
            toggle: false,
            items: [],

        }
    }
    ChangeHandler = (event) => {
        this.setState({ todoitems: event.target.value })
    }
    SubmitHandler = () => {
        const { todoitems, items } = this.state
        this.setState({ toggle: true })
        this.setState({ items: [...items, todoitems] })
        this.setState({ todoitems: "" })
    }
    handleDelete=(index)=>{
        const newItems =[...this.state.items];
        newItems.splice(index,1);
        this.setState({items:newItems});

    }
    render() {
        return (
            <div className="main-div">
                <h1>
                    "This is To-Do list"
                </h1>
                <div className="todo-list">
                    <InputForm type="text" name="todoitems" value={this.state.todoitems} changeHandler={this.ChangeHandler} />
                    <CustomButton className="button" type="submit" onClick={this.SubmitHandler}>ADD </CustomButton>
                </div>
                {
                    this.state.toggle ?
                        <div className="todo-items">
                            {
                                this.state.items.map((item, index) =>
                                    (<li onClick={()=>this.handleDelete(index)}>{item}</li>)
                                )
                            }

                        </div> : <h2>Add an item</h2>
                }
            </div>
        )
    }
}
export default Todo;
