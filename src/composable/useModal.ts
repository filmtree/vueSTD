// useModal.ts
import { ref, onMounted, onUnmounted } from 'vue'

export function useModal() {
  const isModalOpen = ref(false)

  function openModal() {
    isModalOpen.value = true
  }

  function closeModal() {
    isModalOpen.value = false
  }

  function handleOutsideClick(event: MouseEvent) {
    if (event.target instanceof Element && !event.target.closest('.modal')) {
      closeModal()
    }
  }

  onMounted(() => {
    document.addEventListener('click', handleOutsideClick)
  })

  onUnmounted(() => {
    document.removeEventListener('click', handleOutsideClick)
  })

  return { isModalOpen, openModal, closeModal }
}
