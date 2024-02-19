import { useState } from "react"
import { colorsh } from "../../../utils"
import { iconosBtn } from "../../../utils"

export default function Input({id, name, color, theme, icon, type, maxlength, minlength, isRequired, pattern, evtSetValue, label, placeholder, invalidMessage}){

    const [inputValue, setInputValue] = useState('')
    const [validationMessage, setValidationMessage] = useState('Please fix the input')
    const [isValid, setIsValid] = useState('wait') //true, false, wait 

    const inputValues = {
        'name': name,
        'color': color,
        'theme': theme,
        'icon': icon,
        'type': type
    }

    const inputClass = `${color ? colorsh.BUTTON[color].BG : colorsh.BG} 
                        ${color ? colorsh.BUTTON[color].TEXT : colorsh.TEXT}
                        ${color ? colorsh.BUTTON[color].BORDER : colorsh.BORDER}
                        ${color ? colorsh.BUTTON[color].HOVERBORDER : colorsh.HOVERBORDER}
                        ${color ? colorsh.BUTTON[color].HOVERTEXT : colorsh.HOVERTEXT}
                        ${colorsh.BUTTON.SHADOWIN}
                        ${colorsh.BUTTON.SHADOWOUT}`

    const inputValid = `valid:border-green-900 valid:text-green-700`
    const inputInvalid = `invalid:border-red-900 invalid:text-red-700`

    const PATTERNS = {
        TEXT:'',
        NUMBER:'',
        EMAIL:'',
        PHONE:`[0-9]{3,3}-[0-9]{${minlength, maxlength}}`,
    }

    function updateValue(e){
        //console.log(e);
        //console.log(isNaN(e.valueAsNumber));        
        if(e.textLength === 0 && type === 'text'){
            setIsValid('wait')
        }else{
            e.validity.valid ? setIsValid(true) : setIsValid(false)
        }    

        setInputValue(e.value)
        if(evtSetValue){
            evtSetValue(e.value)
        }
    }

    function numberValidation(e){
        //console.log(e.target.validity.badInput);
        //console.log(e.target.textLength);
        //console.log(e);
        return e.target.textLength === 0 && !e.target.validity.badInput ? setIsValid('wait') : e.target.validity.badInput ? setIsValid(false) : setIsValid(true)
        //return e.target.textLength === 0 ? setIsValid('wait') : e.target.validity.badInput ? setIsValid(false) : setIsValid(true)
    }

    return(
            <div className={`${label ? '' : ''}`}>
                {icon ?
                    <div className={`absolute w-5 h-5 ml-2.5 
                                    ${label ? 'mt-[35px]': 'mt-[7px]'} 
                                    ${isValid === 'wait' ? colorsh.TEXT : isValid ? 'text-green-700' : 'text-red-700'}`}>
                        {iconosBtn[icon.toUpperCase()]}
                    </div>
                :
                <></>
                }
                {label ?
                    <label className="absolute ml-2">
                        {label ? label : name}
                    </label>
                :
                   <></>
                }
                <div className={`${label ? 'pt-7': ''} flex flex-col`}>
                    {type === 'number' ? 
                        <input className={`py-1 focus:outline-none border rounded-md ${icon ? 'pl-9 pr-2' : 'px-2'} ${isValid === 'wait' ? inputClass : isValid ? inputValid : inputInvalid}`}
                            min={0} 
                            max={999999999}
                            onInput={e => numberValidation(e)}
                            
                            type={type}
                            id={id ? id : name}
                            name={name}
                            placeholder={placeholder ? placeholder : name}
                        />
                    :
                        <input className = {`py-1 focus:outline-none border rounded-md ${icon ? 'pl-9 pr-2' : 'px-2'} ${isValid === 'wait' ? inputClass : isValid ? inputValid : inputInvalid}`}
                            onChange={(e) => updateValue(e.target)}
                            type={type}
                            id={id ? id : name}
                            name={name}
                            placeholder={placeholder ? placeholder : name}
                            minLength={minlength ? minlength : ''}
                            maxLength={maxlength ? maxlength : ''}
                            autoComplete="off"
                        />
                    }
                    {invalidMessage ? 
                        <label className={`mt-1 ml-2 text-red-800/90`}>
                            {!isValid ? invalidMessage : <></>}
                        </label>
                    :
                    <></>    
                    }
                </div>
                    
            </div>
    )
}