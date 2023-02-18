import gql from 'graphql-tag';
import { graphqlClient } from '@/lib/graphql-client';
import Image from 'next/image'
import styles from './page.module.scss'

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
  allProducts {
    id
    name
    price
    decription
    photo {
      id
      image {
        publicUrlTransformed
      }
    }
  }
}
`

interface IProduct {
  id: number;
  name: string;
}

interface IProducts {
  allProducts: IProduct[];
}

export default async function HomePage() {
  const { allProducts }: IProducts = await graphqlClient.request(ALL_PRODUCTS_QUERY);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {allProducts.map(product => <h2 key={product.id}>{product.name}</h2>)}
      </div>
    </main>
  )
}
