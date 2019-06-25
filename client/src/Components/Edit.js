import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

class Edit extends Component{

    constructor(props){
        super(props);
        this.state ={
            pet:{
                name: "",
                type: "",
                description: "",
                skills: ""
            },
            errors: {}
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


    change=(key, e) =>{
        let p = {...this.state.pet};
        p[key] = e.target.value;
        this.setState({pet: p});
    }

    updatePet = (e) =>{
        e.preventDefault();
        axios.put(`/api/pets/${this.state.pet._id}`, this.state.pet)
        .then(res =>{
            if(res.data.errors){
                this.setState({errors:res.data.errors.errors})
            } else{
                this.props.history.push("/");
            }
        });
    }

    render(){
        return(
            <div>
            <form onSubmit={this.updatePet}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" onChange={this.change.bind(this, "name")} value={this.state.pet.name}/>
                    {
                        this.state.errors.name ?
                        <p>{this.state.errors.name.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Type:</label>
                    <input type="text" onChange={this.change.bind(this, "type")} value={this.state.pet.type}/>
                    {
                        this.state.errors.type ?
                        <p>{this.state.errors.type.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" onChange={this.change.bind(this, "description")} value={this.state.pet.description}/>
                    {
                        this.state.errors.description ?
                        <p>{this.state.errors.description.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Skills1:</label>
                    <input type="text" onChange={this.change.bind(this, "skills1")} value={this.state.pet.skills1}/>
                    {
                        this.state.errors.skills1 ?
                        <p>{this.state.errors.skills1.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Skills2:</label>
                    <input type="text" onChange={this.change.bind(this, "skills2")} value={this.state.pet.skills2}/>
                    {
                        this.state.errors.skills2 ?
                        <p>{this.state.errors.skills2.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Skills3:</label>
                    <input type="text" onChange={this.change.bind(this, "skills3")} value={this.state.pet.skills3}/>
                    {
                        this.state.errors.skills3 ?
                        <p>{this.state.errors.skills3.message}</p>:
                        ""
                    }
                </div>


                <input type="submit" className="bbooten" value="Edit pet" />
                <span className="booten"><Link to ="/">Cancel</Link></span>
            </form>
            </div>
        )
    }
}
export default Edit