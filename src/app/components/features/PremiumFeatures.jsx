import Features from "./Features";
import styled from "styled-components";

const Section = styled.section`
  padding: 84px var(--app-padding-a);
  color: black;
`;

// premiumBenefits {
//     padding: 84px var(--app-padding-a);
//     color: black;
//   }

const H2 = styled.h2`
  font-size: 39px;
  font-weight: 700;
  line-height: 46px;
  letter-spacing: -0.6000000238418579px;
  text-align: center;
  margin-bottom: 48px;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default function PremiumFeatures() {
  return (
    <Section>
      <H2>The power of Premium</H2>
      <Div className="benefits">
        <Features />
      </Div>
    </Section>
  );
}
