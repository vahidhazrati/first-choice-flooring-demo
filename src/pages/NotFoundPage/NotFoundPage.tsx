import { Link } from 'react-router-dom'
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter'
import styles from './NotFoundPage.module.css'

export default function NotFoundPage() {
  return <div className={styles.page}><SiteHeader /><main className={styles.main}><p>FIRST CHOICE FLOORING · CONCEPT DEMO</p><h1>That sample isn’t<br />on this shelf.</h1><Link to="/">Return to the catalog</Link></main><SiteFooter /></div>
}