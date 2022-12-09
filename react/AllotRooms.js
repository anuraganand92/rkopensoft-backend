import React from 'react';

const AllotRooms = (props) => {
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleSubmit = () => {
        // Allot the selected room to the selected student
    }

    return (
        <div>
            <h1>Allot Rooms</h1>
            <div>
                <label>Select Room:</label>
                <select onChange={(event) => setSelectedRoom(event.target.value)}>
                    <option value="" disabled selected>Select a room</option>
                    {props.rooms.map(room => (
                        <option key={room.number} value={room.number}>{room.number}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Select Student:</label>
                <select onChange={(event) => setSelectedStudent(event.target.value)}>
                    <option value="" disabled selected>Select a student</option>
                    {props.students.map(student => (
                        <option key={student.rollNumber} value={student.rollNumber}>{student.name}</option>
                    ))}
                </select>
            </div>
            {selectedStudent && selectedRoom && (
                <div>
                    <p>Student: {selectedStudent.name}</p>
                    <p>Roll Number: {selectedStudent.rollNumber}</p>
                    <p>Contact Number: {selectedStudent.contactNumber}</p>
                    <p>Email Id: {selectedStudent.emailId}</p>
                    <p>New Room Number: {selectedRoom}</p>
                    <button onClick={handleSubmit}>Save</button>
                </div>
            )}
        </div>
    );
}

export default AllotRooms;