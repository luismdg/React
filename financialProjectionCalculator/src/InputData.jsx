import { useState, useEffect } from "react";
import { calculateInvestmentResults } from "./util/investment";

function InputData({ setResults }) {
    const [initialInvestment, setInitialInvestment] = useState(15000);
    const [expectedReturn, setExpectedReturn] = useState(5.5);
    const [annualInvestment, setAnnualInvestment] = useState(900);
    const [duration, setDuration] = useState(1);

    useEffect(() => {

        const showResults = calculateInvestmentResults({
            initialInvestment: parseInt(initialInvestment),
            expectedReturn: parseInt(expectedReturn),
            annualInvestment: parseInt(annualInvestment),
            duration: parseInt(duration)
        })
        setResults(showResults)
    }, [initialInvestment, expectedReturn, annualInvestment, duration])

    return (
        <>
            <div id="user-input" className="input-group">
                <div>
                    <div>
                        <label htmlFor="val1">Initial Investment</label>
                        <input id="val1" type="number" value={initialInvestment} onChange={(event) => setInitialInvestment(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="val2">Expected Return</label>
                        <input id="val2" type="number" value={expectedReturn} onChange={(event) => setExpectedReturn(event.target.value)} />
                    </div>
                </div>

                <div>
                    <div>
                        <label htmlFor="val3">Annual Investment</label>
                        <input id="val3" type="number" value={annualInvestment} onChange={(event) => setAnnualInvestment(event.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="val4">Duration</label>
                        <input id="val4" type="number" value={duration} onChange={(event) => setDuration(event.target.value)} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InputData