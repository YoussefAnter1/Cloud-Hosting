import React from 'react'

interface ProductPageProps {
  params: Promise<{ product?: string[] }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const resolvedParams = await params
  console.log(resolvedParams) 

  return (
    <div style={{ padding: '20px' }}>
      <h1>This is product page</h1>

      <p>
        {resolvedParams.product?.map((pro, index) => (
          <span key={index}>
            {pro}
            <br />
          </span>
        ))}
      </p>
    </div>
  )
}

export default ProductPage