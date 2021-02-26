# [Homebrew](https://brew.sh/)

<script>
export default {
  data: () => ({
    sourceURL: 'https://github.com/Homebrew/install/blob/master/install.sh',
    filename: 'homebrew-install.sh',
  })
}
</script>

## 使用方法

1. 从下面选一个镜像
2. 点击**使用此补丁**
3. 执行下载的脚本进行安装

## [USTC](https://mirrors.ustc.edu.cn/help/brew.git.html)

<Patch :sourceURL="sourceURL" :filename="filename">

```diff
--- install.sh	2021-02-27 00:55:01.000000000 +0800
+++ install-USTC.sh	2021-02-27 01:00:04.000000000 +0800
@@ -36,7 +36,7 @@
     HOMEBREW_REPOSITORY="${HOMEBREW_PREFIX}/Homebrew"
   fi
   HOMEBREW_CACHE="${HOME}/Library/Caches/Homebrew"
-  HOMEBREW_CORE_GIT_REMOTE="https://github.com/Homebrew/homebrew-core"
+  HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/homebrew-core.git"

   STAT="stat -f"
   CHOWN="/usr/sbin/chown"
@@ -50,7 +50,7 @@
   # and ~/.linuxbrew (which is unsupported) if run interactively.
   HOMEBREW_PREFIX_DEFAULT="/home/linuxbrew/.linuxbrew"
   HOMEBREW_CACHE="${HOME}/.cache/Homebrew"
-  HOMEBREW_CORE_GIT_REMOTE="https://github.com/Homebrew/linuxbrew-core"
+  HOMEBREW_CORE_GIT_REMOTE="https://mirrors.ustc.edu.cn/linuxbrew-core.git"

   STAT="stat --printf"
   CHOWN="/bin/chown"
@@ -58,7 +58,7 @@
   GROUP="$(id -gn)"
   TOUCH="/bin/touch"
 fi
-HOMEBREW_BREW_GIT_REMOTE="https://github.com/Homebrew/brew"
+HOMEBREW_BREW_GIT_REMOTE="https://mirrors.ustc.edu.cn/brew.git"

 # TODO: bump version when new macOS is released or announced
 MACOS_NEWEST_UNSUPPORTED="12.0"
```

</Patch>
