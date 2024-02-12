import { colorsh } from "../../../utils"

export default function Selection({color, theme, items, name}){

    const selectClass = `border rounded-md px-2 py-1 cursor-pointer
                        ${color ? colorsh.BUTTON[color].BG : colorsh.BUTTON[theme].BG} 
                        ${color ? colorsh.BUTTON[color].TEXT : colorsh.BUTTON[theme].TEXT} 
                        ${color ? colorsh.BUTTON[color].HOVERBG : colorsh.BUTTON[theme].HOVERBG}
                        ${color ? colorsh.BUTTON[color].BORDER : colorsh.BUTTON[theme].BORDER}
                        ${color ? colorsh.BUTTON[color].HOVERBORDER : colorsh.BUTTON[theme].HOVERBORDER}
                        ${color ? colorsh.BUTTON[color].HOVERTEXT : colorsh.BUTTON[theme].HOVERTEXT}
                        ${colorsh.BUTTON.SHADOWIN}
                        ${colorsh.BUTTON.SHADOWOUT}`

    return(
        <select className={selectClass} name={name}>
            {items.length > 0 ?
                <>
                    <option >Select an option</option>
                    {items.map(i =>
                            <option  className="cursor-pointer" key={i.id} value={i.value}>{i.name}</option>
                    )}
                </>
            :
                <option>Select an option</option>
            }
        </select>
    )
}