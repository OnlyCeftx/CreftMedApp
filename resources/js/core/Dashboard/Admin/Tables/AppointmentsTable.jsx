export default function ListAppointments({ appointments }) {
    return (
        <div>
            {appointments && appointments.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Cita</th>
                            <th>Doctor</th>
                            <th>Paciente</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.id}</td>
                                <td>{appointment.doctor?.fullname}</td>
                                <td>{appointment.patient?.fullname}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No has agendado ninguna cita.</p>
            )}
        </div>
    );
}
