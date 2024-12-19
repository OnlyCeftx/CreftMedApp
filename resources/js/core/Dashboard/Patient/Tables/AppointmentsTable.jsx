export default function ListAppointments({ appointments }) {
    return (
        <div className="content-table">
            {appointments && appointments.length > 0 ? (
                <table className="w-full">
                    <thead>
                        <tr className="cabecera">
                            <th>Cita</th>
                            <th>Doctor</th>
                            <th>Fecha de creación</th>
                            <th>Fecha Asignada</th>
                            <th>Hora Asignada</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index} className="contenido">
                                <td>{appointment.id}</td>
                                <td>{appointment.doctor?.fullname}</td>
                                <td>{new Date(
                                    appointment.created_at
                                ).toLocaleString()}</td>
                                <td>
                                    {appointment.hour
                                        ? appointment.date
                                        : "Sin Asignar"}
                                </td>
                                <td>
                                    {appointment.date
                                        ? appointment.hour
                                        : "Sin Asignar"}
                                </td>
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
