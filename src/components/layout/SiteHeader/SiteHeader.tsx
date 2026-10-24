import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import styles from './SiteHeader.module.css'

export default function SiteHeader() {
  const { pathname } = useLocation()
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.wordmark} to="/" aria-label="First Choice Flooring concept catalog"><span className={styles.mark} aria-hidden="true">FC</span><span>First Choice<span className={styles.wordmarkSecond}> Flooring</span></span></Link>
        <nav className={styles.nav} aria-label="Main navigation">
          {pathname === '/' ? <a href="https://www.firstchoiceflooring.ca/contact-us" target="_blank" rel="noreferrer">Visit First Choice <ArrowUpRight size={15} aria-hidden="true" /></a> : <Link to="/"><ArrowLeft size={15} aria-hidden="true" /> Back to catalog</Link>}
        </nav>
        <span className={styles.demo}><span /> Concept demo</span>
      </div>
    </header>
  )
}