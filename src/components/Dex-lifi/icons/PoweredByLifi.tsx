import type { SVGProps } from "react";
import styled from "styled-components";

const Typography = styled("p")`
  // color: #3e389f;
  font-family: "Rubik", sans-serif;
  font-size: 14px;
  cursor: pointer;
  line-height: 1.5rem;
  margin-top: 5px;
  margin-right: 5px;
  // margin-left: auto;
`;

export const PoweredByLifi = (props: SVGProps<SVGSVGElement>) => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Typography>Powered by </Typography>
    <svg
      width="84"
      height="32"
      viewBox="0 0 84 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      // style="height: 16px; width: 42px;"
      style={{
        height: "16px",
        width: "42px",
        marginTop: "7px",
      }}
      {...props}
    >
      <path d="M50.6689 20.5714H42.6849V8H39V24H50.6689V20.5714Z"></path>
      <path d="M53.0717 24H56.7566V8H53.0717V24Z"></path>
      <path d="M59.5088 24H63.0117V20.48H59.5088V24Z"></path>
      <path d="M69.4396 17.76H77.1506V14.6057H69.4396V11.2457H77.8103V8H65.7547V24H69.4396V17.76Z"></path>
      <path d="M80.3151 24H84V8H80.3151V24Z"></path>
      <path d="M14.6163 21.6947L5.1336 23.89C4.78772 23.9766 4.52832 24.3232 4.52832 24.6698V31.1978C4.52832 31.7467 4.96066 32.0933 5.50829 31.9777L18.7379 28.9159C19.2856 28.8004 19.5162 28.2805 19.2856 27.7894L16.8933 22.8501C16.5186 22.0702 16.8933 21.2614 17.7291 21.0881L26.376 19.0084C26.9813 18.864 27.5001 18.2285 27.5001 17.593V11.5561C27.5001 11.0073 27.0677 10.6318 26.5201 10.7762L14.0398 13.7514C13.2616 13.9247 12.9157 14.6757 13.2616 15.3978L15.4521 19.9327C15.8268 20.7126 15.4521 21.4925 14.6163 21.6947Z"></path>
      <path d="M8.36225 5.3748L10.841 10.4585C11.1581 11.1229 10.841 11.8161 10.1204 11.9606L5.53762 13.0293C4.96116 13.1737 4.5 13.7514 4.5 14.3291V19.7884C4.5 20.7127 5.24939 21.2904 6.1429 21.0882L10.4087 20.1061C10.9851 19.9906 11.4463 19.384 11.4463 18.8063L11.4751 13.2026C11.4751 12.4227 12.1092 11.6428 12.8586 11.4695L26.8376 8.11886C27.1835 8.03221 27.4429 7.68559 27.4429 7.33897V0.810981C27.4429 0.262168 27.0106 -0.113336 26.4629 0.0310883L8.90988 4.24829C8.36225 4.36383 8.13167 4.88375 8.36225 5.3748Z"></path>
    </svg>
  </div>
);
