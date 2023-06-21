import "./FAQ.css";

export default function FAQ() {
  const questionsAnswers = [
    [
      "Does MockStocks cost money?",
      "No, MockStocks is completely free to use. Sign up without entering any of your financial information and start trading with your own virtual cash.",
    ],
    [
      "What stocks can I buy?",
      "You can purchase stocks from all Fortune 100 companies across the major US stock markets.",
    ],
    [
      "Is there a limit to the number of trades I can make?",
      "No, there are no limits on the number of trades you can make. Feel free to explore and practise different trading strategies.",
    ],
    [
      "Can I track the performance of my portfolio?",
      "Absolutely! You can view the value of your portfolio at any time, which allowing you to monitor your gains and losses as you buy and sell stocks.",
    ],
    [
      "Can I trade on weekends or holidays?",
      "No, you can only make trades during market trading hours, which are from 9:00 am to 4:30 pm GMT, Monday to Friday. However, you can access and review your portfolio at any time.",
    ],
    [
      "Is the market data in real-time?",
      "While the app provides realistic simulated market data, please note that it does not reflect real-time or actual market conditions. Stock prices are based on the closing prices of the previous trading day.",
    ],
  ];

  return (
    <div className="FAQ-section">
      <div className="FAQ-content">
        <h2>
          <img
            data-v-683546fc=""
            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkxIiBoZWlnaHQ9IjE5MCIgdmlld0JveD0iMCAwIDE5MSAxOTAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik05NS41NTE4IDBWMTg5LjU0IiBzdHJva2U9IiMzMzNBNTIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8cGF0aCBkPSJNMC43Njg1NTUgOTQuNzcwNUgxOTAuMzM1IiBzdHJva2U9IiMzMzNBNTIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPgo8L3N2Zz4K"
            alt="plus illustration"
            width="125px"
          />
          FAQs
        </h2>
        {questionsAnswers.map(([question, answer], index) => (
          <div key={index} className="QandA">
            <h3>{question}</h3>
            <p>{answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
