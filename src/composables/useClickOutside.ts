import { onBeforeUnmount, onMounted, Ref } from "vue";

export function useClickOutside(target_ref: Ref<HTMLElement | undefined>, cb: () => void) {
  if (!target_ref) return;

  const listener = (e: MouseEvent) => {
    // If clicking inside the target, do nothing
    if (e.target === target_ref.value || e.composedPath().includes(target_ref.value!)) return
    cb();
  }

  onMounted(() => {
    window.addEventListener("click", listener);
  })
  onBeforeUnmount(() => {
    window.removeEventListener("click", listener);
  })

  return listener
}