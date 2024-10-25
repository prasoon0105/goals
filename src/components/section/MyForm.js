import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyForm() {
  return (
    <form className="p-3">
      {/* Total Amount Input */}
      <div className="form-group">
        <label htmlFor="totalAmount">Total Amount</label>
        <input type="number" className="form-control" id="totalAmount" placeholder="Enter amount" />
      </div>

      {/* Frequency Radio Buttons */}
      <div className="form-group">
        <label>Frequency</label>
        <div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="frequency" id="monthly" value="month" />
            <label className="form-check-label" htmlFor="monthly">Monthly</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="frequency" id="weekly" value="week" />
            <label className="form-check-label" htmlFor="weekly">Weekly</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="frequency" id="yearly" value="year" />
            <label className="form-check-label" htmlFor="yearly">Yearly</label>
          </div>
        </div>
      </div>

      {/* Reach Date Picker */}
      <div className="form-group">
        <label htmlFor="reachDate">Reach Date</label>
        <input type="date" className="form-control" id="reachDate" />
      </div>

      {/* Interest Rate Input */}
      <div className="form-group">
        <label htmlFor="interestRate">Interest Rate (%)</label>
        <input type="number" className="form-control" id="interestRate" placeholder="Enter interest rate" />
      </div>

      {/* Confirm Button */}
      <button type="submit" className="btn btn-primary mt-2">Confirm</button>
    </form>
  );
}

export default MyForm;
