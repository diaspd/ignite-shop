import { SkeletonContainer, SkeletonContent } from "./styles";

export function Skeleton({...props}) {
  return (
   <SkeletonContainer {...props}>
    <div>
      <SkeletonContent />
      <SkeletonContent />
    </div>
  </SkeletonContainer>
  )
}