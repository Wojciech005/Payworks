export default function Card({children}){
    return(
        <>
        <div className="w-full bg-white rounded shadow mt-5 p-3 md:p-6">
            {children}
        </div>
        </>
    )
}