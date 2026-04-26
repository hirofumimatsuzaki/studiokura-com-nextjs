import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const SarayamaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="皿山校"
    imageSrc="placecard-sarayama.jpg"
    linkHref="/sarayama"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市南区皿山エリア
  </ClassPlaceCard>
);

export { SarayamaCard };
