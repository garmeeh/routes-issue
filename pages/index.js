import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Index</h1>
      <Link href="/thing-for-sale/random-title/1001">
        <a>Product Page</a>
      </Link>

      {/* 
      Tried a few variations: 
        <Link href="details/[title]/[id]" as="/thing-for-sale/random-title/1001">
          <a>Product Page</a>
        </Link>

        <Link
          href="/*-for-sale/[title]/[id]"
          as="/thing-for-sale/random-title/1001"
        >
          <a>Product Page</a>
        </Link>
      */}
    </div>
  );
}
