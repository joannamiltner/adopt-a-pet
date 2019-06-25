import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

class List extends Component {

    constructor(props){
        super(props);
        this.state={
            pets: []
        }
    }


        componentDidMount = () => {
            axios.get("/api/pets")
            .then( res =>{
                console.log(res);
                this.setState({pets: res.data.pets});
            })
            .catch( err =>{
                console.log(err);
            });
        }


        
    render(){
        return(
        <div>

            <h3>These pets are looking for a home!</h3>
                <Link to ="/new">Add a pet to the shelter</Link>  
            <h3 className="title">
                <p>Name</p>
                <p>Type</p>
                <p>Action</p>
                </h3>
      
            {this.state.pets.map(pet =>

                    <div key={pet._id} className="pet">
                        <h3>{pet.name}</h3>
                        <h3>{pet.type}</h3>
                        {/* <p>{pet.description}</p> */}
                        <span className="booten">
                        <Link to={`/pet/${pet._id}`}>Details</Link>
                        <Link to={`/edit/${pet._id}`}>Edit</Link>
                        </span>
                    </div>
                )
            }

        </div>
        )
    }
}



export default List