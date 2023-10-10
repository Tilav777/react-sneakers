import './Main.css'

// Components
import Advertising from '../../components/advertising/Advertising'
import Product from '../../components/product/Product'

function Main() {
  return (
    <div className='main-page'>
        <Advertising />
        <Product />
    </div>
  )
}

export default Main