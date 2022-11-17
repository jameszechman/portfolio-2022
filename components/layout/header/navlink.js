import { Button } from "@chakra-ui/react";
import Link from "next/link";

export function NavLink({ href, children }) {
  return (
    <Button as={Link} href={href} variant='ghost'>
      {children}
    </Button>
  );
}
