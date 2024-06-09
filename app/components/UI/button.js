export default function Button({children, handleClick}){
    return(
        <>
         <button className="bg-[#3E826D] text-white py-2 px-4 rounded font-medium  tracking-wider" onClick={handleClick}>
           {children}
         </button>
        </>
    )
}