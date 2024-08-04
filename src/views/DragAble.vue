<template>
  <div>
    <div>
      <button class="btn btn-secondary button" @click="sort">To original order</button>
    </div>

    <div>
      <draggable
          v-model="list"
          :list="list"
          v-bind="dragOptions"
          @start="onDragStart"
          @end="onDragEnd"
          item-key="order"
        >
          <template #item="{ element }">
            <li class="list-group-item">
              <i
                :class="element.fixed ? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'"
                @click="element.fixed = !element.fixed"
                aria-hidden="true"
              ></i>
              {{ element.name }}
            </li>
          </template>
        </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  name: "transition-example-2",
  display: "Transitions",
  order: null,
  components: {
    draggable
  },
  data() {
    return {
      list: message.map((name, index) => {
        return { 
          name, 
          order: index + 1, 
          fixed: false 
        };
      }),
      dragOptions: {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
        dragClass: "dragging"
      },
      drag: false
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    },
    onDragStart() {
      this.drag = true;
    },
    onDragEnd() {
      this.drag = false;
    }
  },
  computed: {
    // dragOptions() {
    //   return {
    //     animation: 0,
    //     group: "description",
    //     disabled: false,
    //     ghostClass: "ghost",
    //     dragClass: "dragging"
    //   };
    // }
  },
};
</script>

<style>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.sortable-chosen.ghost {
  opacity: 1;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}

.sortable-chosen { /* 마우스 따라다니는 고스트 리시트 감추기 */
  opacity: 0;
  cursor: grabbing !important;
}

.sortable-drag {
  opacity: 1;
  cursor: grabbing !important;
}

.sortable-chosen *, 
.sortable-drag * {
  cursor: grabbing !important;
}

</style>
