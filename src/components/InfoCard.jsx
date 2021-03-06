import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying: <br />
      Add {isIncome ? 'Income ' : 'Expense '}
      for {isIncome ? '#50000 ' : '#5000 '} 
      in Category {isIncome ? 'Salary ' : 'Food '} 
      for {isIncome ? 'Today ' : 'Next Week '}
    </div>
  )
}

export default InfoCard;
