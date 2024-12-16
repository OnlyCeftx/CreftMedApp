import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function UpdateDataDoctor({ doctor, specialties, locations, onUpdate }) {
    const [data, setData] = useState({
        doctor_id: doctor.id || "",
        fullname: doctor.fullname || "",
        specialty: doctor.specialty_id || "",
        location: doctor.location_id || "",
        phone: doctor.phone || "",
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const response = await axios.post(
                route("doctor.profile.update"),
                data
            );
            toast.success(response.data); // Manejar la respuesta aquí
        } catch (error) {
            if (error.response && error.response.data.errors) {
                setErrors(error.response.data.errors); // Manejar errores de validación
            } else {
                toast.error("Error al actualizar los datos");
            }
        } finally {
            setProcessing(false);
            onUpdate();
        }
    };

    return (
        <form onSubmit={submit} className="flex flex-col">
            <label htmlFor="fullname">Nombre Completo</label>
            <input
                type="text"
                id="fullname"
                value={data.fullname}
                onChange={(e) => setData({ ...data, fullname: e.target.value })}
                className="mt-1 p-2 border border-gray-300 rounded"
                required
            />
            {errors.fullname && (
                <div className="text-red-500">{errors.fullname}</div>
            )}

            <label htmlFor="specialty" className="mt-2">
                Especialidad
            </label>
            <select
                id="specialty"
                name="specialty"
                value={data.specialty}
                className="mt-1 block w-full text-black p-2 border border-gray-300 rounded"
                onChange={(e) =>
                    setData({ ...data, specialty: e.target.value })
                }
                required
            >
                <option value="">Seleccione una especialidad</option>
                {specialties.map((specialty) => (
                    <option key={specialty.id} value={specialty.id}>
                        {specialty.title}
                    </option>
                ))}
            </select>
            {errors.specialty && (
                <div className="text-red-500">{errors.specialty}</div>
            )}

            <label htmlFor="location" className="mt-2">
                Ubicación
            </label>
            <select
                id="location"
                name="location"
                value={data.location}
                className="mt-1 block w-full text-black p-2 border border-gray-300 rounded"
                onChange={(e) => setData({ ...data, location: e.target.value })}
                required
            >
                <option value="">Seleccione una ubicación</option>
                {locations.map((location) => (
                    <option key={location.id} value={location.id}>
                        {location.title}
                    </option>
                ))}
            </select>
            {errors.location && (
                <div className="text-red-500">{errors.location}</div>
            )}

            <label htmlFor="phone" className="mt-2">
                Teléfono
            </label>
            <PhoneInput
                international
                defaultCountry="VE"
                className="my-2 text-black"
                value={data.phone}
                onChange={(value) => setData({ ...data, phone: value })}
            />
            {errors.phone && <div className="text-red-500">{errors.phone}</div>}

            <button
                type="submit"
                disabled={processing}
                className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
                Actualizar
            </button>
        </form>
    );
}
