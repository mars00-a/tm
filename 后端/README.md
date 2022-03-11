# Tmall_SpringBoot

## 1.技术说明

1. 开发平台采用SpringBoot
2. 持久层采用Mybatis-plus（包含Mybatis，也可以使用Mybatis）
3. 安全框架采用shiro
4. 搜索引擎采用ElasticSearch（采用spring data jpa 整合的elasticsearch）
5. 缓存采用Redis
6. 前端采用ThymeLeaf

## 2.小组件

1. Redis ：不做版本要求，但是不能过于早期版本
2. MySQL：采用8.x版本
3. ElasticSearch：7.12.0版本
4. Kibana：与ElasticSearch保持相同版本
5. es-head（可以不需要）：谷歌浏览器插件，用于查看elasticsearch集群状态
6. Lombok：需要在IDEA下载插件

## 3.说明

> 已经对原有的教程代码进行整理修改测试，原有教程代码因为springboot版本以及组件版本问题代码会出现不同情况，因此进行了修改，如果使用过程中出现了问题以及不清楚的地方请及时和我反馈

- 配置文件采用的是yml类型文件，注意格式，以及准确修改数据库和es的yml配置

- 因为是项目练习，所以将不使用云服务器，一切都在本机完成，前缀全都是localhost或者127.0.0.1

- 注意url访问时的项目前缀，都需要增加/tmall（在yml中已经配置）

- 主程序启动时注意需要启动组件

- Bean类需要序列化的都要implements Serializable

- 采用注解缓存需要在service类上写一个全局的cachename（已经写好了一个测试controller和service）

- static文件放置静态文件，templates中放置html文件

- 可以自定义filter和interceptor，记得在WebMvcConfig中添加

- 可以看一下test中的代码，其中包含一些知识点用法

- 需要使用esDao时需要将该类注释打开
  
- 我将部分测试用例保留，可以选择删除

- gitee上传时中有一部分空文件会包含.keep文件，克隆后删除即可

  >  **每个人分配到的任务中可能会存在交叉的可能，一定要交流**