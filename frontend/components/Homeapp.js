export function Homeapp() {
    const $contenthome=document.createElement('div');
    $contenthome.classList.add('pag');
    $contenthome.innerHTML=`
    <div class="Container">
        <header class="showcase">

            <h2>Novedades</h2>
            <p>El Ministerio de Salud de El Salvador está comprometido con tu salud Odontologica</p>

        </header>
        <div class="principales">
            <div>
                <img src="https://images.pexels.com/photos/3845757/pexels-photo-3845757.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Mision";
                <h3> COVID 19 </h3>
                <P> Los casos de recuperacion por covid aunmentan</P>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/287237/pexels-photo-287237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Vision";
                <h3> VACUNACION </h3>
                <P> Las personas de 50 años pueden agendar una cita para vacunacion </P>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/305566/pexels-photo-305566.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Vision";
                <h3> CITAS </h3>
                <P>Agenda tu cita para consultas sobre tus dientes </P>
            </div>
            <div>
                <img src="https://images.pexels.com/photos/4270088/pexels-photo-4270088.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="Vision";
                <h3> Informes </h3>
                <P>La informacion es clave para el buen funcionamiento de un estado, solicita un informe sobre asuntos de tu interes </P>
            </div>

        </div>
        
            <source>"<iframe width="90%" height="300" marging="25%" 
            align-items: center src="https://www.youtube.com/embed/6JDA61PCGQE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 
        
    </div>
    <div class="misvis">
        <div>
            <img src="https://elsalvadorgram.com/wp-content/uploads/2020/05/Ministro-de-Salud.jpg" alt="Mision";
            <h3> MISION </h3>
            <P> Satisfacer de manera eficaz y eficiente las necesidades de cuidado de salud de la comunidad. Brindar a toda la comunidad la mejor atención medica basada en la evidencia científica y contenido ético, acompañando al paciente y su familia.</P>
        </div>
        <div>
            <img src="https://elsalvadordiario.com/wp-content/uploads/2021/01/Tonacatepeque-620x400.jpg" alt="Vision";
            <h3> VISION </h3>
            <P> Para el año 2025 el Ministerio de Salud del Salvador será reconocido por el desarrollo de centros de cuidado clínico con enfoque de atención basada en valor, consolidándose como una institución con estándares superiores de calidad, innovación y desarrollo tecnológico y como un gran lugar para trabajar. </P>
        </div>
        `;
    return $contenthome;
}