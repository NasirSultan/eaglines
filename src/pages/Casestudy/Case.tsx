import React, { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Case1 from "@/components/casestudy/case";
import Case2 from "@/components/casestudy/fortfolio";
import Case3 from "@/components/casestudy/Business";
const CaseStudy = () => {
  const [caseTitle, setCaseTitle] = useState("E-commerce SEO");

  useEffect(() => {
    const storedTitle = localStorage.getItem("caseTitle");
    if (storedTitle) {
      setCaseTitle(storedTitle);
    }
  }, []);

  return (
    <div className="">
      <Navigation />

      {caseTitle === "E-commerce SEO" && <Case1 />}
      {caseTitle === "Company Portfolio SEO" && <Case2 />}
            {caseTitle === "Business SEO" && <Case3 />}

      <Footer />
    </div>
  );
};

export default CaseStudy;