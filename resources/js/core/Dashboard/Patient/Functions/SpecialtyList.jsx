import { MdiMenuDown as IconMenuDown } from "@/Icons/menuDown";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export default function SpecialtyList({ onAppointmentCreated }) {
    const [specialties, setSpecialties] = useState([]);
    const [expandedSpecialty, setExpandedSpecialty] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [loadingAppointment, setLoadingAppointment] = useState({});

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
        if (expandedSpecialty === specialtyId) {
            setExpandedSpecialty(null);
        } else {
            setExpandedSpecialty(specialtyId);
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

    useEffect(() => {
        fetchSpecialties();
    }, []);
    return (
        <div>
            <p className="text-3xl">Especialidades</p>
            <input
                type="text"
                placeholder="Buscar especialidades..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="border p-2 mb-4 text-black"
            />
            {filteredSpecialties && filteredSpecialties.length > 0 ? (
                filteredSpecialties.map((specialty, index) => (
                    <div key={index}>
                        <button
                            className="flex text-white bg-gray-600 rounded px-2 py-2 mb-2"
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
                                                    className="fs-3x ms-4 bg-slate-700 rounded text-white p-2 mb-2 flex"
                                                    key={doctorIndex}
                                                >
                                                    <div className="flex-grow-0 me-2 my-auto">
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
                                                            <button
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
                                                            </button>
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
