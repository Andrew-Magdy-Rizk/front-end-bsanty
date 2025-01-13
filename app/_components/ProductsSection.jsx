import React, { Suspense } from 'react'
import ProductList from './ProductList'
import Loading from '@/app/loading'

function ProductsSection() {
  return (
    <div className='container mx-auto px-5 lg:px-10'>
      <h1 className='text-3xl font-bold dark:text-white'>Products Section</h1>
      <Suspense fallback={<Loading/>}>
      <ProductList/>
      </Suspense>
    </div>
  )
}

export default ProductsSection