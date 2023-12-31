import Image from 'next/image';

export default function SplashScreen() {
  return (
    <div className="h-full bg-main flex justify-center items-center flex-col">
      <Image src="/imgs/otte.png" alt="otte 로고 이미지" width={200} height={200} />
      <div className="mt-6 white text-g50">나만의 취향저격 영화 추천은 오때?</div>
    </div>
  );
}
