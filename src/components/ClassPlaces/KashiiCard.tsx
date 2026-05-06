import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const KashiiCard = () => (
  <ClassPlaceCard
    placeName="香椎校"
    imageSrc="placecard-kashii.jpg"
    linkHref="/kashii"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市東区香椎エリア
  </ClassPlaceCard>
);

export { KashiiCard };
