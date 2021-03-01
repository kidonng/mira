# [Scoop](https://scoop.sh/)

<script>
export default {
  data: () => ({
    source: 'https://github.com/ScoopInstaller/Install/blob/master/install.ps1',
    filename: 'scoop-install.ps1',
  })
}
</script>

## 使用方法

1. 从下面选一个镜像
2. 点击**使用此补丁**
3. 执行下载的脚本进行安装

## [FastGit](https://fastgit.org/)

<Patch :source="source" :filename="filename">

```diff
--- install.ps1	2021-02-26 23:21:59.000000000 +0800
+++ install-FastGit.ps1	2021-02-26 23:22:00.000000000 +0800
@@ -482,8 +482,8 @@
 $SCOOP_CONFIG_FILE = "$SCOOP_CONFIG_HOME\scoop\config.json"

 # TODO: Use a specific version of Scoop and the main bucket
-$SCOOP_PACKAGE_REPO = "https://github.com/lukesampson/scoop/archive/master.zip"
-$SCOOP_MAIN_BUCKET_REPO = "https://github.com/ScoopInstaller/Main/archive/master.zip"
+$SCOOP_PACKAGE_REPO = "https://archive.fastgit.org/lukesampson/scoop/archive/master.zip"
+$SCOOP_MAIN_BUCKET_REPO = "https://archive.fastgit.org/ScoopInstaller/Main/archive/master.zip"

 # Quit if anything goes wrong
 $oldErrorActionPreference = $ErrorActionPreference
```

</Patch>
