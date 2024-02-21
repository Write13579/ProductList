// type Product = {
//   name: string;
//   color: string;
//   calories: number;
// }

let products: { name: string; color: string; calories: number }[] = [];

function send() {
  const getName = document.getElementById("name") as HTMLInputElement;
  const getColor = document.getElementById("color") as HTMLInputElement;
  const getCalorie = document.getElementById("calorie") as HTMLInputElement;

  const HEADER = `<tr id="mains">
  <th>names</th>
  <th>colors</th>
  <th>calories</th>
</tr>`;

  const table = document.getElementById("productlist")!;

  if (getName && getColor && getCalorie) {
    products.push({
      name: getName.value,
      color: getColor.value,
      calories: parseInt(getCalorie.value),
    });
  }
  const addText = products
    .map(
      (product) => `<tr>
<td>${product.name === "" ? `<i>nothing typed</i>` : product.name}</td>
<td>${product.color === "" ? `<i>nothing typed</i>` : product.color}</td>
<td>${isNaN(product.calories) ? `<i>not number</i>` : product.calories}</td>
</tr>`
    )
    .join("");

  table.innerHTML = HEADER + addText;

  if (products.length > 0) {
    if (!table.classList.contains("brama")) {
      table.classList.add("brama");
    }
  }
}
