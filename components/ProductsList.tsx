import gql from 'graphql-tag';
import { graphqlClient } from '@/lib/graphql-client';
import styles from '../styles/ProductsList.module.scss'
import ProductsListItem from './ProductsListItem';
import { IProduct, IProducts } from "types";


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

export default async function ProductsList({ className }: IProducts) {
  const { allProducts }: IProducts = await graphqlClient.request(ALL_PRODUCTS_QUERY);

  return (
    <ul className={[styles['products-list'], className].join(' ')}>
      {allProducts.map(product => (
        <li key={product.id}>
          <ProductsListItem product={product} />
        </li>
      ))}
    </ul>
  )
}
