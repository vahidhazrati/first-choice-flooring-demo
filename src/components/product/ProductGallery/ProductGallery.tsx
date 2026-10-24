import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Expand, X } from 'lucide-react'
import type { ProductImage } from '../../../types/product'
import styles from './ProductGallery.module.css'

function Photo({ image, className = '', containPortrait = false, onLoad }: { image: ProductImage; className?: string; containPortrait?: boolean; onLoad?: (image: HTMLImageElement) => void }) {
  const [failed, setFailed] = useState(false)
  const [portrait, setPortrait] = useState(false)
  return <div className={`${styles.photo} ${containPortrait && portrait ? styles.portrait : ''} ${className}`}>{!failed ? <img src={image.src} alt={image.alt} loading="lazy" onLoad={(event) => { const loadedImage = event.currentTarget; const isPortrait = loadedImage.naturalHeight > loadedImage.naturalWidth; setPortrait(isPortrait); onLoad?.(loadedImage) }} onError={() => setFailed(true)} /> : <div className={styles.fallback} role="img" aria-label={`${image.alt}. Image unavailable in this preview.`}><span>Image unavailable</span></div>}</div>
}

export default function ProductGallery({ images, accent }: { images: ProductImage[]; accent: 'maple' | 'pet' }) {
  const [active, setActive] = useState(0)
  const [lightbox, setLightbox] = useState(false)
  const [portraitImage, setPortraitImage] = useState<{ src: string; isPortrait: boolean } | null>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const image = images[active]
  const isPortrait = portraitImage?.src === image.src && portraitImage.isPortrait
  const move = (direction: number) => setActive((current) => (current + direction + images.length) % images.length)
  useEffect(() => {
    if (!lightbox) return
    closeRef.current?.focus()
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(false)
      if (event.key === 'ArrowLeft') setActive((current) => (current - 1 + images.length) % images.length)
      if (event.key === 'ArrowRight') setActive((current) => (current + 1) % images.length)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [images.length, lightbox])
  return (
    <section className={`${styles.gallery} ${styles[accent]}`} aria-label="Product image gallery">
      <div className={`${styles.stage} ${isPortrait ? styles.portraitStage : ''}`}><Photo image={image} containPortrait onLoad={(loadedImage) => setPortraitImage({ src: image.src, isPortrait: loadedImage.naturalHeight > loadedImage.naturalWidth })} /><button className={styles.expand} type="button" onClick={() => setLightbox(true)} aria-label="Open image preview"><Expand size={17} aria-hidden="true" /></button>
        {images.length > 1 && <><button className={`${styles.arrow} ${styles.previous}`} type="button" onClick={() => move(-1)} aria-label="Show previous image"><ArrowLeft size={18} aria-hidden="true" /></button><button className={`${styles.arrow} ${styles.next}`} type="button" onClick={() => move(1)} aria-label="Show next image"><ArrowRight size={18} aria-hidden="true" /></button></>}
        <div className={styles.caption}><span>{image.caption}</span><a href={image.sourceUrl} target="_blank" rel="noreferrer">{image.credit}</a></div>
      </div>
      {images.length > 1 && <div className={styles.thumbnails} role="group" aria-label="Choose a gallery image">{images.map((item, index) => <button className={`${styles.thumb} ${index === active ? styles.selected : ''}`} key={item.src} type="button" onClick={() => setActive(index)} aria-label={`Show image ${index + 1}: ${item.caption}`} aria-pressed={index === active}><Photo image={item} /></button>)}<span className={styles.counter}>{String(active + 1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}</span></div>}
      {lightbox && <div className={styles.overlay} role="dialog" aria-modal="true" aria-label="Image preview" onMouseDown={(event) => { if (event.target === event.currentTarget) setLightbox(false) }}>
        <button ref={closeRef} className={styles.close} type="button" onClick={() => setLightbox(false)} aria-label="Close image preview"><X size={21} aria-hidden="true" /></button>
        <button className={`${styles.lightboxArrow} ${styles.lightboxPrevious}`} type="button" onClick={() => move(-1)} aria-label="Previous image"><ArrowLeft aria-hidden="true" /></button>
        <div className={styles.lightboxContent}><Photo image={image} /><p>{image.caption} <span>· {image.credit}</span></p></div>
        <button className={`${styles.lightboxArrow} ${styles.lightboxNext}`} type="button" onClick={() => move(1)} aria-label="Next image"><ArrowRight aria-hidden="true" /></button>
      </div>}
    </section>
  )
}