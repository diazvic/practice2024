import { useState } from "react";
import "./Card.css";
//para mostrar una card debo usar un estado con renderizado condicional
const Card = ({ nombre, edad, descripcion }) => {
	const [mostrarDescripcion, setMostrarDescripcion] = useState(false);
	const handleMouseEnter = () => {
		setMostrarDescripcion(true);
	};
	const handleMouseLeave = () => {
		setMostrarDescripcion(false);
	};
	return (
		<article
			className="card"
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h2>{nombre}</h2>
			<p>{edad}</p>
			{mostrarDescripcion && <p>{descripcion}</p>}
		</article>
	);
};
export default Card;
