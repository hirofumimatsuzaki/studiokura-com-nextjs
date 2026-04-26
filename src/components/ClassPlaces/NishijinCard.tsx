import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const NishijinCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="隘ｿ譁ｰ譬｡"
    imageSrc="placecard-nishijin.jpg"
    linkHref="/nishijin"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶り･ｿ譁ｰ荳荳∫岼11-27 繝ｭ繝輔ユ繧｣隘ｿ譁ｰ903蜿ｷ螳､
  </ClassPlaceCard>
);

export { NishijinCard };
