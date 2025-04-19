import logo from '/src/assets/logo.svg';
import linkedinLogo from '/src/assets/linkedin-logo.svg';
import githubLogo from '/src/assets/github-mark.svg';

function LogoTile() {
    return (
        <div id="logo" className="tile">
            <img className="logo" src={logo} alt="Lala Logo"/>
            <p>
                A personal brand website<br/>
                by<br/>
                <strong>Alexander Summa</strong>
            </p>
            <p>
                <a href="https://www.linkedin.com/in/alexander-summa" target="_blank" aria-label="View LinkedIn profile"><img src={linkedinLogo} alt="LinkedIn Logo"/></a>
                <a href="https://github.com/dideldumthecat/lala-website-react" target="_blank" aria-label="View project on GitHub"><img src={githubLogo} alt="GitHub logo"/></a>
            </p>
        </div>
    );
}

export default LogoTile;
