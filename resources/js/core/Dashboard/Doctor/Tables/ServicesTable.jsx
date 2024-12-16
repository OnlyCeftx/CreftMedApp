export default function ServicesTable({ services }) {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Servicio</td>
                        <td>Precio</td>
                        <td>Fecha de modificación</td>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.id}>
                            <td>{service.id}</td>
                            <td>{service.title}</td>
                            <td>{service.pivot.price}</td>
                            <td>{service.pivot.updated_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
