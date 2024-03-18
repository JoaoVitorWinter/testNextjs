import Image from 'next/image';
import Header from './(components)/layout/Header';
export default function Page() {
  return (
    <>
      <Header />
      <main className=" mt-10 grid w-full grid-flow-row grid-cols-6 gap-8 px-40 md:grid-cols-12">
        <section className="col-span-6 m-auto flex items-center justify-center">
          <Image
            className="m-auto"
            src={'/winter.png'}
            alt="Forest in snow"
            width={512}
            height={0}
          />
        </section>
        <section className="col-span-6 m-auto flex w-fit items-center justify-center bg-gray-100 p-20">
          <p className="w-60 text-end text-lg">
            Helping you discover the right time
          </p>
        </section>
      </main>
    </>
  );
}
