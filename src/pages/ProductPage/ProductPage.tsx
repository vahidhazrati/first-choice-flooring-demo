import { ArrowUpRight, FileText } from 'lucide-react'
import type { MouseEvent } from 'react'
import type { Product } from '../../types/product'
import ProductGallery from '../../components/product/ProductGallery/ProductGallery'
import SiteFooter from '../../components/layout/SiteFooter/SiteFooter'
import SiteHeader from '../../components/layout/SiteHeader/SiteHeader'
import Reveal from '../../components/ui/Reveal/Reveal'
import styles from './ProductPage.module.css'

export default function ProductPage({ product }: { product: Product }) {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return <div className={`${styles.page} ${styles[product.accent]}`}><SiteHeader /><main>
    <section className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{product.brand} <span>/</span> {product.category}</p>
        <p className={styles.family}>{product.familyLabel}</p>
        <h1>{product.name}</h1>
        <p className={styles.introduction}>{product.introduction}</p>
        <nav className={styles.sectionNav} aria-label="Product page sections">
          <a href="#photos" onClick={(event) => scrollToSection(event, 'photos')}>Photos</a>
          <a href="#product-information" onClick={(event) => scrollToSection(event, 'product-information')}>Product information</a>
          <a href="#manufacturer-resources" onClick={(event) => scrollToSection(event, 'manufacturer-resources')}>Manufacturer resources</a>
        </nav>
      </div>
      <div className={styles.heroImage}><img src={product.heroImage.src} alt={product.heroImage.alt} fetchPriority="high" /><span className={styles.imageCredit}>{product.heroImage.caption} <span>·</span> {product.heroImage.credit}</span></div>
    </section>
    <section className={styles.details} id="photos"><div className={styles.sectionHeading}><div><p className={styles.kicker}>THE MATERIAL, IN CONTEXT</p><h2>See the details.</h2></div><p className={styles.headingNote}>A closer look at the family, with source-labelled imagery and information you can take back to the sample.</p></div>
      <div className={styles.galleryLayout}><ProductGallery images={product.gallery} accent={product.accent} /><div className={styles.galleryAside}><span className={styles.asideNumber}>{String(product.gallery.length).padStart(2, '0')} PHOTOS</span><p>Good flooring is more than a colour chip. Explore each image, then see the information that is confirmed for this product family.</p><a href={product.heroImage.sourceUrl} target="_blank" rel="noreferrer">View original source <ArrowUpRight size={14} aria-hidden="true" /></a></div></div></section>
    <Reveal><section className={styles.highlights} aria-labelledby="highlights-title"><div className={styles.highlightsIntro}><p className={styles.kicker}>WHY THIS FAMILY</p><h2 id="highlights-title">A few things<br />worth knowing.</h2><span className={styles.accentRule} /></div><div className={styles.highlightList}>{product.highlights.map((highlight,index)=><article className={styles.highlight} key={highlight.title}><span className={styles.highlightNumber}>0{index+1}</span><div><h3>{highlight.title}</h3><p>{highlight.description}</p></div></article>)}</div></section></Reveal>
    <Reveal><section className={styles.specifications} id="product-information" aria-labelledby="spec-title"><div className={styles.specIntro}><p className={styles.kicker}>AT A GLANCE</p><h2 id="spec-title">Product overview</h2></div><div className={styles.specContent}><dl className={styles.specList}>{product.specifications.map((spec)=><div key={spec.label}><dt>{spec.label}</dt><dd>{spec.value}</dd></div>)}</dl><p className={styles.specNote}>{product.specificationNote}</p></div></section></Reveal>
    <Reveal><section className={styles.resources} id="manufacturer-resources" aria-labelledby="resources-title"><div className={styles.resourceIntro}><p className={styles.kicker}>GO A LITTLE DEEPER</p><h2 id="resources-title">Brochures &amp; care guides</h2><p>Manufacturer and retailer product resources.</p></div><div className={styles.resourceList}>{product.resources.map((resource)=><a className={styles.resource} href={resource.url} key={resource.url} target="_blank" rel="noreferrer"><span className={styles.resourceIcon}><FileText size={18} aria-hidden="true" /></span><span><strong>{resource.label}</strong><small>{resource.description}</small></span><ArrowUpRight className={styles.resourceArrow} size={17} aria-hidden="true" /></a>)}</div></section></Reveal>
    <section className={styles.installations} aria-labelledby="inspiration-title"><div className={styles.installHead}><div><p className={styles.kicker}>{product.accent === 'maple' ? 'FIRST CHOICE FLOORING GALLERY' : 'SHAW FLOORS'}</p><h2 id="inspiration-title">{product.accent === 'maple' ? 'In homes around Saskatoon.' : 'A little room to imagine.'}</h2></div><p>{product.accent === 'maple' ? 'Photos from the First Choice Flooring installation gallery.' : 'Manufacturer lifestyle imagery for general inspiration. These are not represented as First Choice installations or as a specific Pet Perfect Plus style.'}</p></div>
      <div className={styles.inspirationGrid}>{product.gallery.slice(0,3).map((image,index)=><a className={styles.inspirationItem} href={image.sourceUrl} key={image.src} target="_blank" rel="noreferrer"><div className={styles.inspirationImage}><img src={image.src} alt={image.alt} loading="lazy" /></div><span><span>0{index+1}</span>{image.caption}<ArrowUpRight size={14} aria-hidden="true" /></span></a>)}</div></section>
    <div className={styles.sources}><details><summary>Sources and product-family notes</summary><ul>{product.sourceUrls.map((url)=><li key={url}><a href={url} target="_blank" rel="noreferrer">{url}</a></li>)}</ul></details></div>
  </main><SiteFooter /></div>
}