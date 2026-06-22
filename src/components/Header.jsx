import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <img src="/images/logo_airde.png" alt="AIRDE Academy" className="brand-mark" />
          <div>
            <div className="brand-name">AIRDE ACADEMY</div>
            <div className="brand-tagline">Engineering Excellence Through Intelligence</div>
          </div>
        </div>
        <div className="powered-badge">Powere by ChatGPT</div>
      </div>
    </header>
  )
}

export default Header
