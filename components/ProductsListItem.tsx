import { IProductProp } from "types";
import Image from 'next/image';
import Link from 'next/link';

export default function ProductsListItem({ product }: IProductProp) {

  return (
    <Link href={`/product/${product.id}`}>
      {product?.photo && (
        < Image
          alt={product?.name}
          src={product?.photo?.image?.publicUrlTransformed}
          width={100}
          height={100}
        />
      )}

      <p>{product?.name}</p>
    </Link>
  )
}
