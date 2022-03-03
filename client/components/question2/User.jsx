import { useState } from 'react';

export const User = ({ user, ...props }) => {

    if (user.isAdmin) {
        return (
            <div className="p-4 border-2 rounded">
                <h2 className="">{user.name}</h2>
                <h2 className="">{user.email}</h2>
            </div>
        );
    };

    return (
        <div className="p-4 border-2 rounded">
            <h2 className="">{user.name}</h2>
            <h2 className="">{user.email}</h2>
        </div>
    );
};