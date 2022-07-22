import React from "react";
import "./Values.scss";

type Ref = HTMLDivElement;
type Props = {};

const Values = React.forwardRef<Ref, Props>((props, ref) => {
  return (
    <div ref={ref} className="values">
      <div className="values_container">
        <div className="values_paragraph">
          <p className="values_paragraph_title">Lorem Ipsum</p>
          <p className="values_paragraph_text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="values_paragraph">
          <p className="values_paragraph_title">Lorem Ipsum</p>
          <p className="values_paragraph_text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
        <div className="values_paragraph">
          <p className="values_paragraph_title">Lorem Ipsum</p>
          <p className="values_paragraph_text">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
        </div>
      </div>
    </div>
  );
});

export default Values;
