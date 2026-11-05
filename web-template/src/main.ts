const button = document.querySelector<HTMLButtonElement>("#counter")!;
let count = 0;

const render = () => (button.textContent = `Clicked ${count} times`);
button.addEventListener("click", () => {
  count++;
  render();
});
render();
