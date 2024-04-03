const Footer = ()=>{
    return(
  
        <footer className="footer p-5 bg-[#2b2b37] flex justify-between text-[#848484] text-xs mt-10 bottom-0">
            <div className='w-11/12 md:w-4/5 flex  mx-auto justify-between items-center'>
                <div>copyright © {new Date().getFullYear()} All Rights Reserved.</div>
                <div>Email: <a href="mailto:admin@bslthemes.com">khanzeya63@gmail.com</a></div>
            </div>
        </footer> 

    )
}
export default Footer