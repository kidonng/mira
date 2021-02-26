<template>
  <div>
    <p>
      <button @click="patch">使用此补丁</button>
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
    sourceURL: String,
    filename: String,
  },
  methods: {
    async patch(e) {
      const sourceURL = jsdelivr(this.sourceURL)
      const patch = this.$el.querySelector('.language-diff').textContent
      if (!this.source) this.source = await ky(sourceURL).text()
      const patched = applyPatch(this.source, patch)
      save(patched, this.filename)
    },
  },
}
</script>
