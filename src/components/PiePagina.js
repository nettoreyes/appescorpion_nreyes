import React from "react";

const PiePagina = () => {
  return (
    <footer className="footer bg-dark  mt-5">
      <div className="container py-3">
        <div className="row justify-content-center align-items-center">
          <div className="col-10">
            <div className="row justify-content-center align-items-center">
              <div className="col-3 text-left fs-6 fw-bold text-warning">
                PRODUCTO
              </div>
              <div className="col-3 text-left fs-6 fw-bold text-warning">
                INDUSTRIAS
              </div>
              <div className="col-3 text-left fs-6 fw-bold text-warning">
                CENTRO DE AYUDA
              </div>
              <div className="col-3 text-left fs-6 fw-bold text-warning">
                NOSOTROS
              </div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-3 text-left text-white">Planificación</div>
              <div className="col-3 text-left text-white">Consumo masivo</div>
              <div className="col-3 text-left text-white">Preguntas frecuentes</div>
              <div className="col-3 text-left text-white">Nuestra empresa</div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-3 text-left text-white">Visibilidad a Clientes</div>
              <div className="col-3 text-left text-white">Ecommerce</div>
              <div className="col-3 text-left text-white">Brochures</div>
              <div className="col-3 text-left text-white">Blog</div>
            </div>
            <div className="row justify-content-center align-items-center">
              <div className="col-3 text-left text-white">Monitoreo</div>
              <div className="col-3 text-left text-white">Servicios</div>
              <div className="col-3 text-left text-white">Partners</div>
              <div className="col-3 text-left text-white">Contáctanos</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PiePagina;
