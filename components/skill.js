import { Center, Skeleton, Tooltip } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { Suspense } from "react";

export function Skill({
  label = "Sales",
  size = "2em",
  pack = "md",
  icon = "MdOutlineAttachMoney",
}) {
  const Icon = dynamic(() =>
    import("react-icons/" + pack).then((mod) => mod[icon])
  );
  return (
    <Suspense fallback={<Skeleton boxSize={size} />}>
      <Tooltip label={label} hasArrow fontSize='md'>
        <Center as='span'>
          <Icon size={size} />
        </Center>
      </Tooltip>
    </Suspense>
  );
}
