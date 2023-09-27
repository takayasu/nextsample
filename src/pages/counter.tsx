import CounterView from "@/components/Counter";
import CounterController from "@/components/CounterController";

import { useState } from "react";

const CounterPage = () => {
    const initalVaule = 0;
    const [incrementValue, setIncrementValue] = useState(1);
    return (
        <>
        <CounterController incrementValue={incrementValue} changeIncrementValue={setIncrementValue} />
        <CounterView initalVaule={initalVaule} incrementValue={incrementValue} />
        </>
    );
};

export default CounterPage;