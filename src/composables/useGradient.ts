import { ref } from "vue"

const gradientList = [
  ['#4158D0', '#C850C0', '#FFCC70'],
  ['#FA8BFF', '#2BD2FF', '#2BFF88'],
  ['#0093E9', '#80D0C7'],
  ['#FBAB7E', '#F7CE68'],
  ['#08AEEA', '#2AF598'],
  ['#F4D03F', '#16A085'],
  ['#74EBD5', '#9FACE6']
]

export const useGradient = () => {
  const randomIdx = Math.floor(Math.random() * gradientList.length)
  const randomGradient = gradientList[randomIdx]

  const gradient = ref<string[]>(gradientList[randomIdx])
  const color = ref<string>('')
  const randomDeg = ref<number>(Math.floor(Math.random() * 360))

  color.value = randomGradient[0]

  return {
    gradient,
    color,
    randomDeg,
  }
}