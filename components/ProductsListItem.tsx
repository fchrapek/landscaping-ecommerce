import { IProductProp } from "types";
import Image from 'next/image';

export default function ProductsListItem({ product }: IProductProp) {

  return (
    <>
      {product?.photo && (
        < Image
          alt={product?.name}
          src={product?.photo?.image?.publicUrlTransformed}
          width={100}
          height={100}
        />
      )}

      <p>{product?.name}</p>
    </>
  )
}
