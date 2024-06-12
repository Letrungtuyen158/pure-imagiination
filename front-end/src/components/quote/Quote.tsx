import Container from "@/components/common/container";

export default function Quote({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative w-full h-[400px] px-[238px] pt-[91px] pb-[71px] bg-[#FF3EA5] justify-center items-center flex">
      <Container>
        <div className="self-stretch flex-col justify-start items-start gap-6 inline-flex">
          <div className="w-[1444px] text-center text-yellow-400 text-6xl font-extrabold font-['Montserrat'] leading-[78px]">{title}</div>
          <div className="w-[1444px] max-w-[860px] mx-auto text-center text-white text-lg font-medium font-['Montserrat'] leading-[28.80px]">{description}</div>
        </div>
      </Container>
    </div>
  );
}
