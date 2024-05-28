import { HoverEffect } from "../ui/card-hover-effect";
const CardHoverEffectDemo = async ({ result }: any) => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={result} />
    </div>
  );
};

export default CardHoverEffectDemo;
