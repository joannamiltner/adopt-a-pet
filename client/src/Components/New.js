import React, {Component} from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

class New extends Component{

        constructor(props){
            super(props);
            this.state={
                newPet:{
                    name: "",
                    type: "",
                    description: "",
                    skills1: "",
                    skills2: "",
                    skills3: ""
                },
                errors: {}
            }
        }


    change=(key, e) =>{
        let p = {...this.state.addPet};
        p[key] = e.target.value;
        this.setState({addPet: p});
    }

    addPet = (e) =>{
        e.preventDefault();
        axios.post("/api/pets", this.state.addPet)
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
                            <h3>Know of a pet needing a home?</h3>

            <form onSubmit={this.addPet}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" onChange={this.change.bind(this, "name")} />
                    {
                        this.state.errors.name ?
                        <p>{this.state.errors.name.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Type:</label>
                    <input type="text" onChange={this.change.bind(this, "type")} />
                    {
                        this.state.errors.type ?
                        <p>{this.state.errors.type.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <input type="text" onChange={this.change.bind(this, "description")} />
                    {
                        this.state.errors.description ?
                        <p>{this.state.errors.description.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Skill 1 (optional):</label>
                    <input type="text" onChange={this.change.bind(this, "skills1")} />
                    {
                        this.state.errors.skills1 ?
                        <p>{this.state.errors.skills1.message}</p>:
                        ""
                    }
                </div>

                <div className="form-group">
                    <label>Skill 2 (optional):</label>
                    <input type="text" onChange={this.change.bind(this, "skills2")} />
                    {
                        this.state.errors.skills2 ?
                        <p>{this.state.errors.skills2.message}</p>:
                        ""
                    }
                </div>


                <div className="form-group">
                    <label>Skill 3 (optional):</label>
                    <input type="text" onChange={this.change.bind(this, "skills3")} />
                    {
                        this.state.errors.skills3 ?
                        <p>{this.state.errors.skills3.message}</p>:
                        ""
                    }
                </div>

                <input type="submit" className="bbooten" value="Add pet" />
                <span className="booten"><Link to ="/">Cancel</Link></span>
                

            </form>
            </div>
        )
    }
}
export default New