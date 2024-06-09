export default function Button({children}){
    return(
        <>
         <button className="bg-[#3E826D] text-white py-2 px-4 rounded font-medium  tracking-wider" onClick={() => alert('Payment done!')}>
           {children}
         </button>
        </>
    )
}