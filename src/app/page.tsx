"use client"
import Image from "next/image";
import { useRouter } from 'next/navigation'
export default function Home() {
  const router = useRouter();

    const handleIconClick = (category: string) => {
        router.push(`/category/${category}`);
    };
  return (
    
    <main className="flex justify-between align-center px-20 ">
      <div className="textPart">
        <h3 className="font-semibold text-2xl leading-normal pt-6">Welcome User,</h3>
        <h1 className="font-bold text-7xl leading-snug pt-3">Ready to prepare <br /> your Food</h1>
        <h3 className="font-semibold text-2xl leading-normal pt-5">what are you preparing today?</h3>
        <div className="grid grid-cols-5 gap-8 mt-20 pb-10">
          <button onClick={() => handleIconClick('Breakfast')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/breakfast.png'
              width={80}
              height={80}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Dessert')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/dessert.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Pasta')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/pasta.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Starter')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/lunch.png'
              width={50}
              height={50}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Vegan')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/vegan.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Seafood')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/seafood.png'
              width={70}
              height={70}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Side')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/dinner.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Beef')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/beef.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
          <button onClick={() => handleIconClick('Chicken')} className="text-gray-600 hover:text-gray-800 focus:outline-none">
            <Image src='/icons/chicken.png'
              width={60}
              height={60}
              alt="panda"
            />
          </button>
        </div>
      </div>
      <div className="imagePart my-auto">
        <Image src='/Panda-cooking.png'
          width={600}
          height={500}
          alt="panda"
        />
      </div>
    </main>
  );
}
