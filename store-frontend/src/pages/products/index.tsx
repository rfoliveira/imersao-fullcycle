import type { NextPage } from 'next'
import type { Typography } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

const ProductListPage: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Listagem de produtos</title>
                {/* */}
            </Head>

            {/* lista de produtos */}
            <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
                Produtos
            </Typography>
            Listagem de produtos
        </div>   
    )
}

export default ProductListPage