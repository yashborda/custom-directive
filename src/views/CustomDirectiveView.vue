<script>
const FontSize = {
  mounted: (el, binding, vnode, prevVnode) => {
    console.log(el, "el");
    console.log(binding, "binding");
    console.log(vnode, "vnode");
    console.log(prevVnode, "prevVnode");
    if (binding.value) {
      el.style.fontSize = binding.value + "px";
    }

    let size;
    let color;
    switch (binding.arg) {
      case "small":
        size = 10;
        color = "yellow";
        break;
      case "medium":
        size = 20;
        color = "blue";
        break;
      case "large":
        size = 30;
        color = "green";
        break;

      default:
        size = 50;
        color = "green";
        break;
    }
    el.style.fontSize = size + "px";
    el.style.color = color;
  },
  updated: (el, binding) => {
    if (binding.value) {
      el.style.fontSize = binding.value + "px";
    }
  },
};
const Demo = {
  mounted: (el, binding) => {
    el.style.color = binding.value.color;
    if (binding.value.booleanvalue) {
      console.log("pass any function");
      el.style.fontSize = "30px";
    } else {
      console.log("pass any function");
    }
  },
};
export default {
  directives: {
    // Custom Direcative
    FontSize,
    Demo,
  },
  data() {
    return {
      font_size: 20,
    };
  },
};
</script>

<template>
  <div class="about">
    <h2>Hello, This is normal font custom direcative</h2>
    <div v-font-size>Testing div</div>
    <!-- passing value to custom direcative  -->
    <div v-font-size="50">50 set Testing div</div>

    <br />
    <br />

    <div v-font-size="font_size">Increment font div</div>
    <button @click="font_size += 10">increment font size</button>
    <br />
    <br />
    <br />

    <div v-font-size:small>passing argument div</div>
    <div v-font-size:medium>passing argument div</div>
    <div v-font-size:large>passing argument div</div>
    <div v-font-size:default>passing argument div</div>
    <br />
    <br />
    <br />
    <!-- passing object value to custom direcative  -->
    <div v-demo="{ color: 'red', booleanvalue: true }">normal div</div>
    <div v-demo="{ color: 'blue' }">normal div</div>

    <div></div>
  </div>
</template>
