const { createApp } = Vue;
let vm = createApp({
  data() {
    return {
      num1: 300,
      num2: 230,
      num11: 0,
      num12: 0,
      total: "",
      total1: "",
      styleobj: {
        width: "100px",
        height: "100px",
        backgroundColor: "red",
      },
      hreflink: "https://www.google.com",
    };
  },
  methods: {
    afiseazaTotal: function (event) {
      console.log(event);
      return (this.total = this.num1 + this.num2);
    },
        afiseazaTotal2: function (a, b) {
        this.num11 = a;
        this.num12 = b;
        return (this.total1 = this.num11 + this.num12);
        },
    changebgcolor: function () {
      this.styleobj.backgroundColor = "green";
    },
    originalcolor: function () {
      this.styleobj.backgroundColor = "red";
    },
  },
}).mount("#databinding");
