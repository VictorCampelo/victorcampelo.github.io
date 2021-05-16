import React from "react";

const Leadership = ({ heading }) => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{
        backgroundColor: "#f8f9fa",
        paddingTop: "0px",
        paddingBottom: "0px",
      }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInRight"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-5">
                    <i className="fa fa-user"></i>
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href="">
                        Superitendência de Tecnologia da Informação - UFPI
                      </a>{" "}
                      <span>August 2017 - August 2019</span>
                    </h2>
                    <p>
                      <strong>Scholarship in Infrastructure</strong> Responsible
                      for the maintenance and installation of computers and
                      printers (Epson, HP, Lexmark), installation and
                      configuration of Switch (HP, 3Com, Aruba), Access Point
                      (Cisco) and routers, configuration of Vlans, Vpn and
                      servers, report generation, technical visits, use of
                      Zabbix, IpUfpi, Redmines and Cisco Deepspace, small
                      JavaScript scripts to assist internal tasks.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </article>
              <article
                className="timeline-entry animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="timeline-entry-inner">
                  <div className="timeline-icon color-1">
                    <i className="fa fa-code"></i>
                  </div>
                  <div className="timeline-label">
                    <h2>
                      <a href="#">U.E Antônio Inácio de Oliveira</a>{" "}
                      <span>Sep 2015 - Nov 2015</span>
                    </h2>
                    <p>
                      <strong>Computer Technician Internship </strong>
                      Responsible for maintaining computers, organizing school
                      data, typing tests, preparing reports and serving the
                      user.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
