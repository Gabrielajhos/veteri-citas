import {useEffect} from "react";

const Paciente = ({pacientes, setPaciente, eliminarPaciente}) => {


  const {nombre, propietario, email, alta, sintomas, id} = pacientes;

  const handleEliminar = ()=>{
    const respuesta = confirm('¿Deseas eliminar este paciente?');
    if (respuesta) {
      eliminarPaciente(id);
    }
  }

  return (
    <div className=" mx-5 my-10  bg-white shadow-md px-5 py-10 rounded-xl">
    <p className="mb-3 font-bold text-gray-700 uppercase">Nombre mascota: {''}
    <span className="font-normal normal-case"> {nombre} </span>
    </p>

    <p className="mb-3 font-bold text-gray-700 uppercase">Nombre propietario: {''}
    <span className="font-normal normal-case"> {propietario}</span>
    </p>

    <p className="mb-3 font-bold text-gray-700 uppercase">E-mail: {''}
    <span className="font-normal normal-case"> {email} </span>
    </p>
    <p className="mb-3 font-bold text-gray-700 uppercase">Alta: {''}
    <span className="font-normal normal-case">{alta} </span>
    </p>

    <p className="mb-3 font-bold text-gray-700 uppercase">Sintomas: {''}
    <span className="font-normal normal-case"> {sintomas} </span>
    </p>

    <div className="flex justify-between">
      <button className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg"
      type="button"
      onClick={()=> setPaciente(pacientes)}
      >Editar</button>

      <button className="py-2 px-10 bg-red-400 hover:bg-red-600 text-white font-bold uppercase rounded-lg"
      type="button"
      onClick={handleEliminar}
      >Eliminar</button>
    </div>
</div>
  )
}

export default Paciente
