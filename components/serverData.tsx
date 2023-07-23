'use client';
import React, { useState } from 'react'
import {getData} from '../app/server-renderd/page'
function serverData() {
  const [data, setData] = useState(null);
  return (
    <div>serverData</div>
  )
}

export default serverData
