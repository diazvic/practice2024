import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
const App = () => {
	const [mostrarModal, setMostrarModal] = useState(false);
	const handleClick = () => {
		setMostrarModal(!mostrarModal);
	};
	const handleClickCerrarModal = () => {
		setMostrarModal(!mostrarModal);
	};
	const gatos = [
		{ nombre: "Java", edad: 5, descripcion: "Gata gris atigrada" },
		{ nombre: "Capu", edad: 15, descripcion: "Gato blanco con manchas" },
		{ nombre: "Alaska", edad: 3, descripcion: "Gata blanca con ojos claros" },
	];
	return (
		<div>
			<h1>Estado</h1>

			{gatos.map((gato) => (
				<div>
					<Card
						nombre={gato.nombre}
						edad={gato.edad}
						descripcion={gato.descripcion}
					/>
				</div>
			))}
			<button onClick={handleClick}>Abril modal</button>
			{mostrarModal && (
				<article className="modal">
					<button onClick={handleClickCerrarModal}>X</button>
					<h2>Soy un modal</h2>
					<p>texto dentro del modal</p>
				</article>
			)}
		</div>
	);
};
export default App;
