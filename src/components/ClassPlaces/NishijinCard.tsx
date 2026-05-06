import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const NishijinCard = () => (
  <ClassPlaceCard
    placeName="西新校"
    imageSrc="placecard-nishijin.jpg"
    linkHref="/nishijin"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
  >
    福岡市早良区西新エリア
  </ClassPlaceCard>
);

export { NishijinCard };
