import React, { Component } from "react";
import icoPro from "../../../assets/images/ico-pro.png";
import PackageCard from "../../../components/PackageCard/PackageCard";

class Packages extends Component {
  render() {
    return (
      <div className="Packages">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <PackageCard
                imgSrc={icoPro}
                bannerText="TRY"
                edition="free"
                subtitle="TO TRY THE EDITOR"
                mainDescText="Build an email,free & fast"
                altDescText="Drag & drop email creation. No signup required. Jump right in."
                brandColor="#179dc7"
              />
            </div>
            <div className="col-md-4">
              <PackageCard
                imgSrc={icoPro}
                bannerText="DESIGN"
                edition="PRO"
                subtitle="FOR FREELANCERS,TEAMS AND AGENCIES"
                mainDescText="Save, edit, search, organize. "
                altDescText="Cut down on email production time & cost. Collaborate more. Have fun."
                brandColor="#8a3b8f"
              />
            </div>
            <div className="col-md-4">
              <PackageCard
                imgSrc={icoPro}
                bannerText="CONQUER"
                edition="BUSINESS"
                subtitle="FOR GIGANTIC CORPORATION"
                mainDescText="Manage the mass"
                altDescText="Reach more, influence more, conquer more. Have fun"
                brandColor="#05a49a"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Packages;
