import React, { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { Check as IconCheck } from "@/Icons/Check";
import { Delete as IconDelete } from "@/Icons/Delete";
import Spinner from "@/Icons/Spinner";

const DoctorTable = ({ doctors, refreshDoctors }) => {
    const [loadingStatus, setLoadingStatus] = useState({});
    const handleToggleStatus = async (doctorId) => {
        try {
            setLoadingStatus((prev) => ({
                ...prev,
                [doctorId]: true,
            }));
            const response = await axios.post(
                `/doctors/${doctorId}/toggle-status`
            );
            if (refreshDoctors) {
                refreshDoctors();
            }
            toast.success("Estado actualizado correctamente");
        } catch (error) {
            toast.error("Error al actualizar el estado");
            console.error(error);
        } finally {
            setLoadingStatus((prev) => ({
                ...prev,
                [doctorId]: false,
            }));
        }
    };
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Especialidad</th>
                    <th>Ubicación</th>
                    <th>Telefono</th>
                    <th>Status</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {doctors && doctors.length > 0 ? (
                    doctors.map((doctor, index) => (
                        <tr key={index}>
                            <td>{doctor.fullname}</td>
                            <td>{doctor.specialty.title}</td>
                            <td>{doctor.location.title}</td>
                            <td>{doctor.phone}</td>
                            <td>
                                {doctor.status === 0 ? (
                                    <IconDelete
                                        icon="streamline:delete-1-solid"
                                        width="14"
                                        height="14"
                                    />
                                ) : (
                                    <IconCheck
                                        icon="material-symbols:check"
                                        width="24"
                                        height="24"
                                    />
                                )}
                            </td>
                            <td>
                                <button
                                    onClick={() =>
                                        handleToggleStatus(doctor.id)
                                    }
                                    disabled={loadingStatus[doctor.id]}
                                    className="flex items-center justify-center p-2 bg-indigo-600 text-white rounded"
                                >
                                    {loadingStatus[doctor.id] ? (
                                        <Spinner size="small" />
                                    ) : (
                                        <span>Cambiar Estatus</span>
                                    )}
                                </button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="6" className="text-center">
                            No hay doctores
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    );
};
export default DoctorTable;
