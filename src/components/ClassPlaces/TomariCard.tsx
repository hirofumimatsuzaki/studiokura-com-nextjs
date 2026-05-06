import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const TomariCard = () => (
  <ClassPlaceCard
    placeName="泊校"
    imageSrc="placecard-tomari.jpg"
    linkHref="/tomari"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県糸島市泊エリア
  </ClassPlaceCard>
);

export { TomariCard };
