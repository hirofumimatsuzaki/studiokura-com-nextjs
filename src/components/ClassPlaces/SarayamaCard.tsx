import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const SarayamaCard = () => (
  <ClassPlaceCard
    placeName="皿山校"
    imageSrc="placecard-sarayama.jpg"
    linkHref="/sarayama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市南区皿山エリア
  </ClassPlaceCard>
);

export { SarayamaCard };
