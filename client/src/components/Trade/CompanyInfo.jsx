import Chart from "./Chart";

export default function CompanyInfo({ company }) {
  return (
    <div className="mt-4">
      <h2 className="text-xl">
        {company.companyName} &#183; {company.stockCode}
      </h2>
      <Chart company={company} />
    </div>
  );
}
