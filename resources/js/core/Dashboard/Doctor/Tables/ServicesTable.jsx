export default function ServicesTable({ services }) {
    return (
        <div className="content-table">
            <table className="w-full">
                <thead>
                    <tr className="cabecera">
                        <td>id</td>
                        <td>Servicio</td>
                        <td>Precio</td>
                        <td>Fecha de modificación</td>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.id} className="contenido">
                            <td>{service.id}</td>
                            <td>{service.title}</td>
                            <td>{service.pivot.price}</td>
                            <td>
                                {new Date(
                                    service.pivot.updated_at
                                ).toLocaleString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
