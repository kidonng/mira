# [Homebrew](https://brew.sh/)

<script>
import { jsdelivr, copy } from './.vuepress/utils.js'

const USTC = 'https://mirrors.ustc.edu.cn/'
const TUNA = 'https://mirrors.tuna.tsinghua.edu.cn/'
const TUNA_HOMEBREW = `${TUNA}git/homebrew/`

export default {
  data: () => ({
    mirrors: {
      ustc: {
        homepage: `${USTC}help/brew.git.html`,
        brew: `${USTC}brew.git`,
        macos: `${USTC}homebrew-core.git`,
        linux: `${USTC}linuxbrew-core.git`,
      },
      tuna: {
        homepage: `${TUNA}help/homebrew/`,
        brew: `${TUNA_HOMEBREW}brew.git`,
        macos: `${TUNA_HOMEBREW}homebrew-core.git`,
        linux: `${TUNA_HOMEBREW}linuxbrew-core.git`,
      }
    },
    os: 'macos',
    mirror: 'ustc',
  }),
  methods: { jsdelivr, copy },
}
</script>

## 使用方法

1. <label>
   选择镜像：
     <select v-model="mirror">
       <option value="ustc">USTC</option>
       <option value="tuna">TUNA</option>
     </select>
   </label> (<a :href="mirrors[mirror].homepage">{{ mirrors[mirror].homepage }}</a>)
2. <label>
   选择系统：
     <select v-model="os">
       <option value="macos">macOS</option>
       <option value="linux">Linux</option>
     </select>
   </label>
3. 执行以下代码（点击复制）：

   <pre @click="e => copy(e, 'pre')">
   <code>export HOMEBREW_BREW_GIT_REMOTE="{{ mirrors[mirror].brew }}"</code>
   <code>export HOMEBREW_CORE_GIT_REMOTE="{{ mirrors[mirror][os] }}"</code>
   </pre>

4. <a :href="jsdelivr('https://github.com/Homebrew/install/raw/master/install.sh')">下载脚本</a>并执行
