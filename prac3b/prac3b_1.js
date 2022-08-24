const obj = {
  log: ["20CS082", "Jheel", "Shah"],
  get latest() {
    if (this.log.length === 0) return undefined;
    return `My name is ${this.log[1]} ${this.log[2]} `;
  },
};
console.log(obj.latest);
