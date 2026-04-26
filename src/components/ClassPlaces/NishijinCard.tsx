import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const NishijinCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="西新校"
    imageSrc="placecard-nishijin.jpg"
    linkHref="/nishijin"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    福岡市早良区西新エリア
  </ClassPlaceCard>
);

export { NishijinCard };
