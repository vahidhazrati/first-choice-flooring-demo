import { createHashRouter } from 'react-router-dom'
import { products } from '../data/products'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage'
import ProductPage from '../pages/ProductPage/ProductPage'

export const router = createHashRouter([
  { path: '/', element: <CatalogPage /> },
  ...products.map((product) => ({ path: product.path, element: <ProductPage product={product} /> })),
  { path: '*', element: <NotFoundPage /> },
])