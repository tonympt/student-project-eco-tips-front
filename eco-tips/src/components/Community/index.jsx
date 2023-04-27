import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Rankings from '@/components/Community/Rankings';

function Community() {
  const { token } = useSelector((state) => (state.user));
  return (
    <Rankings />
  );
}

export default Community;
