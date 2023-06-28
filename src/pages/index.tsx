type Props = {
  title: string
}

export default function Home({ title = 'React' }: Props) {
  return (
    <>
      <h1>Hello {title} World!</h1>
    </>
  )
}
