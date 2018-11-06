<template>
    <div>
        <button class="button button-comp" v-on:click="increment()">+</button>
        <button class="button button-comp-middle">{{ intValue }}</button>
        <button class="button button-comp" v-on:click="decrement()">-</button>
    </div>
</template>

<script>
export default {
  name: 'QuantityButton',
  props: {
    value: {
      default: 0,
      type: Number
    },
    min: {
      default: 0,
      type: Number
    },
    max: {
      default: undefined,
      type: Number
    },
    step: {
      default: 1,
      type: Number
    }
  },
  data () {
    return {
      intValue: 0
    }
  },
  methods: {
    increment () {
      this.intValue = this.intValue + this.step
    },
    decrement () {
      if (this.intValue > 0) this.intValue = this.intValue - this.step
    }
  },
  created () {
    this.intValue = this.value
    if (this.step < 1) this.step = 1
    if (this.max < this.min) this.max = undefined
  }
}
</script>

<style scoped>
.button {
  background-color: white;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  padding: 12px 22px;
  font-size: 14px;
}

.button-comp {
  color: black;
  border: 2px solid #4CAF50;;
}

.button-comp-middle {
  color: black;
  border-top: 2px solid #4CAF50;;
  border-bottom: 2px solid #4CAF50;;
}

.button-comp:hover {
    background-color: #4CAF50;
    color: black;
}

.label {
  resize: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  border: none;
  padding: 12px 22px;
  font-size: 14px;
  margin: 0px -5px 0px -5px;
}

.label-com {
  border-top: 2px solid #4CAF50;
  border-bottom: 2px solid #4CAF50;
}

</style>
