import PropTypes from 'prop-types'
import NumberFields from "../ui/NumberFields"
const InputSection = ({inputs, handleInputFields}) => {
    return (
            <div
                style={{
                    width: "100%",
                    padding: '0.5rem 1rem',
                    backgroundColor: '#efefef',
                    borderRadius: '0.10rem',
                }}
            >
                <p>Inputs</p>
                <NumberFields  value= {inputs.a} name='a' onChange={handleInputFields} />
                <NumberFields  value= {inputs.b} name='b' onChange={handleInputFields} />
            </div>
    )
}

InputSection.prototype = {
    inputs: PropTypes.shape({
        a: PropTypes.number.isRequired,
        b: PropTypes.number.isRequired,
    }).isRequired,

    handleInputFields: PropTypes.func.isRequired,
}
export default InputSection