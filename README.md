# monorepo with pnpm and nx

<https://dev.to/nx/setup-a-monorepo-with-pnpm-workspaces-and-speed-it-up-with-nx-1eem>

## 常用命令

```shell

# pnpm 相关
pnpm --filter <package-name> <command>

pnpm --filter vite-project dev

# nx 相关
nx <target> <project>

# target 就是build、dev这些scripts命令

# 如
nx build shared-ui
nx dev vite-project
nx build vite-project

# nx 的好处之一是缓存计算功能，build一次后再进行build，速度非常快


nx graph
# >  NX   Project graph started at http://127.0.0.1:4211/projects
# 显式项目之间的依赖关系图

```
