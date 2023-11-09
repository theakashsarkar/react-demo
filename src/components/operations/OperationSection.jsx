import PropTypes from 'prop-types';
import shortid from "shortid";
import Button from "../ui/Button"
const OperationSection = ({ handleArithmeticOperations, handleClearOps}) => {

    const operations = [
        {
            id: shortid.generate(),
            text: '+',
            onClick: () => handleArithmeticOperations('+')
        },
        {
            id: shortid.generate(),
            text: '-',
            onClick: () => handleArithmeticOperations('-')
        },
        {
            id: shortid.generate(),
            text: '*',
            onClick: () => handleArithmeticOperations('*')
        },
        {
            id: shortid.generate(),
            text: '/',
            onClick: () => handleArithmeticOperations('/')
        },
        {
            id: shortid.generate(),
            text: 'clear',
            onClick: () => handleClearOps,
        }
    ]

    return (
        <div style={{ display: 'flex', gap: '0.5rem'}}>
            <p>Operations</p>
            {operations.map(ops => <Button key={ops.id} text={ops.text} onClick={ops.onClick} />)}
        </div>
    )
}

OperationSection.prototype = {
    handleArithmeticOperations : PropTypes.func.isRequired,
    handleClearOps : PropTypes.func.isRequired,
}

export default OperationSection;