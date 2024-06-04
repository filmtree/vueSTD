<template>
  <div></div>
  <!--	-->
</template>

<script>
export default {
  emits: ["my-event"],
  setup(props, context) {
    const handleClick = () => {
      context.emit("my-event", { data: "Hello from child" });
    };

    return {
      handleClick,
    };
  },
};
</script>

