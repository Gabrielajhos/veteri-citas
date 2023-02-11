import Paciente from "./Paciente";
import {useEffect} from "react";


const ListadoPacientes=({pacientes, setPaciente, eliminarPaciente}) => {

    useEffect(() =>{
       

    }, [pacientes])

    return(
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (
<>

            <h2 className="font-black  text-center text-3xl"> Listado de pacientes</h2>

            <p className="text-lg text-center mb-10">
            Administra tus {''}
            <span className="text-indigo-600 font-bold">pacientes y citas</span>
            </p>

            
            { pacientes.map (pacientes =>(
            <Paciente 
            key={pacientes.id}
            pacientes={pacientes}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />    
             ))}


</>

        ): (
<>


           <h2 className="font-black  text-center text-3xl"> No hay pacientes</h2>

           <p className="text-lg text-center mb-10">
           Comienza agregando pacientes {''}
           <span className="text-indigo-600 font-bold">y apareceran aquí</span>
           </p>



</>
  )}


       
        </div>
    )
}

export default ListadoPacientes;

