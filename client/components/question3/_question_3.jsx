import { useState, useContext, useEffect } from 'react';
//import { useEffect } from 'react/cjs/react.production.min';
import { ApiContext } from '../../utils/api_context';
import { Transaction } from './Transaction';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [transactionContents, setTransactionContents] = useState('');

  useEffect(async () => {
    const { transactions } = await api.get('/transactions');
    setLoading(false);
    setTransactions(transactions);
  }, []);

  if (loading) return <div>...loading{transactions}</div>;

  return (
    <div>
      {transactions.map((aTransaction) => (
        <div key={aTransaction.id}>
          <Transaction transaction={aTransaction} />
        </div>
      ))}
    </div>
  );

};
