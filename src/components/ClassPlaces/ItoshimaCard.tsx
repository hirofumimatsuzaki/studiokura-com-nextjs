import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const ItoshimaCard = () => (
  <ClassPlaceCard
    placeName="糸島校"
    imageSrc="placecard-itoshima.jpg"
    linkHref="/itoshima"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
  >
    福岡県糸島市前原東エリア
  </ClassPlaceCard>
);

export { ItoshimaCard };
