import {React , useState, useEffect} from 'react';

 const Calculator = () => {
    const [resultValue,setResultValue] = useState(0);
    const [num1,setNum1] = useState(0);
    const [num2,setNum2] = useState(0);
    const [operation,setOperation] = useState('+');

    useEffect(() => {
        switch(operation) {
            case '+':
                setResultValue(parseInt(num1) + parseInt(num2));
                break;
            case '-':
                setResultValue(num1 - num2);
                break;
            case '*':
                setResultValue(num1 * num2);
                break;
            case '/':
                setResultValue(num1 / num2);
                break;
            default:
                setResultValue(0);    
                                         
        }
    },[num1,num2,operation]);

    return (
        <div className='calcApp'>
            Operand 1 : 
            <input value={num1} onChange={(e) => {
                setNum1(e.target.value);
            }}>
            </input>

            Operation: 
            <select value={operation}
                    onChange={(e) => setOperation(e.target.value)}>
                        <option value= '+'> + </option>
                        <option value= '-'> - </option>
                        <option value= '*'> * </option>
                        <option value= '/'> / </option>
                    </select>
            Operand 2:
            <input value={num2} onChange = {(e) => {
                setNum2(e.target.value);
            }}/>

            {resultValue !== null && <p>Result: {resultValue}</p>}


        </div>
    );

};

export default Calculator;
