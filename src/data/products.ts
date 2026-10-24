import type { Product } from '../types/product'

const companyGallery = 'https://www.firstchoiceflooring.ca/flooring-saskatoon/installations'
const shawImage = 'https://shawfloors.widen.net/content/awx0yfkugk/webp/SHOT_02_BLENDED_TOUCH_TUG_OF_WAR_149.webp?w=1400&position=c&color=ffffffff&quality=85&u=k2mbls&h=900&fmt=webp&crop=true'

export const products: Product[] = [
  {
    id: 'mercier-maple', path: '/products/mercier-maple', brand: 'Mercier', name: 'Maple Hardwood',
    familyLabel: 'Hardwood collection', category: 'Hardwood',
    introduction: 'A natural maple floor, seen in Saskatoon spaces. Explore its character in examples from the First Choice Flooring gallery.',
    accent: 'maple',
    heroImage: {
      src: 'https://images.squarespace-cdn.com/content/v1/5bd62a38e5f7d136709a5e36/1553264764034-AMLXMUJC49PUPXBX27X7/hardwood+gallery.jpg?format=1500w',
      alt: 'Maple hardwood flooring installed in a bright home, from the First Choice Flooring gallery',
      caption: 'Mercier Maple Hardwood', credit: 'First Choice Flooring installation gallery', sourceUrl: companyGallery,
    },
    gallery: [
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5bd62a38e5f7d136709a5e36/1553264808177-O553IF2F10COQ9VMLP2O/hardwood+gallery+2.jpg?format=1200w',
        alt: 'Second First Choice Flooring project captioned Mercier Maple Hardwood', caption: 'Maple hardwood installation', credit: 'First Choice Flooring installation gallery', sourceUrl: companyGallery,
      },
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5bd62a38e5f7d136709a5e36/1553264865259-Z0DZCTK334I4ZXIUDJS5/hardwood+gallery+3.jpg?format=1200w',
        alt: 'Third First Choice Flooring project captioned Mercier Maple Hardwood', caption: 'Maple hardwood installation', credit: 'First Choice Flooring installation gallery', sourceUrl: companyGallery,
      },
    ],
    highlights: [
      { title: 'Maple hardwood', description: 'The First Choice Flooring gallery identifies these featured projects as Mercier Maple Hardwood.' },
      { title: 'Natural wood character', description: 'Maple’s subtle grain and tonal variation bring a quiet, organic pattern to a room.' },
      { title: 'Real local examples', description: 'Browse three company-gallery photographs captioned with this product family.' },
    ],
    specifications: [
      { label: 'Brand', value: 'Mercier' }, { label: 'Product family', value: 'Maple Hardwood' },
      { label: 'Flooring category', value: 'Hardwood' },
    ],
    specificationNote: 'Explore the Mercier maple family. Ask our team about available styles, sizes, and finishes.',
    resources: [
      { label: 'Mercier documentation portal', description: 'Browse manufacturer documents and product information', url: 'https://mercier-wood-flooring.com/ca/en/documentation' },
      { label: 'First Choice product overview', description: 'Explore flooring brands and categories carried by the store', url: 'https://www.firstchoiceflooring.ca/saskatoon-flooring/stock' },
    ],
    sourceUrls: [companyGallery, 'https://mercier-wood-flooring.com/ca/en/documentation', 'https://www.firstchoiceflooring.ca/saskatoon-flooring/stock'],
  },
  {
    id: 'shaw-pet-perfect-plus', path: '/products/shaw-pet-perfect-plus', brand: 'Shaw Floors', name: 'Pet Perfect Plus',
    familyLabel: 'Carpet collection', category: 'Carpet',
    introduction: 'Explore the Pet Perfect Plus carpet family featured by First Choice Flooring, alongside manufacturer imagery and links to Shaw’s collection.',
    accent: 'pet',
    heroImage: {
      src: shawImage, alt: 'Shaw manufacturer lifestyle image of a dog relaxing in a carpeted home',
      caption: 'Manufacturer lifestyle inspiration', credit: 'Shaw Floors', sourceUrl: 'https://shawfloors.com/en-us/pet-perfect-landing-page-2025',
    },
    gallery: [
      {
        src: 'https://images.squarespace-cdn.com/content/v1/5bd62a38e5f7d136709a5e36/1776275438397-WVSYCECXF98FKBLJLV7Y/image-asset.jpeg?format=1200w',
        alt: 'First Choice Flooring feature image for Pet Perfect Plus carpet', caption: 'Carpet inspiration from the store', credit: 'First Choice Flooring', sourceUrl: 'https://www.firstchoiceflooring.ca/',
      },
      {
        src: 'https://shawfloors.widen.net/content/ylkx9xcyb1/webp/Cattitude-3340V-02025-Hygge_BlockParty-5E697-00150-Snowfall_Dog_Flatlay.webp?w=1400&position=c&color=ffffffff&quality=85&u=k2mbls&h=900&crop=true&fmt=webp',
        alt: 'Shaw Floors lifestyle image of a dog at home with carpet and hard flooring', caption: 'Carpet and hard flooring inspiration', credit: 'Shaw Floors', sourceUrl: 'https://shawfloors.com/en-us/pet-perfect-landing-page-2025',
      },
    ],
    highlights: [
      { title: 'Pet-focused family', description: 'First Choice has featured Pet Perfect+ as a carpet option for homes with pets.' },
      { title: 'Store-described features', description: 'The store’s Pet Perfect+ feature describes the family as pet-friendly and 100% waterproof.' },
      { title: 'Manufacturer inspiration', description: 'Explore Shaw’s lifestyle imagery alongside the Pet Perfect family overview and collection.' },
    ],
    specifications: [
      { label: 'Brand', value: 'Shaw Floors' }, { label: 'Product family', value: 'Pet Perfect Plus' },
      { label: 'Flooring category', value: 'Carpet' },
    ],
    specificationNote: 'Explore the Shaw Pet Perfect Plus family. Ask our team about available styles and details.',
    resources: [
      { label: 'Shaw Pet Perfect overview', description: 'Manufacturer overview of the Pet Perfect carpet family', url: 'https://shawfloors.com/en-us/pet-perfect-landing-page-2025' },
      { label: 'Explore Pet Perfect styles', description: 'Browse Shaw’s Pet Perfect carpet collection', url: 'https://shawfloors.com/en-us/carpet-petperfect-petperfectplus?sortby=featured' },
      { label: 'First Choice product overview', description: 'Explore carpet brands and categories carried by the store', url: 'https://www.firstchoiceflooring.ca/saskatoon-flooring/stock' },
    ],
    sourceUrls: ['https://www.firstchoiceflooring.ca/', 'https://shawfloors.com/en-us/pet-perfect-landing-page-2025', 'https://shawfloors.com/en-us/carpet-petperfect-petperfectplus?sortby=featured', 'https://www.firstchoiceflooring.ca/saskatoon-flooring/stock'],
  },
]