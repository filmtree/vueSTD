<template>
  <div class="container">

    <div>
      <button v-tooltip="'You have new messages1.'">Test1</button>
      <button v-tooltip="{ content: '<b>Bold</b>', html: true }">HTML</button>
      <button v-tooltip.bottom-start="'You have new messages3.'">Position</button>
      <button v-tooltip.right-end="'You have new messages4.'">Position</button>
      <button v-tooltip="'You have new messages5.'">Test5</button>
      <button v-tooltip="'You have new messages6.'">Test6</button>
    </div>

    <br />

    <div class="tooltip-wrap">
      <VTooltip placement="bottom-start">
        <a>Sponsor me</a>
        <template #popper> Help me fund my Open Source work! </template>
      </VTooltip>
    </div>

    <br />

    <div class="tooltip-wrap">
      <VDropdown :distance="6" :triggers="['hover', 'focus']" placement="bottom-start">
        <button>Hover me Dropdown</button>
        <template #popper>
          <input class="tooltip-content" v-model="msg" placeholder="Tooltip content" />
          <p>{{ msg }}</p>
        </template>
      </VDropdown>
    </div>

    <div class="tooltip-wrap">
      <VDropdown placement="bottom">
        <button>Click me Dropdown</button>
        <template #popper>
          <div class="p-5">
            ✌️ Hello from v-tooltip + Vue 3
          </div>
          <div>
            <button v-close-popper>Close</button>
            <button v-close-popper="true">Close</button>
            <button v-close-popper="false">Don't close</button>
          </div>
        </template>
      </VDropdown>
      <button id="noop-btn">I do nothing.</button>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'test'
    }
  },
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;  
  gap: 20px;
}

.tooltip-wrap {
  display: flex;
  flex-direction: column;  
  align-items: center;  
  gap: 10px;
}


button {
  padding: 8px 16px;
}

</style>