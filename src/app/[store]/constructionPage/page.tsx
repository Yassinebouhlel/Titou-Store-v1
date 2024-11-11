import Image from 'next/image';

export default function ConstructionPage() {
  return (
    <div className="flex items-start justify-center min-h-screen bg-primary px-2 pt-10 mt-10">
      <section className="relative w-full max-w-5xl h-auto">
        <Image
          src="/images/under_construction.png"
          alt="Page under construction"
          width={1200} // Set a larger default width
          height={1200} // Set a larger default height
          className="rounded-[30px] w-full h-auto"
        />
      </section>
    </div>
  );
}
