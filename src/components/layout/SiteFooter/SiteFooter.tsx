import { ArrowUpRight } from 'lucide-react'
import styles from './SiteFooter.module.css'

export default function SiteFooter() {
  return <footer className={styles.footer}><div className={styles.inner}><div><p className={styles.title}>See it in your space.</p><p className={styles.copy}>Talk with the First Choice Flooring team in Saskatoon about the sample that caught your eye.</p></div><a className={styles.link} href="https://www.firstchoiceflooring.ca/contact-us" target="_blank" rel="noreferrer">Contact First Choice <ArrowUpRight size={16} aria-hidden="true" /></a><p className={styles.note}>Product details shown here are for concept demonstration and should be confirmed with the retailer.</p></div></footer>
}