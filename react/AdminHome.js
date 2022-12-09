import React from 'react';

const AdminHome = (props) => {
    const [students, setStudents] = useState(props.students);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('/students');
            setStudents(result.data);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Admin Home</h1>
            <table>
                <thead>
                    <tr>
                        <th>Room Number</th>
                        <th>Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.rollNumber}>
                            <td>{student.roomNumber}</td>
                            <td>{student.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminHome;