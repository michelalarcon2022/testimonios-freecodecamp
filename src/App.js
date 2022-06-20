import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='Contenedor-principal'> 
      <h1>
        Aca se evidenciara Testimonios de:
      </h1>
     <Testimonio
     nombre='Silvia Lagos'
     pais='Colombia-Bucaramanga'
     imagen='silvia'
     cargo='Contadora'
     empresa='Aldana SA'
     testimonio= 'Aldana es una empresa en la cual he venido creciendo profesionalmente y me gusta mucho trabajar alli con personas que hacen muy bien su labor y tienen en claro el rumbo de la compañia'/>
    <Testimonio 
    nombre='Andres Alarcon Pedreros'
    pais='Colombia-Neiva'
    imagen='andres'
    cargo='Tecnologo en sistemas'
    empresa='Interedes'
    testimonio=' Finalizo su trabajo como soporte Tic en interedes, es una persona destinada a buscar el exito, a tener buenas relaciones.'
    />
     <Testimonio 
    nombre='Juliana Hernandez Guti'
    pais='Colombia-Medellin'
    imagen='juliana'
    cargo='Modelo'
    empresa='Tienda de ropa'
    testimonio=' En revista VEA Se a creado como una buena mujer que le gusta mas que la plata lucir sus curvas en buenas tiendas de revistas'
    />
   
      </div>
    </div>
  );
}

export default App;
