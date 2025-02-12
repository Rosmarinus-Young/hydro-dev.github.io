# Hydro Cli

:::tip
在使用 cli 之前，请完成数据库配置。  
指令中使用 `<>` 括起来的参数必须给出，用 `[]` 括起来的参数可以给出，若不给出则按照默认设置。  
**用户请根据自己的情况替换掉用 `<>` 或是 `[]` 包括起来的部分（括号也应替换）**
:::

cli 可以帮助用户在控制台下快捷地进行一些操作。

下面给出了一些常用的例子。本文的末尾给出了 [命令大全](/install/cli.html #命令大全)。

## 创建用户

```sh
hydrooj cli user create <mail> <username> <password>
# 该用户的邮箱、用户名和密码

# 如创建邮箱为 hydro@hydro.local，用户名为 Hydro，密码为 hydrohydro 的用户：
hydrooj cli user create hydro@hydro.local Hydro hydrohydro
```

若一切正常，运行该指令后您会从命令行窗口中看到该用户的 uid。

使用 cli 创建完用户后您可以直接以此账号登录 Hydro。

## 设置全站管理员

```sh
hydrooj cli user setSuperAdmin <uid>

# 如设置 uid 为 1 的用户为管理员：
hydrooj cli user setSuperAdmin 1
```

## 设置用户权限

```sh
hydrooj cli user setPriv <uid> <priv>
```

关于参数 `[priv]` ，可阅读 [此文](/dev/PERM_PRIV/)。

## 更改用户密码

```sh
hydrooj cli user setPassword <uid> <password>

# 如将 uid 为 1 的用户的密码改为 hydrohydro：
hydrooj cli user setPassword 1 hydrohydro
```

## 创建评测账号

先创建一个账号。

```sh
hydrooj cli user create <mail> <username> <password>
```

您需要留意运行此指令返回的数字，表示该用户的 `uid`，需要填入下面的指令中，然后给予该账号评测权限。

```sh
hydrooj cli user setJudge <uid>
```

完成后将配置的用户名及密码写入评测机配置文件，评测机即可连接到网页端。

## 命令列表

:::tip
我们已将在一般情况下会用到的指令列在了上方。如果您没有特殊的需要，请阅读上方的部分。
:::

所有于 [此文件夹](https://github.com/hydro-dev/Hydro/tree/master/packages/hydrooj/src/model) 下的，参数全为 `number` 或是 `string` 的函数均可用 cli 调用。

这里并没有列出所有可以运行的指令，因为其中很多功能我们更推荐通过 Web 访问。  
`<arg>` 为必选参数，`[arg]` 为可选参数。

```sh
hydrooj cli blacklist add <ip> # 将 <ip> 拉入黑名单一年
hydrooj cli blacklist get <ip> # 获取黑名单中有关 <ip> 的信息
hydrooj cli blacklist del <ip> # 将 <ip> 移出黑名单
hydrooj cli user create <mail> <uname> <password> [uid] [regip] [priv]
# 创建邮箱为 <mail>，用户名为 <uname>，密码为 <password>，ID 为 [uid]，注册 ip 为 [regip]，权限为 [priv] 的用户
hydrooj cli user getPrefixList <domainId> <prefix> [limit] 
# 查询在 ID 为 <domianId> 的域中，用户名前缀为 <prefix> 的用户列表，最多 [limit] 个用户。
hydrooj cli user setPriv <uid> <priv> # 将 ID 为 <uid> 的用户的权限设为 <priv>
hydrooj cli user setPassword <uid> <password> # 将 ID 为 <uid> 的用户的密码设置为 <password>
hydrooj cli user setEmail <uid> <mail> # 将 ID 为 <uid> 的用户的邮箱设置为 <mail>
hydrooj cli user setSuperAdmin <uid> # 将 ID 为 <uid> 的用户设为全站管理员。
hydrooj cli user setJudge <uid> # 将 ID 为 <uid> 的用户设为管理帐号
hydrooj cli user ban <uid> # 取消 ID 为 <uid> 的用户的全部权限
hydrooj cli system set <key> <value> # 修改系统设置 <key> 值为 <value>
```
