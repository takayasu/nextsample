import { useState } from "react";

export type CounterViewProps = {
    initalVaule: number,
    incrementValue: number,
}

const CounterView :(props: CounterViewProps) => JSX.Element = (props: CounterViewProps) => {

    const [count, setCount] = useState(props.initalVaule);

    const onIncrement = () => {
        setCount(count + props.incrementValue);
    };

    const onDecrement = () => {
        setCount(count - props.incrementValue);
    };

    return (
        <>
            <div className="w-32 m-4">
                <button className="w-8 h-8 m-1 border-4 text-2xl" onClick={onDecrement}><span className="text-2xl">-</span></button>
                <span className="text-2xl">{count}</span>
                <button className="w-8 h-8 m-1 border-4 text-2xl" onClick={onIncrement}>+</button>
            </div>
        </>
    )
};

export default CounterView;