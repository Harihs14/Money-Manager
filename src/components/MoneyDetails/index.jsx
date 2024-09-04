// Write your code here
// import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props
  const balancecContainer = "p-8 mb-4 text-zinc-600 font-semibold rounded-md flex flex-row items-center";
  return (
    <div className="money-details-container">
      <div className={`${balancecContainer} bg-green-200`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="h-20 mr-12 hover:animate-pulse"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money">Rs {balanceAmount}</p>
        </div>
      </div>
      <div className={`${balancecContainer} bg-blue-200`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="h-20 mr-12  hover:animate-pulse"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money">Rs {incomeAmount}</p>
        </div>
      </div>
      <div className={`${balancecContainer} bg-violet-200`}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="h-20 mr-12 hover:animate-pulse"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money">Rs {expensesAmount}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
