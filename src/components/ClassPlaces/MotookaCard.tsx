import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const MotookaCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="元岡校"
    imageSrc="placecard-motooka.jpg"
    linkHref="/motooka"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市西区元岡エリア
  </ClassPlaceCard>
);

export { MotookaCard };
