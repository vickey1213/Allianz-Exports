const Header = () => {
  return(
    <div className="header-container">
      <ul>
        <li>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-microsoft" viewBox="0 0 16 16" style={{marginRight:10,marginBottom:2}}><path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path></svg>
            Leader Board
          </a>
        </li>
        <li>
          <a href="">Historical Trading</a>
        </li>
        <li>
          <a href="">
            Historical Chart
          </a>
        </li>
        <li>
          <a href="">
            Scanners
          </a>
        </li>
        <li><a href="">Alerts</a></li>
        <li><a href="">Basic Bacttest</a></li>
        <li><a href="">Advanced Backtest</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">My Earnings</a></li>
      </ul>
    </div>
  )
}

export default Header;