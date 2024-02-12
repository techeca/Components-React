import { useState } from "react"
import { colorsh } from "../../../utils"
import { iconosBtn } from "../../../utils"

export default function Input({id, name, color, theme, icon, type, maxlength, minlength, isRequired, pattern, evtSetValue, label, placeholder}){

    const [inputValue, setInputValue] = useState('')
    const [isValid, setIsValid] = useState('wait') //true, false, wait 

    const inputValues = {
        'name': name,
        'color': color,
        'theme': theme,
        'icon': icon,
        'type': type
    }

    const inputClass = `${color ? colorsh.BUTTON[color].BG : colorsh.BUTTON[theme].BG} 
                        ${color ? colorsh.BUTTON[color].TEXT : colorsh.BUTTON[theme].TEXT}
                        ${color ? colorsh.BUTTON[color].BORDER : colorsh.BUTTON[theme].BORDER}
                        ${color ? colorsh.BUTTON[color].HOVERBORDER : colorsh.BUTTON[theme].HOVERBORDER}
                        ${color ? colorsh.BUTTON[color].HOVERTEXT : colorsh.BUTTON[theme].HOVERTEXT}
                        ${colorsh.BUTTON.SHADOWIN}
                        ${colorsh.BUTTON.SHADOWOUT}`

    const inputValid = `valid:border-green-900/50 valid:text-green-800/90 valid:bg-green-900/30`
    const inputInvalid = `invalid:border-red-900/50 invalid:text-red-800/90 invalid:bg-red-900/30`

    const PATTERNS = {
        TEXT:'',
        NUMBER:'',
        EMAIL:'',
        PHONE:`[0-9]${minlength, maxlength}`,
    }

    function updateValue(e){
        if(e === ''){
            setIsValid('wait')
        }
        if(e !== '' && e.length >= minlength && e.length <= maxlength){
            setIsValid(true) 
        }else{
            setIsValid(false)    
        }
        /*e === '' ? setIsValid('wait') :
        e !== '' && e.length >= minlength && e.length <= maxlength ? setIsValid(true) :
        setIsValid(false)*/
        setInputValue(e)
        if(evtSetValue){
            evtSetValue(e)
        }
    }

    return(
                <div className={`${label ? '': ''}`}>
                    {icon ?
                        <div className={`absolute w-5 h-5 ${label ? 'mt-[35px]': 'mt-[7px]'} ml-2.5 ${isValid === 'wait' ? color ? colorsh.BUTTON[color].TEXT : colorsh.BUTTON[theme].TEXT : isValid ? 'text-green-800/90' : 'text-red-800/90'}`}>
                            {iconosBtn[icon.toUpperCase()]}
                        </div>
                    :
                    <></>
                    }
                    {label ?
                        <label className="absolute ml-2" for={id ? id : name}>
                            {label ? label : name}
                        </label>
                    :
                    <></>
                    }
                    <div className={`${label ? 'pt-7': ''}`}>
                        <input className={`rounded-md py-1 ${icon ? 'pl-9 pr-2' : 'px-2'} ${label ? '': ''} border focus:outline-none ${isValid === 'wait' ? inputClass : isValid ? inputValid : inputInvalid}`}
                            onChange={(e) => updateValue(e.target.value)}
                            type={type}
                            id={id ? id : name}
                            name={name}
                            placeholder={placeholder ? placeholder : name}
                            minLength={minlength ? minlength : ''}
                            maxLength={maxlength ? maxlength : ''}
                            autoComplete="off"
                            
                        />
                    </div>
                    
                </div>
    )
}