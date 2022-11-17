import React from "react";
import PropTypes from "prop-types";

import { Button, ButtonGroup } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

const Pagination = ({ pageContext, page, setPage }) => {
  const router = useRouter();
  console.log(page);

  return (
    <ButtonGroup
      variant='outline'
      className='pagination'
      role='navigation'
      mt={3}
      spacing={6}
    >
      {pageContext?.prev && (
        <Button onClick={() => setPage(pageContext.prev)} rel='prev'>
          Previous
        </Button>
      )}
      {pageContext?.pages > 1 && (
        <Button className='pagination-location' disabled>
          Page {page} of {pageContext.pages}
        </Button>
      )}

      {pageContext?.next && (
        <Button onClick={() => setPage(pageContext.next)} rel='next'>
          Next
        </Button>
      )}
    </ButtonGroup>
  );
};

Pagination.propTypes = {
  pageContext: PropTypes.object.isRequired,
};

export default Pagination;
