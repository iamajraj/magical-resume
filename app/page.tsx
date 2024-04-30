import Link from 'next/link';

const templatesIds = [1, 2];

export default function Home() {
  return (
    <main className="flex gap-5 min-h-screen p-24">
      {templatesIds.map((id) => (
        <Link key={id} href={`/resume-templates/${id}`}>
          Visit Template {id}
        </Link>
      ))}
    </main>
  );
}
