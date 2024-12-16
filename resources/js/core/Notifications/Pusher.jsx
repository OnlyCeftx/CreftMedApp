import React, { useEffect, useState } from "react";
import { Head } from "@inertiajs/react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";
import axios from "axios"; // Asegúrate de tener axios instalado

export default function PusherTest() {
    const [messages, setMessages] = useState([]);
    const [error, setError] = useState(null);
    console.log(import.meta.env.VITE_REVERB_APP_KEY)
    useEffect(() => {
        // Inicializar Echo globalmente
        window.Pusher = Pusher;
        try {
            window.Echo = new Echo({
                broadcaster: "pusher",
                key: import.meta.env.VITE_REVERB_APP_KEY, // Usa la variable de entorno
                cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER, // Usa la variable de entorno
                forceTLS: true,
            });

            // Suscribirse al canal
            window.Echo.channel("my-channel").listen("MyEvent", (data) => {
                console.log("Mensaje recibido:", data);
                setMessages((prev) => [...prev, data]);
            });

            return () => {
                window.Echo.disconnect();
            };
        } catch (err) {
            console.error("Error setting up Echo:", err);
            setError("Failed to initialize Echo");
        }
    }, []);

    // Función para enviar el evento
    const sendEvent = async () => {
        try {
            const response = await axios.get("/send-event");
            console.log(response.data);
            // Opcional: mostrar un mensaje de éxito
            alert("Evento enviado!");
        } catch (error) {
            console.error("Error sending event:", error);
            alert("Error al enviar el evento");
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <Head title="Pusher Test" />
            <h1>Pusher Test</h1>

            {/* Botón para enviar el evento */}
            <button
                onClick={sendEvent}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Enviar Evento
            </button>

            <div>
                <h2>Received Messages:</h2>
                <ul>
                    {messages.map((message, index) => (
                        <li key={index}>{JSON.stringify(message)}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
