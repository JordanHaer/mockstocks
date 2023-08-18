export default function Balance({ USDBalance }) {
  return (
    <ul className="flex text-white mb-4">
      <li className="border-r border-white pr-4">
        <span className="block">Account Value: </span>
        {USDBalance}
      </li>
      <li className="pl-4">
        <span className="block">Cash: </span>
        {USDBalance}
      </li>
    </ul>
  );
}
