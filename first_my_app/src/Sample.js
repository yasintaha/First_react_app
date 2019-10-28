import React,{Component} from 'react'

// function UserList(){
//     return (
//         <div>working</div>
//     )
// }

let list = [
    {
        'name':'xyz',
        'lname':'abc',
    },
    {
        'name':'abc123',
        'lname':'uhk'
    }
]

class UserList extends Component{
    render(){
        return(
            <div>
                <h1>working</h1>
                {list.map((val,index) => {
                   return (
                   <div>    
                    <h2>{index}</h2>
                    <h4>{val.name}</h4>
                   </div>
                   )
                })}
            </div>

        )
    }
}
export default UserList