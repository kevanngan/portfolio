const Footer = () => {
    
  return (

    <footer className="site-footer">
        <p>&copy; {new Date().getFullYear()} Kevan Ngan</p>

        <div className="social-icons email">
            <a href="mailto:kevandngan@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/email-icon.png" alt="Email icon" />
            </a>
        </div>
        <div className="social-icons github">
            <a href="https://github.com/kevanngan" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/github-icon.svg" alt="GitHub icon" />
            </a>
        </div>
        <div className="social-icons linkedin">
            <a href="https://www.linkedin.com/in/kevanngan/" target="_blank" rel="noopener noreferrer">
                <img src="assets/icons/linkedin-icon.svg" alt="LinkedIn icon" />
            </a>
        </div>
    </footer>
  );
}

export default Footer