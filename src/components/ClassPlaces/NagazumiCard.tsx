import { ClassPlaceCard } from '@/components/ClassPlaceCard';

const NagazumiCard = () => (
  <ClassPlaceCard
    placeName="長住校"
    imageSrc="placecard-nagazumi.jpg"
    linkHref="/nagazumi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
  >
    福岡市南区長住エリア
  </ClassPlaceCard>
);

export { NagazumiCard };
