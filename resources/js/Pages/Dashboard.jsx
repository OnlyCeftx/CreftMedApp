import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import { Head } from "@inertiajs/react";
import Patient from "@/core/Dashboard/Patient/Patient";
import Doctor from "@/core/Dashboard/Doctor/Doctor";
import Admin from "@/core/Dashboard/Admin/Admin";
import DashboardWidget from "@/core/Widget/DashboardWidget";


export default function Dashboard({
    userRole,
    specialties,
    locations,
    data_session,
}) {

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <Head title="Dashboard" />
            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className=" bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {data_session && (
                                <div className="alert alert-success">
                                    {data_session.message}
                                </div>
                            )}
                            {/* <DashboardWidget /> */}
                            {userRole === "admin" && (
                                <Admin />
                            )}

                            {userRole === "doctor" && (
                                <Doctor specialties={specialties} locations={locations}/>
                            )}

                            {userRole === "patient" && (
                                <Patient specialties={specialties}/>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
