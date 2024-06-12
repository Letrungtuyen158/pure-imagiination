import Container from "@/components/common/container";

export default function Quote({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative w-full min-h-[400px] py-10 sm:py-16 bg-[#FF3EA5] justify-center items-center flex">
      <Container>
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-full text-center text-yellow-400 text-6xl font-extrabold leading-[78px]">{title}</div>
          <div className="w-full max-w-[980px] mx-auto text-center text-white text-lg font-medium leading-[28.80px]">{description}</div>
        </div>
      </Container>
    </div>
  );
}
