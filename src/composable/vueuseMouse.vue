<script setup>
//===================================================================================
//
//  ##   ##   ####  #####        ###    ###   #####   ##   ##   ####  #####
//  ##   ##  ##     ##           ## #  # ##  ##   ##  ##   ##  ##     ##
//  ##   ##   ###   #####        ##  ##  ##  ##   ##  ##   ##   ###   #####
//  ##   ##     ##  ##           ##      ##  ##   ##  ##   ##     ##  ##
//   #####   ####   #####        ##      ##   #####    #####   ####   #####
//
//===================================================================================

import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

// tracks mouse position
const { x, y } = useMouse()

// is user prefers dark theme
const isDark = usePreferredDark()

// persist state in localStorage
const store = useLocalStorage('my-storage', {
  name: 'Apple',
  color: 'red'
})
</script>

<template>마우스 위치: {{ x }}, {{ y }}</template>