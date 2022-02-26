import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Blogs");
  }
  async getHTML() {
    return `
            <h1> Blogs Title </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit alias rerum neque earum ducimus! Saepe quia officiis pariatur, dolores, officia quas et recusandae iure voluptatum suscipit animi nam tempora incidunt?
            </p>
            <p>
                <a href="/" data-link>View dashboard</a>
            </p>
        `;
  }
}
