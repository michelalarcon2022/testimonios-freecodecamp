import '../StyleSheets/Testimonio.css'

function Testimonio (props){
  return(
    <div className='contenedor-testimonio'>
      <img
      className='imagen-testimonio'
     src={require(`../imagenes/testimonio-${props.imagen}.png`) }
     alt='Foto de silvia' />
     <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'>
        <b>{props.nombre}</b> es de {props.pais}</p>
      <p className='cargo-testimonio'><b> {props.cargo}</b></p>
      <p className='texto-testimonio'>'{props.testimonio}'</p>

     </div>
    </div>
  );
} 
export default Testimonio
