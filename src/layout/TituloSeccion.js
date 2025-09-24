import "./TituloSeccion.css"

export default function TituloSeccion({titulo}) {
    return (
        <>
            <div className="TituloSeccion__container">
                <h2>{titulo}</h2>
            </div>
        </>
    )
}