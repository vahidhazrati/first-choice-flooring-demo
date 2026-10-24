import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter'
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader'
import Reveal from '../../components/ui/Reveal/Reveal'
import { products } from '../../data/products'
import styles from './CatalogPage.module.css'

export default function CatalogPage() {
  return <div className={styles.page}><SiteHeader /><main>
    <section className={styles.hero}><div className={styles.heroCopy}><p className={styles.eyebrow}><span /> A sample-room idea from Saskatoon</p><h1>Good floors.<br /><em>Better at home.</em></h1><p className={styles.intro}>Scan a sample. Get to know the floor. Picture it in the rooms that make a house yours.</p><a className={styles.explore} href="#collections">Explore the collection <ArrowDown size={16} aria-hidden="true" /></a></div>
      <div className={styles.heroImage} aria-label="First Choice Flooring maple hardwood installation photograph"><img src={products[0].heroImage.src} alt={products[0].heroImage.alt} fetchPriority="high" /><span className={styles.imageNote}>Made for the rooms you live in</span><span className={styles.heroIndex}>01 <i /> 02</span></div><div className={styles.heroRail}><span>FIRST CHOICE FLOORING</span><span>SASKATOON, SK</span></div></section>
    <section className={styles.collections} id="collections"><div className={styles.sectionTop}><div><p className={styles.kicker}>THE DIGITAL SAMPLE ROOM</p><h2>Start with a closer look.</h2></div><p className={styles.sectionNote}>Two product-family concepts. Tap a sample to explore imagery, helpful context, and manufacturer resources.</p></div>
      <div className={styles.cards}>{products.map((product,index)=><Reveal key={product.id} className={styles.cardReveal}><article className={`${styles.card} ${styles[product.accent]}`}><Link className={styles.cardImage} to={product.path} aria-label={`Explore ${product.brand} ${product.name}`}><img src={product.heroImage.src} alt={product.heroImage.alt} loading="lazy" /><span className={styles.cardNumber}>0{index+1}</span><span className={styles.cardArrow}><ArrowUpRight size={19} aria-hidden="true" /></span></Link><div className={styles.cardBody}><p className={styles.cardEyebrow}>{product.brand} <span>/</span> {product.category}</p><h3><Link to={product.path}>{product.name}</Link></h3><p>{product.introduction}</p><Link className={styles.cardLink} to={product.path}>Explore this sample <ArrowRight size={16} aria-hidden="true" /></Link></div></article></Reveal>)}</div>
      <div className={styles.trustLine}><span>Thoughtful flooring, chosen in Saskatoon</span><span>Since 1981 <i /></span></div></section>
  </main><SiteFooter /></div>
}