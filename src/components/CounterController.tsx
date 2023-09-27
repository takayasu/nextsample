import { useState } from "react";

type CounterControllerProps = {
    incrementValue: number,
    changeIncrementValue: (value: number) => void,
};

const CounterController : (props: CounterControllerProps) => JSX.Element = (props: CounterControllerProps) => {
    const [incrementValue, setIncrementValue] = useState(props.incrementValue);

    const onChangeIncrementValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIncrementValue(Number(e.target.value));
        props.changeIncrementValue(Number(e.target.value));
    }

    return (
        <div className="mx-4">
            増分値：<input type="text" className="w-32 mx-4 mt-4 border-2" value={incrementValue} onChange={onChangeIncrementValue}/>
        </div>
    );
};

export default CounterController;
