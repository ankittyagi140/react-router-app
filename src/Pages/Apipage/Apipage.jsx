import React from 'react';
import axios from 'axios';
import Api from '../../Component/Api/Api'


class ApiPage extends React.Component{

    constructor(Props){
        super(Props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
axios.get("https://jsonplaceholder.typicode.com/users")    
.then(Response=>{
    this.setState({users:Response.data})
    console.log(this.state.users)
})    
.catch(error=>{
    console.log(error);

})

    }
    render(){
        const {users}= this.state;
        return(
            <div className="user-data">
                {
                    users.map(({id,...otherProps})=>{
                        return<Api
                        key={id} {...otherProps}
                        />
                    })
                }
            </div>
        )
    }
}
export default ApiPage;