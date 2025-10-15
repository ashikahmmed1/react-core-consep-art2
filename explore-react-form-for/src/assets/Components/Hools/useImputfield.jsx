// costoms hook
import { useState } from "react";

const useInputFild = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue)


    const handleFieldOnChange = e =>{
        setFieldValue(e.target.value);
    }

    return[fieldValue, handleFieldOnChange];

}

export default useInputFild;