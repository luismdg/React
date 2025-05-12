import { formatter } from "./util/investment";

function TableData({ results }) {
    return (
        <>
            <table id="result">
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Investment Value</th>
                        <th>Interest (Year)</th>
                        <th>Total Interest</th>
                        <th>Investment Capital</th>
                    </tr>
                </thead>

                <tbody>
                    {results.map((item, index) => (
                        <tr key={index}>
                            <td>{item.year}</td>
                            <td>{formatter.format(item.valueEndOfYear)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.interest)}</td>
                            <td>{formatter.format(item.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default TableData;