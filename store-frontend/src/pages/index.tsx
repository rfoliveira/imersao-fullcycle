import type { NextPage } from 'next'
import type { Typography } from '@mui/material'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { Product } from './api/model'

const products: Product[] = [
  {
    id: 'uuid',
    name: 'produto teste',
    description: 'muito muito texto',
    price: 50.00,
    image_url: 'https://source.unsplash.com/random?product',
    slug: 'produto-teste',
    created_at: '2022-06-06T00:00:00Z'
  }
]

const ProductListPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Listagem de produtos</title>
                {/* */}
            </Head>

            <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
                Produtos
            </Typography>
            Listagem de produtos
        </div>   
    )
}

export default ProductListPage