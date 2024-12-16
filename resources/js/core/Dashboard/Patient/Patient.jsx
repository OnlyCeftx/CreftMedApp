
import SpecialtyList from "./Functions/SpecialtyList";
import AppointmentsTable from "./Tables/AppointmentsTable";

import { useState, useEffect } from "react";


export default function Patient({specialties}) {
    const [appointments, setAppointments] = useState([]);

    const fetchAppointments = async () => {
        try {
            const response = await axios.get("/get/Appointments");
            setAppointments(response.data);
        } catch (error) {
            console.error("Error al cargar citas", error);
            toast.error("Error al cargar citas");
        }
    };

    useEffect(() => {
        fetchAppointments();
    }, []);

    return (
        <>
            <h3>Panel de Paciente</h3>
            <p>Aquí puedes ver tus citas y detalles de salud.</p>
            <AppointmentsTable appointments={appointments} />
            <SpecialtyList
                specialties={specialties}
                onAppointmentCreated={fetchAppointments} // Pasar función de recarga
            />
        </>
    );
}
