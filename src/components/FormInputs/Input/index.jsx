import { colorsh } from "../../../utils"
import { iconosBtn } from "../../../utils"

export default function Input({id, name, color, theme, icon, type, maxlength, minlength, isRequired}){

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

    const inputValid = `valid:border-green-500 invalid:border-red-500`

    return(
        <div className={`flex border py-1 px-2 rounded-md ${inputClass} ${inputValid}`}>
            {icon ?
                <div className={`w-5 h-5 pt-[2px] mr-1`}>
                    {iconosBtn[icon.toUpperCase()]}
                </div>
            :
            <></>
            } 
            <input className={`focus:outline-none ${inputClass} shadow-none`}
                type={type}
                id={id ? id : name}
                name={name}
                placeholder={name}
                minLength={minlength ? minlength : '6'}
                maxLength={maxlength ? maxlength : '16'}
                autoComplete="off"
                required
            />
            
        </div>
    )
}