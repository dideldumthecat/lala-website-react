function Footer() {
    const version = import.meta.env.VITE_APP_VERSION || '000000';
    const shortVersion = version.slice(0, 6);

    return (
        <footer>© 2024-2026 The LALA - Crafted with care by Alexander Summa | View the code on <a href="https://github.com/dideldumthecat/lala-website-react" target="_blank">GitHub</a> | Version: [{shortVersion}]</footer>
    );
}

export default Footer;
