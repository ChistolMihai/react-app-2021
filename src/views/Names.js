import { Container } from '@material-ui/core';
import React from 'react';
import SearchResults from '../_shared/components/SearchResults';

export default function Names() {
  const search = '';
  return (
    <Container maxWidth="sm">
      <SearchResults search={search ? search : ''} />
    </Container>
  )
}
