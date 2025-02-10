import Image, { ImageProps } from "next/image";

export default function MdxImage(props: ImageProps) {
  return (
    <div className="relative w-full sm:w-auto">
      <Image
        {...props}
        alt={props.alt}
        className={`max-w-full h-auto ${props.className || ""}`}
      />
    </div>
  );
}
