import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const OnojyoCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="螟ｧ驥主沁譬｡"
    imageSrc="placecard-onojyo.jpg"
    linkHref="/onojyo"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    縲・16-0935 遖丞ｲ｡逵悟､ｧ驥主沁蟶る絹逕ｺ・比ｸ∫岼・鯛・・代き繝ｫ繝√Ε繝ｼ繧ｿ繧ｦ繝ｳ螟ｧ驥主沁蜀・
  </ClassPlaceCard>
);

export { OnojyoCard };
