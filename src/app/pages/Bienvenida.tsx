import logo from '../../assets/Img/bombilloInicio.png';
export const Bienvenida = () => {


    return (
        <div className="container">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1 titulos">BIENVENIDO A RETOSTOS 🚀</h1>
                    <p className="lead">Retostos es una plataforma interactiva diseñada para aprender y mejorar habilidades de programación mediante ejercicios prácticos en <span className="fw-bold">TypeScript</span>. Ofrecemos retos dinámicos que abarcan desde conceptos básicos como variables y funciones, hasta áreas avanzadas como programación funcional, manipulación de fechas y desafíos extras llenos de creatividad. <br></br>¡Un lugar perfecto para fortalecer tus conocimientos mientras te diviertes resolviendo problemas reales!</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                        <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                    </div>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img className="rounded-lg-3" src="bootstrap-docs.png" alt="" width="720" />
                </div>
            </div>
        </div>

    );
};
