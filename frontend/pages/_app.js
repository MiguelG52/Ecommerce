import '../styles/globals.css'
import { Layout } from '../components'
import {CartProvider} from '../context/CartContext';


function MyApp({ Component, pageProps }) {
  return(
    
    <CartProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  )
}

export default MyApp
