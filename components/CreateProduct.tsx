"use client"

import useForm from '@/lib/useForm';
import { gql, GraphQLClient } from 'graphql-request';
import { graphqlClient } from '@/lib/graphql-client';

const CREATE_PRODUCT_MUTATION = gql`
    mutation CREATE_PRODUCT_MUTATION(
      $name: String
      $price: Int!
      # $image: Upload
    ) {
      createProduct(
        data: {
          name: $name
          price: $price
          # status: "AVAILABLE"
          # # photo: {
          # #   create: {
          # #     image: $image,
          # #     altText: $name
          # #   }
          # }
        }
      ) {
        id
        name
        price
      }
    }
  `;


export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: 'Nice',
    price: 1234,
    image: ''
  });


  return (
    <>
      <form onSubmit={async (e) => {
        e.preventDefault();

        console.log(inputs)


        const data = await graphqlClient.request(CREATE_PRODUCT_MUTATION, inputs)

        console.log(JSON.stringify(data, undefined, 2))

      }}>
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="price">
          Price
          <input
            type="number"
            name="price"
            id="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>

        <label htmlFor="image">
          Image

          <input
            type="file"
            name="image"
            id="image"
            value={inputs.image}
            onChange={handleChange}
          />
        </label>

        <button type="submit">+ Add product</button>
      </form>

    </>

  )
}
