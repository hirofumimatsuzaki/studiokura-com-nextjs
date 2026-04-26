import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const TomariCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="泊校"
    imageSrc="placecard-tomari.jpg"
    linkHref="/tomari"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡県糸島市泊エリア
  </ClassPlaceCard>
);

export { TomariCard };
