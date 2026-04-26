import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const KurumeCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="久留米校"
    imageSrc="placecard-kurume.jpg"
    linkHref="/kurume"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    福岡県久留米市エリア
  </ClassPlaceCard>
);

export { KurumeCard };
