import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

export class Details extends Component{

    constructor(props){
        super(props);
        this.state ={
            pet:{}
        }
    }

    componentDidMount=() =>{
        console.log(this.props.match.params._id);
        axios.get(`/api/pets/${this.props.match.params._id}`)
        .then(res =>{
            this.setState({pet: res.data.pet});
        })
        .catch(err =>{
            console.log(err);
        });
    }

    delete=(_id) =>{
        axios.delete(`/api/pets/${this.props.match.params._id}`)
        .then(res =>{
            console.log(res);
            this.props.history.push("/");
        })
        .catch(err=>{
            console.log(_id);
        });
    }

    render(){
        return(
            <div className="details">
            
                <Link to ="/">Home</Link>
                <h3>Details about <span className="para">{this.state.pet.name}</span></h3>
                <h3>Pet type:</h3>
                <p>{this.state.pet.type}</p>
                <h3>Description:</h3>
                <p>{this.state.pet.description}</p>
                <h3>Skills (optional):</h3>
                <p>{this.state.pet.skills1}</p>
                <p>{this.state.pet.skills2}</p>
                <p>{this.state.pet.skills3}</p>
                <h1>{this.state.pet.likes}</h1>

                <button onClick className="bbooten">Like this pet</button>
                <button onClick ={this.delete} className="bbooten">Adopt this pet!</button>

            </div>
        )
    }
}

export default Details