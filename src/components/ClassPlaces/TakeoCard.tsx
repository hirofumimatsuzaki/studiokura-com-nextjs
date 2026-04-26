import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const TakeoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="武雄校"
    imageSrc="placecard-takeo.jpg"
    linkHref="/takeo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    佐賀県武雄市武雄町エリア
  </ClassPlaceCard>
);

export { TakeoCard };
