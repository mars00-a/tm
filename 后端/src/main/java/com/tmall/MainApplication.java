package com.tmall;

import com.tmall.utils.PortUtil;
import org.mybatis.spring.annotation.MapperScan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.data.elasticsearch.repository.config.EnableReactiveElasticsearchRepositories;


@SpringBootApplication
@EnableCaching
@MapperScan("com.tmall.mapper")
/*@EnableReactiveElasticsearchRepositories("com.tmall.es")*/
public class MainApplication {
    /**
     * 用不到某个组件时可以暂时注释
     */
    static {
        PortUtil.checkPort(6379,"Redis 服务端",true);
        //PortUtil.checkPort(9200,"ElasticSearch 服务端",true);
        //PortUtil.checkPort(5601,"Kibana 工具", true);
    }
    public static void main(String[] args) {
        SpringApplication.run(MainApplication.class, args);
    }
}
