"use client"

import { Container, Nav } from '@/components';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  display: inline-block;
  padding: 1rem;
  border: .1rem solid #f2f2f2;
`
export default function Header() {
  return (
    <Container as="header">
      <Logo>
        <Link href={'/'}>
          Logo
        </Link>
      </Logo>
      <Nav />
      <div className="">
        <p>Search bar</p>
      </div>
    </Container>
  )
}
