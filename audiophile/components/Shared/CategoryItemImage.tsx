import Image from "next/image";

interface Props {
    src: string;
    name: string;
}

export default function CategoryItemImage({ src, name }: Props) {
    return <Image src={src} alt={name} width={500} height={500} />
}
