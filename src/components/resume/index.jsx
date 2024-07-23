import LayoutSection from "../shared/layout";
import Education from "./education";
// import Exprience from "./exprience";

import Technical from "./technical";
const Resume = () => {
  return (
    <LayoutSection>
      <Technical />
      {/* <Exprience /> */}
      <Education />
    </LayoutSection>
  );
};

export default Resume;
