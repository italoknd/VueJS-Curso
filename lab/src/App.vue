<template>
  <div>
    <Pagination />
    <Editor />
    <AnimatedList />
    <Charts :data="chartData" />
  </div>
</template>

<script>
import Editor from "./components/Editor.vue";
import Pagination from "./components/Pagination.vue";
import AnimatedList from "./components/TransitionGroup/AnimatedList.vue";
import Charts from "./components/VueCharts/Charts.vue";

export default {
  components: {
    Pagination,
    Editor,
    AnimatedList,
    Charts,
  },
  data() {
    return {
      chartData: {
        labels: ["January", "February", "March", "April"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [23, 20, 12, 44],
          },
        ],
      },
    };
  },
};
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700,300);

:root {
  --black: #130f0d;
  --primary: hsl(32, 98%, 56%);
  --white: #f0f0f9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button,
input {
  font-family: "Roboto", sans-serif;
}

html,
body {
  height: 100vh;
  color: var(--white);
}

header {
  display: flex;
  justify-content: center;

  background-color: hsl(32, 89%, 8%);

  /*         box-shadow: 0 1px 4px 0px rgba(0, 0, 0, 0.2); */
  padding: 16px;
}

#paginate {
  width: 100%;

  margin: 32px auto;
}

#paginate .item {
  border-bottom: 1px solid hsl(32, 98%, 12%);
  padding: 16px 32px;
}

#paginate .item:hover {
  background-color: rgba(255, 255, 255, 0.04);
}

#paginate .controls {
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 8px;
}

#paginate .controls div {
  cursor: pointer;

  /* border: 1px solid #eee; */

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 14;
}

#paginate .controls div:not(.numbers),
#paginate .controls div.numbers div {
  width: 40px;
  height: 40px;
}

#paginate .controls div.numbers div:hover,
#paginate .controls div.numbers div.active {
  color: var(--primary);
}
</style>
