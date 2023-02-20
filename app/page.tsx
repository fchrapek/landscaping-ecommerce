import Image from 'next/image'
import styles from './page.module.scss'
import { ProductsList } from '@/components'

export default function HomePage() {
  return (
    <main className={styles.main}>
      {/* @ts-expect-error Server Component */}
      <ProductsList />
    </main>
  )
}
