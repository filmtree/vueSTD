<script>
import { useEmit } from "vue";

export default {
  emits: ["my-event"],
  setup() {
    const { emit } = useEmit();

    const handleClick = () => {
      emit("my-event", { data: "Hello from child" });
    };

    return {
      handleClick,
    };
  },
};
</script>