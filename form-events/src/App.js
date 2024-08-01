import { useState } from "react";
import "./App.css";

const App = () => {
	const [valorDelInput, setValorDelInput] = useState("");
	const [valorDelCheckbox, setValorDelCheckbox] = useState("No");
	const [valorDelSelect, setValorDelSelect] = useState("");
	const [valorDelRadio, setValorDelRadio] = useState("");
	const handleChange = (e) => {
		setValorDelInput(e.target.value);
	};

	const handleChangeCheckbox = (e) => {
		console.log(e.target.checked);
		e.target.checked ? setValorDelCheckbox("Si") : setValorDelCheckbox("No");
	};
	const handleChangeSelect = (e) => {
		setValorDelSelect(e.target.value);
	};
	const handleChangeRadio = (e) => {
		setValorDelRadio(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" onChange={handleChange} />
				<p>valor del input:{valorDelInput}</p>
				<label>
					<input
						type="checkbox"
						name="terminos"
						onChange={handleChangeCheckbox}
					/>
				</label>
				<p>
					Acepta terminos y condiciones:
					<span>{valorDelCheckbox}</span>
				</p>
				<span>Provincia elegida: {valorDelSelect}</span>
				<label>
					<select onChange={handleChangeSelect}>
						<option value="BA">Buenos Aires</option>
						<option value="Mza">Mendoza</option>
						<option value="Cdb">Cordoba</option>
					</select>
				</label>
				<span>Animal elegido: {valorDelRadio}</span>
				<label>
					<input
						type="radio"
						name="animal"
						value="gato"
						onChange={handleChangeRadio}
					/>
					Gato
					<input
						type="radio"
						name="animal"
						value="perro"
						onChange={handleChangeRadio}
					/>
					Perro
				</label>
				<input type="submit" />
			</form>
		</div>
	);
};

export default App;
