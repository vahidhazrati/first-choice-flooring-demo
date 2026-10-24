export interface ProductImage {
  src: string
  alt: string
  caption: string
  credit: string
  sourceUrl: string
}

export interface ProductHighlight {
  title: string
  description: string
}

export interface ProductSpecification {
  label: string
  value: string
}

export interface ProductResource {
  label: string
  description: string
  url: string
}

export interface Product {
  id: string
  path: string
  brand: string
  name: string
  familyLabel: string
  category: string
  introduction: string
  accent: 'maple' | 'pet'
  heroImage: ProductImage
  gallery: ProductImage[]
  highlights: ProductHighlight[]
  specifications: ProductSpecification[]
  specificationNote: string
  resources: ProductResource[]
  sourceUrls: string[]
}