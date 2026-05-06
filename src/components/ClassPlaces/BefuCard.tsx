import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const BefuCard = () => (
  <ClassPlaceCard
    placeName="別府校"
    imageSrc="placecard-befu.jpg"
    linkHref="/befu"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市城南区別府エリア
  </ClassPlaceCard>
);

export { BefuCard };
