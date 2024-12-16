import { useState } from "react";
import { router } from "@inertiajs/react";
import { toast } from "react-toastify";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

import Stack from "@mui/material/Stack";
import moment from "moment";

export default function Appoint_tab({
    selectedAppointment,
    onClose,
    onUpdate,
}) {
    const [show, setShow] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
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

    const handleChange = (date) => {
        setSelectedDate(date);
    };

    const handleClose = (state) => {
        setShow(state);
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const handleSubmit = () => {
        if (!selectedDate || !selectedTime) {
            toast.error("Por favor, selecciona fecha y hora");
            return;
        }
        const formattedDate = selectedDate.toISOString().split("T")[0];
        const formattedTime = selectedTime.format('hh:mm A');
        router.put(
            `/appointments/${selectedAppointment.id}/schedule`,
            {
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
    if (!selectedAppointment) return null;
    return (
        <div className="p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4">
                Agendar Cita #{selectedAppointment.id}
            </h2>
            <div className="mb-4">
                <label className="block mb-2">Paciente:</label>
                <p>{selectedAppointment.patient?.fullname}</p>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Fecha:</label>
                <div className="relative">
                    <LocalizationProvider
                        size="large"
                        dateAdapter={AdapterMoment}
                    >
                        <DatePicker
                            value={selectedDate}
                            onChange={(newValue) => setSelectedDate(newValue)}
                            sx={{ width: "100%" }}
                        />
                    </LocalizationProvider>
                </div>
            </div>
            <div className="mb-4">
                <label className="block mb-2">Hora:</label>
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <Stack spacing={2} sx={{ minWidth: 305 }}>
                        <TimePicker
                            value={selectedTime}
                            onChange={(newValue) => setSelectedTime(newValue)}
                            referenceDate={moment()}
                        />
                        Stored value:{" "}
                    </Stack>
                </LocalizationProvider>
            </div>
            <div className="flex justify-between">
                <button
                    onClick={handleSubmit}
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Guardar Cita
                </button>
                <button
                    onClick={onClose}
                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                >
                    Cancelar
                </button>
            </div>
        </div>
    );
}
