<template>
  <div>
    <p>
      <button @click="usePatch">使用此补丁</button>
    </p>
    <slot />
  </div>
</template>

<script>
import { applyPatch } from 'diff'
import ky from 'ky'
import { jsdelivr, save } from '../utils.js'

export default {
  props: {
    source: String,
    filename: String,
  },
  methods: {
    async usePatch() {
      const raw = await ky(jsdelivr(this.source)).text()
      const patched = applyPatch(raw, this.patch)
      if (!patched) return alert('应用补丁失败！请报告此问题。')
      save(patched, this.filename)
    },
  },
  mounted() {
    this.patch = this.$el.querySelector('.language-diff').textContent
  },
}
</script>
