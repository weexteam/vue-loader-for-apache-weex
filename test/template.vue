<template>
  <foo a="1" :b="a+2" v-if="expr">
    <child>
      <text>Hello</text>
    </child>
  </foo>
</template>
