import { useState } from 'react';
import { Button } from './button';

export const Counter = ({ bounds, ...props }) => {

    const min = bounds.min;
    const max = bounds.max;

    const findStart = () => {
        if (min > 0){
            return min;
        }
        if (max < 0){
            return max;
        }

        return 0;
    };

    const [count, setCount] = useState(findStart);

    const changeCounterLow = () => {
        if (count != min) {
            setCount(count - 1);
        }
    };

    const changeCounterHigh = () => {
        if (count != max) {
            setCount(count + 1);
        }
    };

    return (
        <div>
            <h2 className="text-9xl">{count}</h2>
            <div>
                <Button onClick={changeCounterLow}>Decrement</Button>
                <Button onClick={changeCounterHigh}>Increment</Button>
            </div>
        </div>
    );    

};