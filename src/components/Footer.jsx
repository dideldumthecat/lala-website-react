function Footer() {
    const version = import.meta.env.VITE_APP_VERSION || '000000';
    const shortVersion = version.slice(0, 6);

    const address1 = import.meta.env.VITE_ADDRESS_1 || '';
    const address2 = import.meta.env.VITE_ADDRESS_2 || '';
    const email = import.meta.env.VITE_EMAIL || '';

    return (
        <footer>
            <div className="footer-info">
                © 2024-2026 Alexander Summa | Version {shortVersion}
            </div>

            <div className="footer-legal">
                <details className="toggle">
                    <summary>Impressum</summary>
                    <div className="content">
                        <h3>Impressum</h3>
                        <p>Alexander Summa<br />
                        {address1}<br />
                        {address2}
                        </p>

                        <h3>Kontakt</h3>
                        <p>E-Mail: {email}</p>

                        <h3>Redaktionelle Verantwortlichkeit gemäß § 18 Absatz 2 MStV</h3>
                        <p>Alexander Summa</p>
                    </div>
                </details>
            </div>
        </footer>
    );
}

export default Footer;
