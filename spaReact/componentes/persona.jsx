import "bootstrap/dist/css/bootstrap.min.css";

export function Persona({ nombre, edad, imageUrl }){
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={imageUrl} className="card-img-top" alt="img"/>
            <div className="card-body">
                <p className="card-text">Soy {nombre}, tengo {edad} años, soy...</p>
            </div>
        </div>
    )
}