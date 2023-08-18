import { useState } from "react";

export default function SearchCompany({ companies, handleCompany }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value.trim() === "") {
      setSearchResults([]);
      return;
    }
    const filteredResults = companies.filter(
      (company) =>
        company.companyName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        company.stockCode.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  };
  const searchCompany = (id) => {
    handleCompany(id);
    setSearchResults([]);
    setSearchTerm("");
  };
  return (
    <>
      <h2 className="mb-2">Stock Code</h2>
      <div className="">
        <div className="relative w-2/3">
          <input
            type="text"
            className="z-20 block w-full  border  border-gray-300  bg-gray-50 p-2.5 text-sm text-gray-900  focus:outline-none"
            placeholder="Search Stock Code/Company Name"
            required
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="absolute right-0 top-0 border border-blue-700 bg-blue-700 p-2.5 text-sm font-medium text-white hover:bg-blue-800"
            onClick={() => {
              if (searchResults.length === 1) {
                searchCompany(searchResults[0]._id);
              }
            }}
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            <span className="sr-only">Search</span>
          </button>
          <ul className="absolute  z-20 max-h-[205px] w-[calc(100%-42px)] min-w-max overflow-y-auto rounded-b-xl bg-white shadow-2xl">
            {searchResults.map((company) => (
              <li
                key={company.stockCode}
                className=" cursor-pointer overflow-x-auto border-b p-2 last:border-b-0 hover:bg-slate-200 "
                onClick={() => searchCompany(company._id)}
              >
                <span className="inline-block w-[100px] pl-2 font-bold">{company.stockCode}</span>
                <span className="">{company.companyName}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
