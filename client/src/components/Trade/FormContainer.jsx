import axios from "axios";
import { useEffect, useState } from "react";
import SearchCompany from "./SearchCompany";
import Form from "./Form";
import CompanyInfo from "./CompanyInfo";
import { useNavigate } from "react-router-dom";

export default function FormContainer({ mockStocksUser }) {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({});
  const [action, setAction] = useState("buy");
  const [stockQuantity, setStockQuantity] = useState(0);
  const navigate = useNavigate();
  const handleCompany = async (id) => {
    const res = await axios.get(`https://mockstocks.onrender.com/company/${id}`);
    setCompany(res.data);
  };
  const handleAction = (e) => setAction(e.target.value);
  const handleStockQuantity = (e) => setStockQuantity(parseInt(e.target.value));
  const handleTrade = async () => {
    if (stockQuantity === 0) return;
    const body = { stockCode: company.stockCode, quantity: stockQuantity };
    const res = await axios.put(`https://mockstocks.onrender.com/user/${action}/${mockStocksUser._id}`, body);
    console.log(res);
    navigate("/dashboard/portfolio");
  };
  const getCompanies = async () => {
    const res = await axios.get(`https://mockstocks.onrender.com/companies`);
    setCompanies(res.data);
  };
  useEffect(() => {
    getCompanies();
  }, []);
  return (
    <div className="bg-white p-4">
      <SearchCompany companies={companies} handleCompany={handleCompany} />
      {Object.keys(company).length !== 0 && <CompanyInfo company={company} />}
      <Form handleAction={handleAction} handleStockQuantity={handleStockQuantity} handleTrade={handleTrade} />
    </div>
  );
}
