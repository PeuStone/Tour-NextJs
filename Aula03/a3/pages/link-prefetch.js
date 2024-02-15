import Link from 'next/link';


export default function LinkPrefetchPage() {
  return (
    <div>
      <li>
        <Link href="/" prefetch={false}>
          Home
        </Link>
      </li>
      <li>
        <Link href="/sobre" prefetch={false}>
          Sobre
        </Link>
      </li>
      <li>
        <Link href="/link-prefetch">
          Link Prefetch
        </Link>
      </li>
    </div>
  )
}
