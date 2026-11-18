import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Zuri Hair &amp; Beauty Studio</strong>
          <p>12 Admiralty Way, Lekki Phase 1, Lagos</p>
        </div>
        <div>
          <p>Mon-Sat: 9am - 7pm</p>
          <p>Sunday: 12pm - 5pm</p>
        </div>
        <div>
          <Link to="/services">Services</Link>
          <Link to="/contact">Book an appointment</Link>
        </div>
      </div>
      <p className="copyright">© {new Date().getFullYear()} Zuri Hair &amp; Beauty Studio. Sample project.</p>
    </footer>
  )
}
