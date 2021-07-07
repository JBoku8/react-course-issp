import React from 'react'

// eslint-disable-next-line react/display-name
export const ProductList = React.forwardRef(({ data }, ref) => {
  return (
    <div className="row px-3" ref={ref}>
      {data.map((item) => {
        return (
          <div className="card border-0 col-4 book-item mb-3 p-3" key={item.ean}>
            <img
              className="card-img-top img-fluid h-50"
              src={item.image}
              alt={item.name}
            />
            <h2 className="card-title">{item.name}</h2>
            <div className="card-body">
              <p>{item.description}</p>

              <p>
                {item.tags.map((tag, index) => {
                  return (
                    <span className="badge bg-primary" key={`${index}-${tag}`}>
                      {tag}
                    </span>
                  )
                })}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
})

export default ProductList
