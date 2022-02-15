import React from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { EventWrapper, ListWrapper } from './style.js';

const List = () => {
  const location = useLocation();
  const searchParams = queryString.parse(location.search);

  /*
  const { isLoading, error, data, isFetching } = useQuery("getData", () =>
    fetch().then((res) => res.json())
  );
  */

  return (
    <ListWrapper>
      {data.map((event, i) => {
        return <EventWrapper key={i}>{event}</EventWrapper>;
      })}
    </ListWrapper>
  );
};

export default List;
