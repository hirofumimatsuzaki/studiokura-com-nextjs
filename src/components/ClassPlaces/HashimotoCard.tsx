import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const HashimotoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="橋本校"
    imageSrc="placecard-hashimoto.jpg"
    linkHref="/hashimoto"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    福岡市西区橋本エリア
  </ClassPlaceCard>
);

export { HashimotoCard };
