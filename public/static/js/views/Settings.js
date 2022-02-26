import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Settings");
  }
  async getHTML() {
    return `
            <h1> Settings Title </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit alias rerum neque earum ducimus! Saepe quia officiis pariatur, dolores, officia quas et recusandae iure voluptatum suscipit animi nam tempora incidunt?
            </p>
            <p>
                <a href="/" data-link>To dashboard</a>
            </p>
        `;
  }
}
