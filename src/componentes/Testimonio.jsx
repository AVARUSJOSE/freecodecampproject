function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img
        className="imagen-testimonio"
        src='https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png'
        alt="emma"
      />
      <div className='contenedor-texto-testimonio'>
       <p className='nombre-testitmonio'>Emma bostian en Suecia</p>
       <p className='cargo-testimonio'>Ingeniera de software en spotify</p>
       <p className="texto-testimonio">"Siempre me ha costado aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."</p>
     </div>
      
    </div>
  );
}

export default Testimonio;
