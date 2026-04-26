import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const KurumeCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="荵・蕗邀ｳ譬｡"
    imageSrc="placecard-kurume.jpg"
    linkHref="/kurume"
    adultsClass={true}
    kidsClass={true}
    programmingClass={true}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵御ｹ・蕗邀ｳ蟶ょ､ｩ逾樒伴31-6 譛晄律繝薙Ν502
  </ClassPlaceCard>
);

export { KurumeCard };
