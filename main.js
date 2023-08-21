import "/style.css";
import { setupCounter } from "./counter.js";
import testimonials from "./javascripts/testimonials.js";

document.querySelector("#app").innerHTML = `
  <div>
    <p>Default JS entrypoint</p>
  </div>
`;

// setupCounter(document.querySelector("#counter"));
testimonials(document.querySelector(".testimonials"));
