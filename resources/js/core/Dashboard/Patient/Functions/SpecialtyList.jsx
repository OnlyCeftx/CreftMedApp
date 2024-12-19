import { MdiMenuDown as IconMenuDown } from "@/Icons/menuDown";
import { useState, useEffect } from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Stack from "@mui/material/Stack";
import moment from "moment";

export default function SpecialtyList({ onAppointmentCreated }) {
    const [specialties, setSpecialties] = useState([]);
    const [expandedSpecialty, setExpandedSpecialty] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingAppointment, setLoadingAppointment] = useState({});
    const [showAgenda, setShowAgenda] = useState(null);

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [selectedTime, setSelectedTime] = useState(moment());

    const options = {
        inputNameProp: "date",
        inputIdProp: "date",
        inputPlaceholderProp: "Select Date",
        inputDateFormatProp: {
            day: "numeric",
            month: "long",
            year: "numeric",
        },
        defatulDate: new Date(),
        // defaultDate: selectedAppointment?.date
        //     ? new Date(selectedAppointment?.date)
        //     : new Date(),
    };

    const fetchSpecialties = async () => {
        try {
            const response = await axios.get("/get/Specialties");
            setSpecialties(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Error al cargar citas", error);
            toast.error("Error al cargar citas");
        }
    };

    const handleSpecialtyClick = (specialtyId) => {
        setShowAgenda(null);
        setSelectedDoctor(null);
        if (expandedSpecialty === specialtyId) {
            setExpandedSpecialty(null);
        } else {
            setExpandedSpecialty(specialtyId);
        }
    };

    const handleShowAgenda = (doctorId) => {
        if (showAgenda === doctorId) {
            setShowAgenda(null);
            setSelectedDoctor(null);
        } else {
            setShowAgenda(doctorId);
            setSelectedDoctor(doctorId);
        }
    };
    const handleCloseShowAgenda = (doctorId) => {
        if (showAgenda === doctorId) {
            setShowAgenda(null);
        }
    };

    const handleRequestAppointment = async (doctorId) => {
        try {
            setLoadingAppointment((prev) => ({
                ...prev,
                [doctorId]: true,
            }));
            const response = await axios.post("/patient/new/appointment", {
                doctor_id: doctorId,
            });

            toast.success("Cita solicitada correctamente");
            onAppointmentCreated();
        } catch (error) {
            // Manejar errores
            toast.error(
                error.response?.data?.message || "Error al solicitar cita"
            );
            console.error(error);
        } finally {
            // Restaurar estado de carga
            setLoadingAppointment((prev) => ({
                ...prev,
                [doctorId]: false,
            }));
        }
    };

    const filteredSpecialties = specialties.filter((specialty) =>
        specialty.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSubmit = () => {
        if (!selectedDate || !selectedTime) {
            toast.error("Por favor, selecciona fecha y hora");
            return;
        }
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const formattedTime = selectedTime.format("hh:mm A");
        router.post(
            `/patient/new/appointment`,
            {
                doctor_id: selectedDoctor,
                date: formattedDate,
                hour: formattedTime,
            },
            {
                onSuccess: () => {
                    toast.success("Cita agendada exitosamente");
                    onUpdate();
                    onClose();
                },
                onError: (errors) => {
                    console.error("Error al agendar cita:", errors);
                },
            }
        );
    };

    useEffect(() => {
        fetchSpecialties();
    }, []);
    return (
        <div>
            <p className="text-3xl mb-2">Especialidades</p>
            <input
                type="text"
                placeholder="Buscar especialidades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4 text-black w-full rounded border-zinc-300 shadow-lg"
            />
            {filteredSpecialties && filteredSpecialties.length > 0 ? (
                filteredSpecialties.map((specialty, index) => (
                    <div key={index}>
                        <button
                            className="flex text-white bg-gray-500 rounded px-2 py-2 mb-2"
                            onClick={() => handleSpecialtyClick(specialty.id)}
                            style={{ cursor: "pointer" }} // Cambia el cursor al pasar sobre el título
                        >
                            {specialty.title}

                            <span className="counter bg-white text-gray-800 px-2 ms-2">
                                {
                                    specialty.doctors.filter(
                                        (doctor) => doctor.status !== 0
                                    ).length
                                }
                            </span>
                            <span>
                                <IconMenuDown
                                    icon="mdi:menu-down"
                                    width="24"
                                    height="24"
                                />
                            </span>
                        </button>
                        {expandedSpecialty === specialty.id && (
                            <div>
                                {(() => {
                                    const availableDoctors =
                                        specialty.doctors.length > 0
                                            ? specialty.doctors.filter(
                                                  (doctor) =>
                                                      doctor.status === 1
                                              )
                                            : [];

                                    return availableDoctors.length > 0 ? (
                                        availableDoctors.map(
                                            (doctor, doctorIndex) => (
                                                <div
                                                    className="fs-3x ms-4 bg-slate-500 rounded text-white p-2 mb-2 flex"
                                                    key={doctorIndex}
                                                >
                                                    <div className="flex-grow-0 me-2 mt-4">
                                                        <img
                                                            className="h-20 photo-doctor"
                                                            src="/resources/img/default-user.jpg"
                                                            alt="photo Doctor"
                                                        />
                                                    </div>
                                                    <div className="flex-grow flex flex-col">
                                                        <div className="">
                                                            <h4 className="text-2xl">
                                                                {doctor.fullname
                                                                    ? doctor.fullname
                                                                    : "Nombre no disponible"}{" "}
                                                                /{" "}
                                                                {
                                                                    specialty.title
                                                                }
                                                            </h4>
                                                        </div>
                                                        <div>
                                                            {specialty.services.map(
                                                                (service) => {
                                                                    const doctorService =
                                                                        doctor.doctor_services.find(
                                                                            (
                                                                                ds
                                                                            ) =>
                                                                                ds.service_id ===
                                                                                service.id
                                                                        );
                                                                    return (
                                                                        <div
                                                                            key={
                                                                                service.id
                                                                            }
                                                                        >
                                                                            <span>
                                                                                {
                                                                                    service.title
                                                                                }
                                                                                {doctorService &&
                                                                                doctorService.price
                                                                                    ? ` - Precio: ${doctorService.price}.`
                                                                                    : "."}
                                                                            </span>
                                                                        </div>
                                                                    );
                                                                }
                                                            )}
                                                        </div>
                                                        <div className="flex justify-end">
                                                            {!showAgenda && (
                                                                <button
                                                                    className="bg-green-600 text-white rounded p-2"
                                                                    onClick={() =>
                                                                        handleShowAgenda(
                                                                            doctor.id
                                                                        )
                                                                    }
                                                                >
                                                                    Solicitar
                                                                    Cita
                                                                </button>
                                                            )}

                                                            {showAgenda && (
                                                                <div className="w-full">
                                                                    <h2 className="text-xl font-bold mb-4">
                                                                        Agendar
                                                                        Cita
                                                                    </h2>
                                                                    <div className="mb-4 bg-white p-2 rounded">
                                                                        <label className="text-black mb-2">
                                                                            Fecha:
                                                                        </label>
                                                                        <div className="relative">
                                                                            <LocalizationProvider
                                                                                size="large"
                                                                                dateAdapter={
                                                                                    AdapterMoment
                                                                                }
                                                                            >
                                                                                <DatePicker
                                                                                    value={
                                                                                        selectedDate
                                                                                    }
                                                                                    onChange={(
                                                                                        newValue
                                                                                    ) =>
                                                                                        setSelectedDate(
                                                                                            newValue
                                                                                        )
                                                                                    }
                                                                                    sx={{
                                                                                        width: "100%",
                                                                                    }}
                                                                                />
                                                                            </LocalizationProvider>
                                                                        </div>
                                                                    </div>
                                                                    <div className="mb-4 bg-white p-2 rounded">
                                                                        <label className="text-black mb-2">
                                                                            Hora:
                                                                        </label>
                                                                        <LocalizationProvider
                                                                            dateAdapter={
                                                                                AdapterMoment
                                                                            }
                                                                        >
                                                                            <Stack
                                                                                spacing={
                                                                                    2
                                                                                }
                                                                                sx={{
                                                                                    minWidth: 305,
                                                                                }}
                                                                            >
                                                                                <TimePicker
                                                                                    className="text-white"
                                                                                    value={
                                                                                        selectedTime
                                                                                    }
                                                                                    onChange={(
                                                                                        newValue
                                                                                    ) =>
                                                                                        setSelectedTime(
                                                                                            newValue
                                                                                        )
                                                                                    }
                                                                                    referenceDate={moment()}
                                                                                />
                                                                            </Stack>
                                                                        </LocalizationProvider>
                                                                    </div>
                                                                    <div className="flex justify-end">
                                                                        <button
                                                                            className="bg-gray-600 text-white rounded p-2 me-2"
                                                                            onClick={() =>
                                                                                handleCloseShowAgenda(
                                                                                    doctor.id
                                                                                )
                                                                            }
                                                                        >
                                                                            Close
                                                                        </button>
                                                                        <button
                                                                            onClick={
                                                                                handleSubmit
                                                                            }
                                                                            className="bg-blue-500 text-white px-4 py-2 rounded"
                                                                        >
                                                                            Guardar
                                                                            Cita
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* <button
                                                                className="rounded p-2 bg-green-500 text-white ms-2"
                                                                onClick={() =>
                                                                    handleRequestAppointment(
                                                                        doctor.id
                                                                    )
                                                                }
                                                                disabled={
                                                                    loadingAppointment[
                                                                        doctor
                                                                            .id
                                                                    ]
                                                                }
                                                            >
                                                                {loadingAppointment[
                                                                    doctor.id
                                                                ]
                                                                    ? "Solicitando..."
                                                                    : "Solicitar Cita"}
                                                            </button> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <div>
                                            No hay doctores disponibles en esta
                                            especialidad.
                                        </div>
                                    );
                                })()}
                            </div>
                        )}
                    </div>
                ))
            ) : (
                <div>Sin Coincidencias</div>
            )}
        </div>
    );
}
