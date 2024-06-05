const { createApp } = Vue;
let vm = createApp({
  data() {
    return {
      fname: "Ion",
      lname: "Popescu",
      address: "Brasov",
      message: "Imi place JavaScript",
    };
  },
  methods: {
    myName: function () {
      return (
        "Eu ma numesc " +
        this.fname +
        " " +
        this.lname +
        " si sunt din " +
        this.address
      );
    },
  },
}).mount("#app");

let app = createApp({
  data() {
    return {
      seen: false,
      limbaje: [
        {
          id: 10,
          text: "JavaScript",
        },
        {
          id: 11,
          text: "Java",
        },
        {
          id: 12,
          text: "PHP",
        },
      ],
      htmlcontent: "<div><h3>Vue Js este interesant!</h3></div>",
    };
  },
}).mount("#app2");
