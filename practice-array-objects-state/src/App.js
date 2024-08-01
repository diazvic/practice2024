import { useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const App = () => {
	const defaultCategorias = {
		categorias: [
			{ id: 1, nombre: "comidas" },
			{ id: 2, nombre: "servicios" },
			{ id: 3, nombre: "salidas" },
			{ id: 4, nombre: "educación" },
			{ id: 5, nombre: "transporte" },
			{ id: 6, nombre: "trabajo" },
		],
		operaciones: [],
	};

	const [data, setData] = useLocalStorage("ahorradas", defaultCategorias);
	const [categorias, setcategorias] = useState(data.categorias);
	const [nombreCategoria, setNombreCategoria] = useState("");

	// const handleAddCategoria = () => {
	// 	const newCategoria = { nombre: nombreCategoria };
	// 	setcategorias((categorias) => [...categorias, newCategoria]);
	// 	// en este ejemplo podria hacer una copia de mi data con newdata y sumarle +1 con el index ??//
	// 	setNombreCategoria("");
	// };

	const handleAddCategoria = () => {
		// Crear el nuevo objeto de categoría con un id asignado
		const newCategoria = {
			nombre: nombreCategoria,
		};

		// Actualizar el estado de categorias
		setcategorias((categorias) => [...categorias, newCategoria]);

		// Actualizar el estado de data y guardar en el local storage
		const updatedData = {
			...data,
			categorias: [...data.categorias, newCategoria],
		};
		setData(updatedData);

		// Limpiar el campo de nombre de la categoría
		setNombreCategoria("");
	};

	// Elimina la categoria usando el index
	const handleRemoveCategoria = (index) => {
		//para poder ver el numero en el array
		setcategorias((categorias) => categorias.filter((_, i) => i !== index));
	};
	// Voy setteando nombreCategoria en base a lo que voy escribiendo
	const handleNombreCategoriaChange = (event) => {
		setNombreCategoria(event.target.value);
	};

	return (
		<div>
			<h2>List of Car Objects</h2>
			<ul>
				{categorias.map((categoria, index) => (
					<li key={index}>
						{categoria.nombre}
						<button onClick={() => handleRemoveCategoria(index)}>
							Eliminar
						</button>
					</li>
				))}
			</ul>
			<input
				type="text"
				value={nombreCategoria}
				onChange={handleNombreCategoriaChange}
			/>

			<button onClick={handleAddCategoria}>Agregar Categoria</button>
		</div>
	);
};
export default App;
