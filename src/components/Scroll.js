import React, { useRef, useEffect } from 'react';
import Scrollbar from 'react-smooth-scrollbar';

import { useLocation } from 'react-router-dom';

export default function Scroll({ children }) {
  const ref = useRef(null);
  const { pathname } = useLocation();

  // whnever we open a new window we see the top of it
  useEffect(() => {
    const { scrollbar } = ref.current;
    scrollbar.setPosition(0, 0); // x=0 , y=0 means initial position: ;
  }, [pathname]); // whenever pathname change then this happen

  return (
    <Scrollbar ref={ref} damping=".09">
      {/* damping means how smooth scrll */}
      {children}
    </Scrollbar>
  );
}

/** ************************************************
 when we need only top scroll when we change window
************************************************* 

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Scroll() {
  const { pathname } = useLocation();

  // whnever we open a new window we see the top of it
  useEffect(() => {
    window.scrollTo(0, 0); // x=0 , y=0 means initial position
  }, [pathname]); // whenever pathname change then this happen

  return null;
} */
