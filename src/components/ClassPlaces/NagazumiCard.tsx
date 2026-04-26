import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const NagazumiCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="髟ｷ菴乗｡"
    imageSrc="placecard-nagazumi.jpg"
    linkHref="/nagazumi"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・15-0075
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶ょ漉蛹ｺ髟ｷ荳假ｼ台ｸ∫岼・托ｼ凪・・代ヶ繝ｪ繝ゅせ繝医Φ繧ｹ繧､繝溘Φ繧ｰ繧ｹ繧ｯ繝ｼ繝ｫ髟ｷ菴・蜀・
  </ClassPlaceCard>
);

export { NagazumiCard };
