import PropTypes from 'prop-types'

const NumberFields = ({ value, onChange, name }) => {
    const  style = {
        padding: '0.25rem 1rem',
        borderRadius: '0.1rem',
        border: '1px solid gray',
        background: '#fff',
        outline: 'none',
    }
    return (
        <input style={style} type="number" value={ value } onChange={onChange} name={name}/>
    )
};
NumberFields.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default NumberFields