import { ClassPlaceCard } from '@/components/ClassPlaceCard';
import type { ClassPlaceAvailabilityProps } from '@/components/ClassPlaces/types';

const BefuCard = ({ availabilityText }: ClassPlaceAvailabilityProps) => (
  <ClassPlaceCard
    placeName="蛻･蠎懈｡"
    imageSrc="placecard-befu.jpg"
    linkHref="/befu"
    adultsClass={false}
    kidsClass={true}
    programmingClass={false}
    availabilityText={availabilityText}
  >
    遖丞ｲ｡逵檎ｦ丞ｲ｡蟶ょ沁蜊怜玄蛻･蠎懶ｼ謎ｸ∫岼・吮・・難ｼ・繧｢繧､繧ｳ繝ｪ繝ｼ繝榊沁蜊・F 繧ｳ繝溘Η繝九ユ繧｣繝ｫ繝ｼ繝
    繝代リ繧ｷ繧ｧ蜀・
  </ClassPlaceCard>
);

export { BefuCard };
