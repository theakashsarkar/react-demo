
const InputField = ({type = "number" , name , value, handleInputFields}) => {
    return (
        <>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleInputFields}
             />
        </>
    )

}

export default InputField;