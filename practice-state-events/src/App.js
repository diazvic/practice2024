import { useState } from "react";
import "./App.css";
//adentro de mi estado no puedo tener funciones
//el estado es como una variable global
const App = () => {
	// const [contador, setContador] = useState(0);
	// const handleClickMasUno = () => {
	// 	setContador(contador + 1);
	// };
	// const handleClickMenosUno = () => {
	// 	setContador(contador - 1);
	// };
	const [color, setColor] = useState("rojo");
	const [nombreBoton, setNombreBoton] = useState("Poner fondo azul");
	const handleClickCambiarColor = () => {
		color === "rojo" ? setColor("azul") : setColor("rojo");
		color === "rojo"
			? setNombreBoton("Poner fondo azul")
			: setNombreBoton("Poner fondo rojo");
	};

	return (
		// <div>
		// 	<p>
		// 		Contador : <span>{contador}</span>
		// 	</p>
		// 	<button onClick={handleClickMasUno}>+1</button>
		// 	<button onClick={handleClickMenosUno}>-1</button>
		// </div>
		<div className={color}>
			<button onClick={handleClickCambiarColor}>{nombreBoton}</button>
		</div>
	);
};

export default App;
