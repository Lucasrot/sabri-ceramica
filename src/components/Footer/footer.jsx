import Logo from '../../asset/img/logor.png';
import './footer.css'


export const Footer = () => {
    return (
        <footer>
            <div className="footer-izquierda">
                <a href="#Home">
                    <img src={Logo} alt="Logo" className="logo-footer" />
                </a>
            </div>
            <div className="footer-derecha">
                <h3 className='display-6'>Redes</h3>
                <div className="iconos">
                    <a href="https://www.facebook.com/profile.php?id=100081178478375&locale=es_LA" target="_blank" rel="noopener noreferrer" className="ico-facebook">
                        <i className="fab fa-facebook-square"></i>
                    </a>
                    <a href="https://www.instagram.com/ceramicasabri/" target="_blank" className="ico-instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </footer>
    )
}
