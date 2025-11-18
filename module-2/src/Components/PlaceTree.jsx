import React from 'react'

export default function PlaceTree({place}) {

    const childPlaces = place.childPlaces;

  return (
    <div>
      <li>{place.title}
       {
        childPlaces.length > 0 && (
          <ol>
            {childPlaces.map(childPlace => <PlaceTree place={childPlace} key={childPlace.id} />)}
          </ol>
        )
       }
       </li> 
    </div>
  )
}
