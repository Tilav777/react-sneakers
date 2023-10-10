import './Product.css'

// Hook
import useFetch from '../../hooks/useFetch'

function Product() {

    const datas = useFetch('http://localhost:3000/sneakers')

  return (
    <div className='product'>
        <div className="product-header">
            <h2>All Products</h2>
            <div className='search-product'>
                <i className="bi bi-search"></i>
                <input type="search" placeholder='Search...'/>
            </div>
        </div>
        <div className="product-body">
            {
                datas.map(data => {
                    return (
                        <div key={data.id} className='product-card'>
                            <span className={data.handle.isLike && 'liked'}><i className="bi bi-heart-fill"></i></span>
                            <img src={data.img} alt="sneakers images" />
                            <p>{data.title}</p>
                            <div className='product-card__footer'>
                                <p>
                                    <span>Price</span>
                                    <span>${data.price}</span>
                                </p>
                                <span>
                                    <i class="bi bi-check-lg"></i>
                                </span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Product