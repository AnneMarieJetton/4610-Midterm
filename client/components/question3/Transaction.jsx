import { useState } from 'react';

export const Transaction = ({transaction, ...props}) => {

    return (
        <div className="p-4 border-2 rounded">
            <h2>Sent:</h2>
            <h2>{transaction.fromUser.name}</h2>
            <h2>Recieved:</h2>
            <h2>{transaction.toUser.name}</h2>
            <h2>Amount:</h2>
            <h2>{transaction.amount}</h2>
        </div>
    );
}