export default function Labels({message, size}){
    const labelClass = `text-${size}`
    //console.log(labelClass);

    return(
        <label className={labelClass}>
            {message}
        </label>
    )
}