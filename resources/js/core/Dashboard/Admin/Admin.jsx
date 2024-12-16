import DoctorsList from "./Functions/DoctorList";
import AppointmentsTable from "./Tables/AppointmentsTable";

import { useState, useEffect } from "react";

export default function Admin({}) {
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
            <h3>Panel de Administrador</h3>

            <p>Aquí puedes gestionar usuarios y citas.</p>
            <DoctorsList />
            <AppointmentsTable appointments={appointments} />
        </>
    );
}
