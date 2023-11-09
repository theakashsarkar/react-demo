/**
 * DONE: Handle user input fields
 * DONE: Handle operations
 * DONE: Handle List of histories
 * DONE: Render History List
 * DONE: Restore the history 
 *
 */
import { useState } from "react";
import NumberFields from "./components/ui/NumberFields";
import Button from './components/ui/Button'
import InputSection from "./components/inputs/inputSection";
import OperationSection from "./components/operations/OperationSection";

function* generatorId() {
   let id = 1;
   while(true) {
    yield id++;
   }
}
const getId = generatorId();
 
const InitialInputState = {
    a: 0, 
    b: 0,
}
const App = () => {
    const [inputState, setInputState] = useState({...InitialInputState})
    const [result, setResult] = useState(0);
    const [histories, setHistories] = useState([]);
    const [restoreHistories, setRestoreHistories] = useState(null);
    const handleInputFields = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value)
        });
    }

    const handleClearOps = () => {
        setInputState({ ...InitialInputState });
        setResult(0);
    }

   

    // const handleFieldsA = (e) =>
    // {
    //     setInputState({
    //         ...inputState,
    //         a: parseInt(e.target.value)
    //     })
    // }
    // const handleFieldsB = (e) =>
    // {
    //     setInputState({
    //         ...inputState,
    //         b: parseInt(e.target.value)
    //     })
    // }

    // const handleInputFields = (key, value) => {
    //     setInputState({
    //         ...inputState,
    //         [key]: value
    //     })
    // }

    // const handleInputFields = (inp) => {
    //     setInputState({
    //         ...inputState,
    //         ...inp
    //     })
    // }
    const handleArithmeticOperations = (operations) => {
        if (!inputState.a || !inputState.b) {
            alert('Invalid Input');
            return;
        }
        const operatinsStr = `${inputState.a} ${operations} ${inputState.b}`
        const f = new Function(
            'operatins',
            `
                return ${operatinsStr}
            `
        );
        const result = f(operations);
        setResult(result);
        
        const historyItem = {
            id: getId.next().value,
            input: inputState,
            operations,
            result,
            date: new Date(),
        }
        setHistories([historyItem, ...histories])
    }

    const restorHandleBtn = (historyItem) => {
        setInputState({...historyItem.input});
        setResult(historyItem.result)
        setRestoreHistories(historyItem);
        // handleArithmeticOperations(historyItem.operations);
    }
    return (
        <div style={{ width: '50%', margin: '0 auto'}}>
            <h1>Result: {result}</h1>
            <InputSection inputs={inputState} handleInputFields={handleInputFields} />
            <OperationSection handleArithmeticOperations={handleArithmeticOperations} handleClearOps={handleClearOps} />
            <div>
                <p>History</p>
                {histories.length === 0 ? (
                    <p>
                        <small>Thers in no History</small>
                    </p>
                ) : (
                    <ul>
                        {histories.map((historyItem) => (
                        
                        ))}  
                    </ul> 
                )}
            </div>
        </div>
    )
}
export default App;