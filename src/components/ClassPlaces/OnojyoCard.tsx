import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const OnojyoCard = () => (
  <ClassPlaceCard
    placeName="大野城校"
    imageSrc="placecard-onojyo.jpg"
    linkHref="/onojyo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡県大野城市エリア
  </ClassPlaceCard>
);

export { OnojyoCard };
