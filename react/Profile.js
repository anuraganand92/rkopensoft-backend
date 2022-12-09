import React from 'react';

const Profile = (props) => {
    const [name, setName] = useState(props.student.name);
    const [rollNumber, setRollNumber] = useState(props.student.rollNumber);
    const [contactNumber, setContactNumber] = useState(props.student.contactNumber);
    const [emailId, setEmailId] = useState(props.student.emailId);
    const [roomNumber, setRoomNumber] = useState(props.student.roomNumber);
    const [editing, setEditing] = useState(false);

    const handleEdit = () => {
        setEditing(true);
    }

    const handleSave = () => {
        // Save changes to the database
        setEditing(false);
    }

    const handleChange = (event) => {
        if (event.target.name === 'contactNumber') {
            setContactNumber(event.target.value);
        }
    }

    return (
        <div>
            <h1>Profile</h1>
            <div>
                <label>Name:</label>
                <p>{name}</p>
            </div>
            <div>
                <label>Roll Number:</label>
                <p>{rollNumber}</p>
            </div>
            <div>
                <label>Contact Number:</label>
                {editing ? (
                    <input
                        type="text"
                        name="contactNumber"
                        value={contactNumber}
                        onChange={handleChange}
                    />
                ) : (
                    <p>{contactNumber}</p>
                )}
            </div>
            <div>
                <label>Email Id:</label>
                <p>{emailId}</p>
            </div>
            <div>
                <label>Room Number:</label>
                <p>{roomNumber}</p>
            </div>
            {editing ? (
                <button onClick={handleSave}>Save</button>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
}

export default Profile;