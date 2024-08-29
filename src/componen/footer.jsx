import logo from '../assets/logo-dark.svg'

function footer(){
    return(
        <>
            <div className="footer">
                <img src={logo} alt="" />
                <div className='foot-nav'>
                    <ul>
                        <li>Beranda</li>
                        <li>Tentang</li>
                        <li>Layanan</li>
                        <li>Portofolio</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default footer