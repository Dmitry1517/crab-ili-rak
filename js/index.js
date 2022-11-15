const App = {
  data() {
    return {
      field: [
        { id: 1, target: false, tankImg: "" },
        { id: 2, target: false, tankImg: "" },
        { id: 3, target: false, tankImg: "" },
        { id: 4, target: false, tankImg: "" },
        { id: 5, target: false, tankImg: "" },
        { id: 6, target: false, tankImg: "" },
        { id: 7, target: false, tankImg: "" },
        { id: 8, target: false, tankImg: "" },
        { id: 9, target: false, tankImg: "" },
        { id: 10, target: false, tankImg: "" },
        { id: 11, target: false, tankImg: "" },
        {
          id: 12,
          target: false,
          tankImg: "",
        },
        {
          id: 13,
          target: false,
          tankImg: `<img src="./img/tank.png" class="field__img">`,
        },
        { id: 14, target: false, tankImg: "" },
        { id: 15, target: false, tankImg: "" },
        { id: 16, target: false, tankImg: "" },
        { id: 17, target: false, tankImg: "" },
        { id: 18, target: false, tankImg: "" },
        { id: 19, target: false, tankImg: "" },
        { id: 20, target: false, tankImg: "" },
        { id: 21, target: true, tankImg: "" },
        { id: 22, target: false, tankImg: "" },
        { id: 23, target: false, tankImg: "" },
        { id: 24, target: false, tankImg: "" },
        { id: 25, target: false, tankImg: "" },
      ],
      modal: {
        title1: "Привет, танкист!",
        btn1: "Подтвердить",
        btn2: "квалификацию",
        text: "Для дальнейшей игры в TANKS BLITZ необходимо подтвердить квалификацию опытного воина или признаться раком и удалить игру...",
      },
      task: "Задача. Возьми танк на прицел и выстрели",
      life: 5,
      // endGame: false,
    };
  },

  methods: {
    fire() {
      let tar = document.querySelector(".target");
      this.field[
        tar.id - 1
      ].tankImg = `<img src="./img/bah.png" class="field__img">`;
      console.log(tar.id);
    },
    closeModal() {
      document.querySelector(".modal").close();
    },
    translateUp() {
      let tar = document.querySelector(".target");
      if (tar.id > 5) {
        let idx = this.field.findIndex((item) => item.id == tar.id);
        this.field[idx].target = false;
        this.field[idx - 5].target = true;
        if (
          this.field[idx - 5].target &&
          this.field[idx - 5].tankImg ===
            `<img src="./img/tank.png" class="field__img">`
        ) {
          this.field[idx - 5].tankImg = "";
          let randomIdx = Math.floor(Math.random() * this.field.length);

          this.field[
            randomIdx
          ].tankImg = `<img src="./img/tank.png" class="field__img">`;

          if (randomIdx === idx - 5) {
            this.field[randomIdx].tankImg = "";
            this.field[
              randomIdx + 1
            ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            if (randomIdx === 24) {
              this.field[
                randomIdx - 1
              ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            }
          }
          this.life -= 1;
          if (this.life === 0) {
            document.querySelector(".modalend").showModal();
          }
        }
      }
    },
    translateDown() {
      let tar = document.querySelector(".target");
      if (tar.id < 21) {
        let idx = this.field.findIndex((item) => item.id == tar.id);
        this.field[idx].target = false;
        this.field[idx + 5].target = true;
        if (
          this.field[idx + 5].target &&
          this.field[idx + 5].tankImg ===
            `<img src="./img/tank.png" class="field__img">`
        ) {
          this.field[idx + 5].tankImg = "";
          let randomIdx = Math.floor(Math.random() * this.field.length);
          this.field[
            randomIdx
          ].tankImg = `<img src="./img/tank.png" class="field__img">`;
          if (randomIdx === idx + 5) {
            this.field[randomIdx].tankImg = "";
            this.field[
              randomIdx + 1
            ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            if (randomIdx === 24) {
              this.field[
                randomIdx - 1
              ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            }
          }
          this.life -= 1;
          if (this.life === 0) {
            document.querySelector(".modalend").showModal();
          }
        }
      }
    },
    translateRight() {
      let tar = document.querySelector(".target");
      if (tar.id < 25) {
        let idx = this.field.findIndex((item) => item.id == tar.id);
        this.field[idx].target = false;
        this.field[idx + 1].target = true;
        if (
          this.field[idx + 1].target &&
          this.field[idx + 1].tankImg ===
            `<img src="./img/tank.png" class="field__img">`
        ) {
          this.field[idx + 1].tankImg = "";
          let randomIdx = Math.floor(Math.random() * this.field.length);
          this.field[
            randomIdx
          ].tankImg = `<img src="./img/tank.png" class="field__img">`;
          if (randomIdx === idx + 1) {
            this.field[randomIdx].tankImg = "";
            this.field[
              randomIdx + 1
            ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            if (randomIdx === 24) {
              this.field[
                randomIdx - 1
              ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            }
          }
          this.life -= 1;
          if (this.life === 0) {
            document.querySelector(".modalend").showModal();
          }
        }
      }
    },
    translateLeft() {
      let tar = document.querySelector(".target");
      if (tar.id > 1) {
        let idx = this.field.findIndex((item) => item.id == tar.id);
        this.field[idx].target = false;
        this.field[idx - 1].target = true;
        if (
          this.field[idx - 1].target &&
          this.field[idx - 1].tankImg ===
            `<img src="./img/tank.png" class="field__img">`
        ) {
          this.field[idx - 1].tankImg = "";
          let randomIdx = Math.floor(Math.random() * this.field.length);
          this.field[
            randomIdx
          ].tankImg = `<img src="./img/tank.png" class="field__img">`;
          if (randomIdx === idx - 1) {
            this.field[randomIdx].tankImg = "";
            this.field[
              randomIdx + 1
            ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            if (randomIdx === 24) {
              this.field[
                randomIdx - 1
              ].tankImg = `<img src="./img/tank.png" class="field__img">`;
            }
          }
          this.life -= 1;
          if (this.life === 0) {
            document.querySelector(".modalend").showModal();
          }
        }
      }
    },
  },

  mounted() {
    document.querySelector(".modal").showModal();
  },
};

Vue.createApp(App).mount("#app");
