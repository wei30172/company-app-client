import React from "react";
import "./values.scss";

type Ref = HTMLDivElement;
type Props = {};

const Values = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <div ref={ref} className="values">
      <div className="values_container">
        <div className="values_paragraph">
          <p className="values_paragraph_title">Think big and scale</p>
          <p className="values_paragraph_text">
            We're always looking for ways to simplify, do better, and go faster
            to impact over 2.2 billion women.
          </p>
        </div>
        <div className="values_paragraph">
          <p className="values_paragraph_title">Take ownership</p>
          <p className="values_paragraph_text">
            You'll be given the autotomy and trust you need. It's okay to fail,
            learn, and try again - that's how we grow!
          </p>
        </div>
        <div className="values_paragraph">
          <p className="values_paragraph_title">People and Health first</p>
          <p className="values_paragraph_text">
            We take care of our team! We eat healthy, exercise together and
            offer premium healthcare.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Values;
