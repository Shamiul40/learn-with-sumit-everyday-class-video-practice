import React from 'react'
import { initialTravelPlan } from './data';
import PlaceTree from './PlaceTree';

export default function NestedState() {

    const [plan, setPlan] = React.useState(initialTravelPlan);
    const planets = plan.childPlaces;
  return (
    <div>
      <h1>Places to visit</h1>
      <ol>
        {planets.map(place => <PlaceTree place={place} key={place.id} />)}
      </ol>
    </div>
  )
}
