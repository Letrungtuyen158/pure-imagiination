import Container from "@/components/common/container";

export default function Quote({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative w-full min-h-[400px] py-10 sm:py-16 bg-[#FF3EA5] justify-center items-center flex after:content-[''] after:w-full after:bg-primary-pink after:absolute after:h-[320px] after:z-[-1] after:top-2/3 after:rotate-[-2.37deg] before:content-[''] before:w-full before:bg-rose-50 before:absolute before:h-[600px] before:z-[-1] before:top-1/2 before:rotate-[-2.37deg]">
      <Container>
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-full text-center text-[#FFF500] text-4xl sm:text-6xl font-extrabold tracking-wide max-w-[1440px] leading-relaxed sm:leading-[78px]">{title}</div>
          <div className="w-full max-w-[992px] mx-auto text-center text-white text-lg font-light tracking-wide leading-[28.80px]">{description}</div>
        </div>
      </Container>
    </div>
  );
}
