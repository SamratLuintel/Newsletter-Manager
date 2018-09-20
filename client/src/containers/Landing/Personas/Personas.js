import React from "react";
import Persona from "./Persona/Persona";
import freelancer from "../../../assets/images/ico-freelancer.svg";
import teams from "../../../assets/images/ico-teams.svg";
import agencies from "../../../assets/images/ico-agencies.svg";
import saas from "../../../assets/images/ico-saas.svg";

const Personas = () => {
  return (
    <div className="Personas">
      <h2 className="Personas__title">
        Who uses EMM? Lorem of Ipsum of people like...
      </h2>
      <div className="row">
        <div className="col-md-3 col-sm-6 Personas--border-right">
          <Persona
            image={freelancer}
            targeted="Freelancers"
            description="”EMM saves me so much time designing great-looking emails, I can pick up more clients!”"
            buttonText="TRY THE EDITOR"
            name="Samrat"
            job="Software engineer"
          />
        </div>
        <div className="col-md-3 col-sm-6 Personas--border-right">
          <Persona
            image={teams}
            targeted="Marketing teams"
            description="”EMM saves me so much time designing great-looking emails, I can pick up more clients!”"
            buttonText="TRY THE EDITOR"
            name="Samrat"
            job="Software engineer"
          />
        </div>
        <div className="col-md-3 col-sm-6 Personas--border-right">
          <Persona
            image={agencies}
            targeted="Email agencies"
            description="”EMM saves me so much time designing great-looking emails, I can pick up more clients!”"
            buttonText="TRY THE EDITOR"
            name="Samrat"
            job="Software engineer"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <Persona
            image={saas}
            targeted="Freelancers"
            description="”EMM saves me so much time designing great-looking emails, I can pick up more clients!”"
            buttonText="TRY THE EDITOR"
            name="Samrat"
            job="Software engineer"
          />
        </div>
      </div>
    </div>
  );
};

export default Personas;
