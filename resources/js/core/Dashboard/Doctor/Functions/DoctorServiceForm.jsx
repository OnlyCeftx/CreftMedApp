import React, { useEffect, useState } from "react";
import { useForm, router } from "@inertiajs/react";
import { toast } from "react-toastify";
export default function DoctorServiceForm({ doctor, onUpdate }) {
    const { data, setData, post, errors } = useForm({
        id: "",
        doctor_id: doctor.id || "",
        service_id: "",
        price: "",
    });
    const [specialty, setSpecialty] = useState([]);
    const [services, setServices] = useState([]);
    const [doctorServices, setDoctorServices] = useState([]);
    const [IsLoading, setIsLoading] = useState(false);
    const fetchData = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get("/DoctorService");
            setSpecialty(response.data.specialty);
            setServices(response.data.services);
            setDoctorServices(response.data.doctor_services);
            console.log(response.data);
        } catch (error) {
            console.error("Error", error);
            toast.error("Error al cargar datos del Doctor");
        } finally {
            setIsLoading(false);
        }
    };
    const handleServiceChange = (e) => {
        const selectedServiceId = e.target.value;
        setData("service_id", selectedServiceId);
        const selectedDoctorService = doctorServices.find(
            (doctorService) =>
                doctorService.service_id === parseInt(selectedServiceId)
        );
        if (selectedDoctorService) {
            setData("id", selectedDoctorService.id);
            setData("price", selectedDoctorService.price);
        } else {
            setData("id", "");
            setData("price", "");
            console.log("Cambiando servicio sin precio");
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        router.post(
            `/DoctorService`,
            {
                id: data.id,
                doctor_id: data.doctor_id,
                service_id: data.service_id,
                price: data.price,
            },
            {
                onSuccess: () => {
                    toast.success("Precio asignado al servicio exitosamente.");
                    onUpdate();
                },
                onError: (errors) => {
                    console.error("Error al agendar cita:", errors);
                },
            }
        );
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (IsLoading) {
        return <>Cargando</>;
    }
    return (
        <>
            <div className="container">
                <h1>Agregar Servicio a Doctor</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="service_id">Servicio</label>
                        <select
                            id="service_id"
                            value={data.service_id}
                            onChange={handleServiceChange}
                        >
                            <option value="">Seleccione un servicio</option>
                            {services.map((service) => (
                                <option key={service.id} value={service.id}>
                                    {service.title}
                                </option>
                            ))}
                        </select>
                        {errors.service_id && (
                            <div className="error">{errors.service_id}</div>
                        )}
                    </div>
                    <div>
                        <label htmlFor="price">Precio</label>
                        <input
                            type="number"
                            id="price"
                            value={data.price}
                            onChange={(e) => setData("price", e.target.value)}
                        />
                        {errors.price && (
                            <div className="error">{errors.price}</div>
                        )}
                    </div>

                    {data.id}
                    <button
                        type="submit"
                        className="bg-green-600 p-2 rounded text-white my-2"
                    >
                        Agregar Servicio
                    </button>
                </form>
            </div>
        </>
    );
}
