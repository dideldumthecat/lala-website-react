import logo from '/src/assets/logo.svg';
import linkedinLogo from '/src/assets/linkedin-logo.svg';
import githubLogo from '/src/assets/github-mark.svg';

function LogoTile() {
    return (
        <div id="logo" className="tile">
            <img className="logo" src={logo} alt="Lala Logo"/>
            <p>
                A personal brand experiment<br/>
                by<br/>
                Alexander Summa
            </p>
            <p>
                <a href="https://www.linkedin.com/in/alexander-summa" target="_blank"><img src={linkedinLogo} alt="LinkedIn Logo"/></a>
                <a href="https://github.com/dideldumthecat/lala-website-react" target="_blank"><img src={githubLogo} /></a>
            </p>
        </div>
    );
}

export default LogoTile;
