import React from 'react'
import { people } from './Dataa'
import {  getImageUrl } from './Display';

export default function Portal() {
    const person = people.map(per =>
         <li>
                        <img
                          src={getImageUrl(per)}
                          alt={per.name}
                        />
                        <p>
                          <b>{per.name}</b>
                          Age :{ per.age }
                            Gender :{ per.gender }
                           Contact :{per.contact}
                           Contact :{per.email}
                        </p>
                      </li>
   )
  return (
    <ul>{person}</ul>
  )
}
