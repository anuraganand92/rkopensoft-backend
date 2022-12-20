import React, { Component } from 'react';
import axios from 'axios';

export default class EditRoom extends Component {
    constructor(props) {
        super(props);

        this.onChangeRoomno = this.onChangeRoomno.bind(this);
        this.onChangeBlockno = this.onChangeBlockno.bind(this);
        this.onChangeCapacity = this.onChangeCapacity.bind(this);
        this.onChangeStatus = this.onChangeStatus.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            roomno: '',
            blockno: '',
            capacity: '',
            status: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rooms/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    roomno: response.data.roomno,
                    blockno: response.data.blockno,
                    capacity: response.data.capacity,
                    status: response.data.status
                })   
            })
            .catch(function (error) {
                console.log(error);
            })

    }

    onChangeRoomno(e) {
        this.setState({
            roomno: e.target.value
        });
    }

    onChangeBlockno(e) {
        this.setState({
            blockno: e.target.value
        });
    }

    onChangeCapacity(e) {
        this.setState({
            capacity: e.target.value
        });
    }

    onChangeStatus(e) {
        this.setState({
            status: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const room = {
            roomno: this.state.roomno,
            blockno: this.state.blockno,
            capacity: this.state.capacity,
            status: this.state.status
        }

        console.log(room);

        axios.post('http://localhost:5000/rooms/update/'+this.props.match.params.id, room).then(res => console.log(res.data)); 

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Room</h3>
                <form onSubmit={this.onSubmit}>
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
                        <label>Blockno: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.blockno}
                                onChange={this.onChangeBlockno} 
                                />
                    </div>
                    <div className="form-group">
                        <label>Capacity: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.capacity}
                                onChange={this.onChangeCapacity}
                                />
                    </div>
                    <div className="form-group">
                        <label>Status: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.status}
                                onChange={this.onChangeStatus}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Room" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}