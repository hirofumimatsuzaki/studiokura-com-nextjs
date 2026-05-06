import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const MotookaCard = () => (
  <ClassPlaceCard
    placeName="元岡校"
    imageSrc="placecard-motooka.jpg"
    linkHref="/motooka"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市西区元岡エリア
  </ClassPlaceCard>
);

export { MotookaCard };
