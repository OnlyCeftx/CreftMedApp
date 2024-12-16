export default function ListAppointments({
    appointments,
    onScheduleAppointment,
}) {
    return (
        <div>
            {appointments && appointments.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Cita</th>
                            <th>Paciente</th>
                            <th>Fecha de creación</th>
                            <th>Fecha Asignada</th>
                            <th>Hora Asignada</th>
                            <th>Estado</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((appointment, index) => (
                            <tr key={index}>
                                <td>{appointment.id}</td>

                                <td>{appointment.patient?.fullname}</td>

                                <td>
                                    {new Date(
                                        appointment.created_at
                                    ).toLocaleString()}
                                </td>

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

                                <td>
                                    {appointment.status == "pending" ? (
                                        <button
                                            className="rounded p-2 bg-blue-500 text-white ms-2"
                                            onClick={() =>
                                                onScheduleAppointment(
                                                    appointment
                                                )
                                            }
                                        >
                                            Agendar
                                        </button>
                                    ) : (
                                        <button
                                            className="rounded p-2 bg-blue-500 text-white ms-2"
                                            onClick={() =>
                                                onScheduleAppointment(
                                                    appointment
                                                )
                                            }
                                        >
                                            Reagendar
                                        </button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No han solicitado agendar alguna cita.</p>
            )}
        </div>
    );
}
