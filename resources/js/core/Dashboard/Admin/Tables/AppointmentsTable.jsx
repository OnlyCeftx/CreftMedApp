export default function ListAppointments({ appointments }) {
    return (
        <div  className="content-table">
            {appointments && appointments.length > 0 ? (
                <table className="w-full">
                    <thead>
                        <tr className="cabecera">
                            <th>Cita</th>
                            <th>Doctor</th>
                            <th>Paciente</th>
                            <th>Fecha</th>
                            <th>Estado</th>
                        </tr>
                    </thead>

                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index} className="contenido">
                                <td>{appointment.id}</td>
                                <td>{appointment.doctor?.fullname}</td>
                                <td>{appointment.patient?.fullname}</td>
                                <td>{appointment.date || "Sin Agenda"}</td>
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
