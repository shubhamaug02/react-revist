const Title = () => (<a href="/">
    <img 
        className= "logo"
        alt="logo"
        src="https://t4.ftcdn.net/jpg/02/75/70/03/360_F_275700347_09reCCwb7JBxTKiYQXsyri4riMKaHbj8.jpg" />
    </a>);


export default HeaderComponent = () => {
    return (<div className="header">
        <Title />
        <div className='nav-items'>
            <ul>
                <li>Name</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>);
};