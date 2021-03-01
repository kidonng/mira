# [Magisk](https://github.com/topjohnwu/Magisk)

<script>
export default {
  data: () => ({
    mirrors: {
      fastgit: 'https://fastgit.org/'
    },
    mirror: 'fastgit',
    channel: 'stable',
  }),
  computed: {
    url() {
      const url = new URL(location)
      url.pathname = '/api/magisk'
      url.searchParams.set('mirror', this.mirror)
      url.searchParams.set('channel', this.channel)
      return url.toString()
    }
  },
  methods: {
    copy() {
      navigator.clipboard.writeText(this.url).then(() => alert('复制成功！'))
    }
  }
}
</script>

## 使用方法

1. <label>
   选择镜像：
     <select v-model="mirror">
       <option value="fastgit">FastGit</option>
     </select>
   </label> (<a :href="mirrors[mirror]">{{ mirrors[mirror] }}</a>)
2. <label>
   选择更新通道：
     <select v-model="channel">
       <option value="stable">Stable</option>
       <option value="beta">Beta</option>
       <option value="canary">Canary</option>
     </select>
   </label>
3. 在 Magisk 应用的**更新通道**选项中选择 **Custom Channel** 并填入以下地址（点击复制）：

   <span>
     <code @click="copy">{{ url }}</code>
   </span>
