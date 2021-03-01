# [Deno](https://deno.land/)

<script>
export default {
  data: () => ({
    shellSourceURL: 'https://github.com/denoland/deno_install/blob/master/install.sh',
    shellFilename: 'deno-install.sh',
    psSourceURL: 'https://github.com/denoland/deno_install/blob/master/install.ps1',
    psFilename: 'deno-install.ps1',
  })
}
</script>

## 使用方法

1. 从下面选一个镜像
2. Windows 选择 PowerShell 脚本，Linux/macOS 选择 Shell 脚本
3. 点击**使用此补丁**
4. 执行下载的脚本进行安装

## [FastGit](https://fastgit.org/)

### PowerShell

<Patch :sourceURL="psSourceURL" :filename="psFilename">

```diff
--- install.ps1	2021-03-01 17:40:56.000000000 +0800
+++ install-FastGit.ps1	2021-03-01 17:42:13.000000000 +0800
@@ -26,9 +26,9 @@
 [Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12

 $DenoUri = if (!$Version) {
-  "https://github.com/denoland/deno/releases/latest/download/deno-${Target}.zip"
+  "https://hub.fastgit.org/denoland/deno/releases/latest/download/deno-${Target}.zip"
 } else {
-  "https://github.com/denoland/deno/releases/download/${Version}/deno-${Target}.zip"
+  "https://download.fastgit.org/denoland/deno/releases/download/${Version}/deno-${Target}.zip"
 }

 if (!(Test-Path $BinDir)) {
```

</Patch>

### Shell

<Patch :sourceURL="shellSourceURL" :filename="shellFilename">

```diff
--- install.sh	2021-03-01 17:06:00.000000000 +0800
+++ install-FastGit.sh	2021-03-01 17:35:41.000000000 +0800
@@ -20,9 +20,9 @@
 fi

 if [ $# -eq 0 ]; then
-	deno_uri="https://github.com/denoland/deno/releases/latest/download/deno-${target}.zip"
+	deno_uri="https://hub.fastgit.org/denoland/deno/releases/latest/download/deno-${target}.zip"
 else
-	deno_uri="https://github.com/denoland/deno/releases/download/${1}/deno-${target}.zip"
+	deno_uri="https://download.fastgit.org/denoland/deno/releases/download/${1}/deno-${target}.zip"
 fi

 deno_install="${DENO_INSTALL:-$HOME/.deno}"
```

</Patch>
