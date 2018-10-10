import React from "react";
import Feature from "./Feature/Feature";
import feature1 from "../../../assets/images/feature1.jpg";
import feature2 from "../../../assets/images/feature2.jpg";
import feature3 from "../../../assets/images/feature3.jpg";

const Features = () => {
  return (
    <div className="Features">
      <div className="Features__header">
        <h1 className="Features__title">Drag and drop your creativity</h1>
        <h2 className="Features__subtitle">
          See why over 1,000,000 people have built emails at emails free.
        </h2>
      </div>
      <Feature
        title="Drag & Drop Editor"
        subtitle="Drag and drop entire rows or individual content elements. Drop
             images directly from your desktop. Clone and rearrange
              everything quickly."
        imgSrc={feature1}
        btnText="START DESIGNING"
      />
      <Feature
        title="Mobile Responsive"
        subtitle="Dont't worry about how your email will look: we use advanced algorithm to make your emails responsive on device of varios sizes"
        imgSrc={feature2}
        bgColor="#f6f9fc"
        btnText="GIVE IT A TRY"
        alternate
      />
      <Feature
        title="Beautiful templates"
        subtitle="Seriously!. I have not made any templates. This is just some random photos to fill up the space and improve the design"
        imgSrc={feature3}
        btnText="BROWSE THE CATALOG"
      />
    </div>
  );
};

export default Features;
