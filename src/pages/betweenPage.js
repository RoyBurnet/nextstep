import React from "react";
import Button from "../components/button";
import RangeSlider from "../components/rangeslider";
import Option from "../components/option";

const mainObjective = [
  {
    text: "Collaborate",
    isActive: false,
  },
  {
    text: "Focus",
    isActive: false,
  },
];

const preferredWorkSpace = [
  {
    text: "Open space",
    isActive: false,
  },
  {
    text: "my own space",
    isActive: false,
  },
];

function BetweenPage() {
  return (
    <React.Fragment>
      <Option title='Main objective' options={mainObjective} />
      <Option title='Preffered workspace' options={preferredWorkSpace} />

      <RangeSlider title='Maintenance' minText='Cool' maxText='Warm' />
      <RangeSlider title='Occupancy' minText='Quiet' maxText='Crowded' />
      <RangeSlider title='Air quality' minText='Perfect' maxText='Dont care' />

      <div class='mt-50'>
        <Button
          text='Show me the results'
          isActive={true}
          hasNavigation={true}
          path={"/third-page"}
        />
      </div>
    </React.Fragment>
  );
}

export default BetweenPage;