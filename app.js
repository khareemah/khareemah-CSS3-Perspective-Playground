const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      red: 167,
      green: 241,
      blue: 162,
      alpha: 5,
    };
  },
  methods: {
    reset() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.red = 167;
      this.green = 241;
      this.blue = 162;
      this.alpha = 5;
    },
    copy() {
      const el = document.createElement("textarea");
      el.setAttribute("read-only", "");
      el.value = `
      transform: ${this.box[1].transform}
      backgroundColor: ${this.box[0].backgroundColor}
      `;
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
    },
  },
  computed: {
    box() {
      return [
        {
          backgroundColor: `rgba(
            ${this.red}, ${this.blue}, ${this.green}, ${this.alpha / 10}
          )`,
        },
        {
          transform: `
        perspective(${this.perspective}px)
        rotateX(${this.rotateX}deg)
        rotateY(${this.rotateY}deg)
        rotateZ(${this.rotateZ}deg)
         `,
        },
      ];
    },
  },
}).mount("#app");
