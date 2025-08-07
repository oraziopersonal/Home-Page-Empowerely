import Link from 'next/link',

export default function Link() {
  return (
    <Link href={{
      pathname: '/Risultati.tsx'
        query : { name: 'risulati' }
        }}>Risultati</Link>
  )
}
