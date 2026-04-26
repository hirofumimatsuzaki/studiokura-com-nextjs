import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const HakozakiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="邂ｱ蟠取｡"
    imageSrc="placecard-hakozaki.jpg"
    linkHref="/hakozaki"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡蟶よ擲蛹ｺ邂ｱ蟠・荳∫岼8-18 蜈亥ｴ主憧騾ｲ繧ｪ繝輔ぅ繧ｹ蜀・
  </ClassPlaceCard>
);

export { HakozakiCard };
