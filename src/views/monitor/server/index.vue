<template>
  <div>
    <svg-icon icon-class="doc" @click="click" />
  </div>
</template>

<script>
export default {
  name: 'Doc',
  methods: {
    click() {
      window.open('http://10.1.2.4:3000', '_blank')
    }
  }
}
</script>
