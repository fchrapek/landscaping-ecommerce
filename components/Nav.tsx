"use client"
import Link from 'next/link'
import styled from 'styled-components'

const NavStyles = styled.nav`
  padding: 1rem;
  border: .1rem solid #f2f2f2;

  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
  }
`
export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link href={'/'}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/account'}>
            Account
          </Link>
        </li>
        <li>
          <Link href={'/orders'}>
            Order
          </Link>
        </li>
        <li>
          <Link href={'/sell'}>
            Sell
          </Link>
        </li>
        <li>
          <Link href={'/product'}>
            Products
          </Link>
        </li>
      </ul>
    </NavStyles>
  )
}
