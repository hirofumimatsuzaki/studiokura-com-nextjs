import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const HashimotoCard = () => (
  <ClassPlaceCard
    placeName="橋本校"
    imageSrc="placecard-hashimoto.jpg"
    linkHref="/hashimoto"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市西区橋本エリア
  </ClassPlaceCard>
);

export { HashimotoCard };
