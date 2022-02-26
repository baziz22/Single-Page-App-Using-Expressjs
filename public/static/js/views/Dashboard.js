import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Dashboard");
  }
  async getHTML() {
    return `
            <h1> Dashboard Title </h1>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit alias rerum neque earum ducimus! Saepe quia officiis pariatur, dolores, officia quas et recusandae iure voluptatum suscipit animi nam tempora incidunt?
            </p>
            <p>
                <a href="/blogs" data-link>View recent blog</a>
            </p>
        `;
  }
}
