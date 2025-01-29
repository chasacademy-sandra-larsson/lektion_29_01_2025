

type HeaderProps = {
    logo: string;
    title: string;
    links: string[];
}


function Header({logo, title, links}: HeaderProps) {


    return(
        <header>
            <img src={logo} alt="Company logo"/>
            <h1>{title}</h1>
            <nav>
                {links.map((link) => {
                    return (
                    <a 
                    key={link}
                    href={link}> 
                      {link}
                    </a>
                    )
                })}
            </nav>
        </header>

    )
}

export default Header;