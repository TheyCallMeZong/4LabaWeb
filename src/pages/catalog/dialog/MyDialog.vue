<template>
  <div class="v-popup">
    <div class="v-popup__header">
      <span>
        <i
            class="material-icons close-btn"
            @click="closeInfo"
        >
          cancel
        </i>
      </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyDialog",
  methods:{
    closeInfo(){
      this.$emit('closeInfo')
    }
  }
}
</script>

<style lang="scss">
.v-popup {
  padding: 16px;
  position: fixed;
  width: 400px;
  background: #D2B48C;
  box-shadow: 0 0 17px 0 #e7e7e7;
  z-index: 10;
  display: table;
  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
