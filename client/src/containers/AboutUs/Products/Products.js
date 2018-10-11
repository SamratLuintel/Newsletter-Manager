import React from "react";
import PackageCard from "../../../components/PackageCard/PackageCard";
import icoPro from "../../../assets/images/ico-pro.png";

const Products = () => {
  return (
    <div className="Products">
      <div className="Products__header">
        <h1 className="Products__header__title">LOVE EMM and want more?</h1>
        <h2 className="Products__header__subtitle">
          If you like the free version of our editor, you may want to upgrade
          to.
        </h2>
      </div>
      <div className="container Products__Package-container">
        <div className="col-md-6">
          <PackageCard
            imgSrc={icoPro}
            bannerText="DESIGN"
            edition="PRO"
            subtitle="FOR FREELANCERS,TEAMS AND AGENCIES"
            mainDescText="Save, edit, search, organize. "
            altDescText="Cut down on email production time & cost."
            brandColor="#8a3b8f"
          />
        </div>
        <div className="col-md-6">
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
  );
};

export default Products;
