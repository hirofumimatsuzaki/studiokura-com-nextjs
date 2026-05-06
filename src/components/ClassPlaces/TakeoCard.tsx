import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const TakeoCard = () => (
  <ClassPlaceCard
    placeName="武雄校"
    imageSrc="placecard-takeo.jpg"
    linkHref="/takeo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    佐賀県武雄市武雄町エリア
  </ClassPlaceCard>
);

export { TakeoCard };
