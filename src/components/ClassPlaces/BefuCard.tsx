import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const BefuCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="別府校"
    imageSrc="placecard-befu.jpg"
    linkHref="/befu"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市城南区別府エリア
  </ClassPlaceCard>
);

export { BefuCard };
