import imgSrc from './assets/investment-calculator-logo.png';

function Header({ title, img }) {
    return (
        <>
            <header id="header">
                <img src={imgSrc} alt="Investment Calculator Logo" />
                <h1>{title}</h1>
            </header>
        </>
    );
}

export default Header;