import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

import AppointmentsTable from "./Tables/AppointmentsTable";
import Appoint_tab from "./Functions/Appoint_tab";
import UpdateDataDoctor from "./Functions/UpdateDataDoctor";
import DoctorServiceForm from "./Functions/DoctorServiceForm";
import ServicesTable from "./Tables/ServicesTable";

export default function Doctor({ specialties, locations }) {
    const [isLoadingDoctor, setIsLoadingDoctor] = useState(false);
    const [isLoadingAppointments, setIsLoadingAppointments] = useState(false);

    const [doctor, setDoctor] = useState({});
    const [appointments, setAppointments] = useState([]);
    const [selectedAppointment, setSelectedAppointment] = useState(null);

    const fetchDataDoctor = async () => {
        setIsLoadingDoctor(true);
        try {
            const response = await axios.get("/DoctorData");
            setDoctor(response.data.doctor);
        } catch (error) {
            console.error("Error", error);
            toast.error("Error al cargar datos del Doctor");
        } finally {
            setIsLoadingDoctor(false);
        }
    };

    const fetchAppointments = async () => {
        setIsLoadingAppointments(true);

        try {
            const response = await axios.get("/get/Appointments");
            setAppointments(response.data);
        } catch (error) {
            console.error("Error al cargar citas", error);
            toast.error("Error al cargar citas");
        } finally {
            setIsLoadingAppointments(false);
        }
    };

    useEffect(() => {
        fetchDataDoctor();
        fetchAppointments();
    }, []);

    const handleScheduleAppointment = (appointment) => {
        setSelectedAppointment(appointment);
    };
    const handleCloseAppointmentTab = () => {
        setSelectedAppointment(null);
    };

    return (
        <div>
            {isLoadingDoctor ? (
                <>Cargando datos del doctor...</>
            ) : (
                <>
                    <h3>Panel de Doctor</h3>

                    <p>
                        Nombre Completo{" "}
                        <span className="font-bold">
                            {doctor.main && doctor.main.fullname
                                ? doctor.main.fullname
                                : "Sin Asignar"}{" "}
                        </span>
                        <br />
                        Status{" "}
                        <span className="font-bold">
                            {doctor.main && doctor.main.status
                                ? "Activo"
                                : "Desactivado"}{" "}
                        </span>
                        Especialidad{" "}
                        <span className="font-bold">
                            {doctor.specialty && doctor.specialty.title
                                ? doctor.specialty.title
                                : "Sin Asignar"}{" "}
                        </span>
                        Ubicación{" "}
                        <span className="font-bold">
                            {doctor.location && doctor.location.title
                                ? doctor.location.title
                                : "Sin Asignar"}{" "}
                        </span>
                        Telefono{" "}
                        <span className="font-bold">
                            {doctor.main && doctor.main.phone
                                ? doctor.main.phone
                                : "Sin Asignar"}{" "}
                        </span>
                    </p>

                    <p>Aquí puedes ver tus citas y pacientes.</p>

                    {doctor.main && (
                        <UpdateDataDoctor
                            doctor={doctor.main}
                            specialties={specialties}
                            locations={locations}
                            onUpdate={fetchDataDoctor}
                        />
                    )}
                    {doctor.main && (
                        <DoctorServiceForm
                            doctor={doctor.main}
                            onUpdate={fetchDataDoctor}
                        />
                    )}

                    {doctor.services && (
                        <ServicesTable services={doctor.services} />
                    )}
                </>
            )}

            {isLoadingAppointments ? (
                <>Cargando citas...</>
            ) : (
                <AppointmentsTable
                    appointments={appointments}
                    onScheduleAppointment={handleScheduleAppointment}
                />
            )}

            {selectedAppointment && (
                <Appoint_tab
                    selectedAppointment={selectedAppointment}
                    onClose={handleCloseAppointmentTab}
                    onUpdate={fetchAppointments}
                />
            )}
        </div>
    );
}
