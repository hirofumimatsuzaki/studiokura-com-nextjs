import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const ItoshimaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="糸島校"
    imageSrc="placecard-itoshima.jpg"
    linkHref="/itoshima"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    福岡県糸島市前原東エリア
  </ClassPlaceCard>
);

export { ItoshimaCard };
