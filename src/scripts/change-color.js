AFRAME.registerComponent("change-color", {
  init: function () {
    setInterval(() => {
      console.log("changing color");
      this.el.setAttribute("material", {
        color: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
      });
    }, 1000);
  },
});
