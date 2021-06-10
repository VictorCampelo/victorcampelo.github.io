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
                        Tribunal Regional Eleitoral do Piauí - TRE-PI
                      </a>{" "}
                      <span>Nov. 2020 - present</span>
                    </h2>
                    <p>
                      <strong>Business Intelligence Analyst Internship</strong>{" "}
                      Analysis, extraction, treatment and display of information
                      obtained from Oracle database and PostgreSQL databases,
                      creation of dashboards with Power Bi, Report delivery,
                      help and development of development with HTML, CSS and
                      Javascript.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </article>
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
                        Liga Acadêmica de Empreendedorismo e Mercado Financeiro
                        da UFPI
                      </a>{" "}
                      <span>Jul. 2020 - at the moment</span>
                    </h2>
                    <p>
                      <strong>Full stack developer</strong> Building Restful API
                      with Node.js, using Docker, database administration
                      Relational (MySql, Postgresql) and non-relational (Redis
                      DB) database training new members, software versioning
                      control with Git and Github Github, continuous integration
                      with Github Actions, service deployment at KingHost,
                      software testing with Jest, help developing web pages with
                      semantic HTML, CSS, React.js, Axios, React Hooks, Flexbox
                      and CSS grid.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </article>
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
                        Universidade Federal do Piauí - Superitendência de
                        tecnologia da informação - STI-UFPI
                      </a>{" "}
                      <span>Nov. 2018 - Aug. 2019</span>
                    </h2>
                    <p>
                      <strong>Scholarship in Infrastructure</strong> Installing
                      and configuring digital communication devices and computer
                      programs on network equipment, Running network
                      diagnostics, correcting computer network failures,
                      preparing, installing network cabling, configuring user
                      accesses on computer networks, configuring network
                      services such as firewall, web servers, email news
                      servers, aiming to program security features in computer
                      networks, installation and configuration of Switch (HP,
                      3Com, Aruba), Access Point (Cisco) and routers,
                      configuration of Vlans, Vpn and servers, report creation,
                      technical visits, use of Zabbix, IpUfpi, Redmines and
                      Cisco Deepspace and creation of scripts in JavaScript for
                      automation of internal tasks.{" "}
                    </p>
                    <p></p>
                  </div>
                </div>
              </article>
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
                        Universidade Federal do Piauí - Superitendência de
                        tecnologia da informação - STI-UFPI
                      </a>{" "}
                      <span>Aug. 2017 - Nov. 2018</span>
                    </h2>
                    <p>
                      <strong>Technical Support Internship</strong> Acting in
                      all sectors of the CNN and administrative UFPI, performing
                      technical support in software and hardware, either for
                      internal and external customers, configuration of
                      electronic mail, install, Configure and update operating
                      systems Linux, Windows and MacOS, install and perform
                      maintenance of digital communication, install and perform
                      maintenance of printers, install database, creation of
                      backups, preparation of technical reports and user
                      service.{" "}
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
                      <a href="#">U.E Antônio Inácio de Oliveira - Pronatec</a>{" "}
                      <span>Aug. 2013 - Nov. 2013</span>
                    </h2>
                    <p>
                      <strong>Technical Support Internship</strong> 
                       Responsible for computer maintenance, organizing school
                      data, typing tests, writing reports typing tests, writing
                      reports and customer service.
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
