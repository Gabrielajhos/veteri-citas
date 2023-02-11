 import {useState, useEffect} from 'react';
  import Error from './Error';


 function Formulario({pacientes, setPacientes, paciente, setPaciente}) {

  
  const [nombre, setNombre]= useState('');
  const [propietario, setPropietario]= useState('');
  const [email, setEmail]= useState('');
  const [alta, setAlta]= useState('');
  const [sintomas, setSintomas]= useState('');

  const [error, setError]= useState(false);

  useEffect(() =>{
if(Object.keys(paciente).length > 0){
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
  setEmail(paciente.email)
  setAlta(paciente.alta)
  setSintomas(paciente.sintomas)
}
  }, [paciente])

  const generarId = () =>{
    const random= Math.random().toString(36).substring(2);
    const fecha= Date.now().toString(36);

    return(
      random+fecha
    )
     
    
  }
  
  const handleSubmit = (e) =>{
    e.preventDefault();


    if([nombre, propietario, email, alta, sintomas].includes('')){
      console.log('hay al menos un campo vacio');

      setError(true);
      
      return;

    } 


    setError(false);

    const objetoPaciente={
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      

    
    }

    if (paciente.id) {
        objetoPaciente.id = paciente.id
        const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? 
          objetoPaciente : pacienteState);

          setPacientes(pacientesActualizados);
          setPaciente({})
    } else{ 
      objetoPaciente.id= generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }

  

    //reiniciar el form

    setNombre('')
    setPropietario('')
    setEmail('')
    setAlta('')
    setSintomas('')
  }
 

  return(
    <div className="md:w-1/2 lg:w-2/5  mx-auto">
    <h2 className="font-black text-center text-3xl">Formulario</h2>

    <p className="text-lg text-center mb-10">Añade pacientes y {''}
    <span className="text-indigo-600 font-bold"> administralos</span>
    </p>


    <form  
    onSubmit={handleSubmit}

    className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 mb-20">

    {error && <Error >Todos los campos son obligatorios</Error>}

    <div className="mb-5">
      <label htmlFor="nombre" className="block text-gray-700 uppercase font-bold">
      Nombre mascota {''}
      </label>
      <input
      id="nombre"
       className="border-2 w-full p-2 mt-2 rounded-lg" 
       type="texto" placeholder="Nombre de la mascota"
        value={nombre}
        onChange={ (e) => setNombre(e.target.value) }
       />
       
    </div>

    <div  className="mb-5">
      <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
      Nombre Propietario {''}
      </label>
      <input
      id="propietario"
       className="border-2 w-full p-2 mt-2 rounded-lg" 
       type="texto" placeholder="Nombre del propietario"
       value={propietario}
        onChange={ (e) => setPropietario(e.target.value) }
       />
    </div>


    <div  className="mb-5">
      <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
     E-mail {''}
      </label>
      <input
      id="email"
       className="border-2 w-full p-2 mt-2 rounded-lg" 
       type="email" placeholder="E-mail Contacto"
       value={email}
        onChange={ (e) => setEmail(e.target.value) }
       />
    </div>


    <div  className="mb-5">
      <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
     Alta {''}
      </label>
      <input
      id="alta"
       className="border-2 w-full p-2 mt-2 rounded-lg" 
       type="date"
       value={alta}
        onChange={ (e) => setAlta(e.target.value) }
       />
    </div>

    <div  className="mb-5">
      <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
     Sintomas {''}
      </label>
      <textarea id="sintomas" className="border-2 w-full p-2 mt-2 rounded-lg"
      placeholder="Describe los sintomas"
      value={sintomas}
      onChange={ (e) => setSintomas(e.target.value) }></textarea>
    </div>

    <input type="submit"
     className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800"
     value={paciente.id ? 'Editar paciente' : 'Agregar paciente'}>
     
    </input>

    </form>


    </div>
  )
  
 }

 export default Formulario;