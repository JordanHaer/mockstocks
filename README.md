# MockStocks

### Project Overview

MockStocks is a full-stack web application that allows users to simulate buying and selling stocks and shares using fake money. This application provides a realistic virtual trading environment where users can explore the stock market, practice investment strategies, and track their performance without any financial risk.

### Key Features

- User Registration and Authentication: Users can create accounts, log in, and securely authenticate their identities to access the application's features and functionalities.

- Virtual Balances: Each user is assigned a virtual balance of fake money, which they can use to purchase stocks and shares. The application ensures that users cannot spend more than their available balance.

- Stock Market Data: The application integrates with external APIs to fetch real-time stock market data, including prices, historical data, and company information. Users can browse and search for stocks they are interested in.

- Buy and Sell Transactions: Users can execute buy and sell transactions using their virtual balances. The application validates the transactions to ensure that users have sufficient funds to make purchases.

- Portfolio Tracking: Users can view and manage their portfolio, which includes the stocks they have purchased, current holdings, past transactions, and overall performance. The application provides relevant information such as stock values, gains/losses, and graphical representations of portfolio performance over time.

### Technologies Used

#### Backend

- Node.js: A JavaScript runtime environment that powers the backend server.
- Express.js: A flexible web application framework for building robust APIs and handling HTTP requests.
- MongoDB: A NoSQL document database for storing user information, transactions, and balances.
- Mongoose: An object modeling tool for MongoDB, providing a straightforward way to interact with the database.
- External APIs: I will be using Polygon.io API. The application will intergrate with the Polygon.io API to fetch stock market data, including real-time quotes, historical data, and other financial information.
- Render: A cloud hosting platform for scalable and managed backend applications.

#### Frontend

- React.js: A popular JavaScript library for building user interfaces.
- React Router: A routing library for handling navigation and URL management in React applications.
- Axios: A promise-based HTTP client for making API requests from the frontend.
- Netlify: A platform for hosting frontend applications with easy deployment and continuous integration.

### License

This project is licensed under the MIT License.

The MIT License is a permissive open-source license that allows you to use, modify, and distribute the code for both commercial and non-commercial purposes. It provides you with the freedom to customize and adapt the project to suit your needs. However, it comes with no warranties or liabilities, and you must include the original license in any copies or derivatives of the project.
