export default function Heading({children}){
    return(
        <>
          <h1 className="text-2xl flex items-center mb-3 font-light">
          {children}
        </h1>
        </>

    )
}