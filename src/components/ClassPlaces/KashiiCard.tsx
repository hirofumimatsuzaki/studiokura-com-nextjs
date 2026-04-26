import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const KashiiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="香椎校"
    imageSrc="placecard-kashii.jpg"
    linkHref="/kashii"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市東区香椎エリア
  </ClassPlaceCard>
);

export { KashiiCard };
