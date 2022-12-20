import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Room = props => (
    <tr>
        <td>{props.room.roomno}</td>
        <td>{props.room.blockno}</td>
        <td>{props.room.capacity}</td>
        <td>{props.room.status}</td>
        <td>
            <Link to={"/edit/"+props.room._id}>edit</Link> | <a href="#" onClick={() => { props.deleteRoom(props.room._id) }}>delete</a>
        </td>
    </tr>
)

export default class RoomsList extends Component {
    constructor(props) {
        super(props);

        this.deleteRoom = this.deleteRoom.bind(this)

        this.state = {rooms: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rooms/')
            .then(response => {
                this.setState({ rooms: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteRoom(id) {
        axios.delete('http://localhost:5000/rooms/'+id)
            .then(response => { console.log(response.data)});

        this.setState({
            rooms: this.state.rooms.filter(el => el._id !== id)
        })
    }

    roomList() {
        return this.state.rooms.map(currentroom => {
            return <Room room={currentroom} deleteRoom={this.deleteRoom} key={currentroom._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Rooms</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Roomno</th>
                            <th>Blockno</th>
                            <th>Capacity</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.roomList() }
                    </tbody>
                </table>
            </div>
        )
    }
} 