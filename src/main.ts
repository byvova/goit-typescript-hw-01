import { content } from "./content";

const button = document.querySelector("button")!;
const input = document.querySelector("input")!;

if (button && input) {
  button.addEventListener("click", () => {
    content(input.value, "hello!");
  });
}