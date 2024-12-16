import React, { useState, useEffect } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import DoctorTable from "./Components/DoctorTable";
import Spinner from "@/Icons/Spinner";

const DoctorsList = () => {
    const [doctors, setDoctors] = useState([]);
    const [loading, setLoading] = useState(true);
    const fetchDoctors = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/get/Doctors");
            setDoctors(response.data);
        } catch (error) {
            toast.error("Error al cargar doctores");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDoctors();
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <DoctorTable doctors={doctors} refreshDoctors={fetchDoctors} />
            )}
        </div>
    );
};

export default DoctorsList;
