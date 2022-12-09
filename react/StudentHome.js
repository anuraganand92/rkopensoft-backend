import React from 'react';

const StudentHome = (props) => {
    return (
        <div>
            <h1>Student Homepage</h1>
            <table>
                <thead>
                    <tr>
                        <th>Block</th>
                        <th>Room</th>
                        <th>Student</th>
                    </tr>
                </thead>
                <tbody>
                    {props.students.map(student => (
                        <tr key={student.rollNumber}>
                            <td>{student.blockNumber}</td>
                            <td>{student.roomNumber}</td>
                            <td>{student.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentHome;
