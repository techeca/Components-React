import { iconosBtn, colorsh } from "../../../utils"

export default function Btn({id, name, type, icon, color, theme, onClick}){
 
    const botonClass = `border py-1 px-2 rounded-md flex items-center
                        ${name ? 'gap-1' : 'gap-0'}
                        ${color ? colorsh.BUTTON[color].BG : colorsh.BG} 
                        ${color ? colorsh.BUTTON[color].TEXT : colorsh.TEXT} 
                        ${color ? colorsh.BUTTON[color].HOVERBG : colorsh.HOVERBG}
                        ${color ? colorsh.BUTTON[color].BORDER : colorsh.BORDER}
                        ${color ? colorsh.BUTTON[color].HOVERBORDER : colorsh.HOVERBORDER}
                        ${color ? colorsh.BUTTON[color].HOVERTEXT : colorsh.HOVERTEXT}
                        ${colorsh.BUTTON.SHADOWIN}
                        ${colorsh.BUTTON.SHADOWOUT}`

    return(
        <button className={botonClass} 
            name={name} 
            onClick={onClick ? () => onclick : () => console.log(`Click on ${id ? id : name} button`)}>
            {icon ? 
                <div className="w-5 h-5">
                    {iconosBtn[icon]}
                </div>    
            :<></>
            }
            <a className="">
                {name}
            </a>
        </button>
    )
}