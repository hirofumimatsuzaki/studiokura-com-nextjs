import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const Hakozaki2Card = () => (
  <ClassPlaceCard
    placeName="箱崎校II"
    imageSrc="placecard-hakozaki2.jpg"
    linkHref="/hakozaki2"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市東区箱崎エリア
  </ClassPlaceCard>
);

export { Hakozaki2Card };
