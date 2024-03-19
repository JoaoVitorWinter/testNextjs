'use client';
  
import { useRouter } from 'next/navigation';
import Button from './(components)/Button';
import Header from './(components)/layout/Header';
export default function Page() {
  const { push } = useRouter();
  return (
      <main className="grid w-full grid-flow-row grid-cols-6 items-center justify-center gap-8 md:grid-cols-12">
        <section className="relative pr-8 col-span-12 m-auto flex h-[90vh] w-full items-center justify-center bg-[url('/winter.png')] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center gap-2 bg-gray-100 p-8">
            <p className="w-60 text-center text-lg">
              Helping you discover the right time
            </p>
            <Button onClick={() => push('/search')}>Discover now</Button>
          </div>
        </section>
      </main>
  );
}
