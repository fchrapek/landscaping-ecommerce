interface IContainer {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}

export default function Container({ className, children, as = "div" }: IContainer) {
  const Container = as;

  return (
    <Container className={className}>
      {children}
    </Container>
  )
}
