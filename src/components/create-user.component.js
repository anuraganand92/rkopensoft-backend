import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeRollno = this.onChangeRollno.bind(this);
        this.onChangeContactno = this.onChangeContactno.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeBlockno = this.onChangeBlockno.bind(this);
        this.onChangeRoomno = this.onChangeRoomno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            rollno: '',
            contactno: '',
            email: '',
            password: '',
            blockno: '',
            roomno: '',
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeRollno(e) {
        this.setState({
            rollno: e.target.value
        });
    }

    onChangeContactno(e) {
        this.setState({
            contactno: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeBlockno(e) {
        this.setState({
            blockno: e.target.value
        });
    }

    onChangeRoomno(e) {
        this.setState({
            roomno: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            rollno: this.state.rollno,
            contactno: this.state.contactno,
            email: this.state.email,
            blockno: this.state.blockno,
            roomno: this.state.roomno,
        }

        console.log(user); 

        axios.post('http://localhost:5000/users/add', user).then(res => console.log(res.data)); 

        this.setState({ 
            name: '',
            rollno: '',
            contactno: '',
            email: '',
            blockno: '',
            roomno: '',
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Rollno: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.rollno}
                                onChange={this.onChangeRollno}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Contactno: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.contactno}
                                onChange={this.onChangeContactno}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Email: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Blockno: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.blockno}
                                onChange={this.onChangeBlockno}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Roomno: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.roomno}
                                onChange={this.onChangeRoomno}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    } 
}