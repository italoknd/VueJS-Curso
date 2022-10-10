<template>
  <div :class="baseStyle" class="alert">
    <p>{{ text_message }}</p>
  </div>
</template>

<script>
export default {
  props: ['baseStyle', 'text_message'],
  name: 'BaseAlert',
  computed: {
    baseStyle() {
      return [
        this.baseStyle === 'success' ? 'success_alert' : '',
        this.baseStyle === 'danger' ? 'danger_alert' : '',
        this.baseStyle === 'warning' ? 'warning_alert' : ''
      ]
    }
  }
}
</script>

<style scoped>
.alert {
  border-radius: 8px;
  color: white;
  padding: 5px;
  margin: 20px 0;
  width: 25vw;
  display: flex;
  justify-content: center;
  font-size: 18px;
}

.danger_alert {
  background: red;
}

.success_alert {
  background: #00eb5a;
}

.warning_alert {
  background: #e75c00;
}
</style>
