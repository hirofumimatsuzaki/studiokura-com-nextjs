import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MomochiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="百道校"
    imageSrc="placecard-momochi.jpg"
    linkHref="/momochi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市早良区百道エリア
  </ClassPlaceCard>
);

export { MomochiCard };
