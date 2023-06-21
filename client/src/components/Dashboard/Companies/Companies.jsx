import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Companies.css";
import Company from "../Company/Company";

export default function Companies({ handleCompanyInfoID, handleTab }) {
  const [companies, setCompanies] = useState({});
  const getCompanies = async () => {
    const res = await axios.get(`https://mockstocks.onrender.com/companies`);
    setCompanies(res.data);
  };
  useEffect(() => {
    getCompanies();
  }, []);
  if (Object.keys(companies).length === 0) {
    return <div className="Companies-container"></div>;
  } else {
    return (
      <div className="Companies-container">
        <div className="Companies-content">
          {companies.map((company) => (
            <Company
              key={company._id}
              company={company}
              handleCompanyInfoID={handleCompanyInfoID}
              handleTab={handleTab}
            />
          ))}
        </div>
      </div>
    );
  }
}
