export default function Button({children}){
    return(
        <>
         <button className="bg-emerald-600  text-white py-2 px-4 rounded font-medium  tracking-wider hover:bg-emerald-700" onClick={() => alert('Payment done!')}>
           {children}
         </button>
        </>
    )
}