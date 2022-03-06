package com.tmall.service;


import com.tmall.bean.Test;
import org.springframework.cache.annotation.CacheConfig;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
@CacheConfig(cacheNames = "user")
public class TestService {

    @Cacheable(key = "1")
    public HashMap test(){
        HashMap hashMap = new HashMap();
        hashMap.put("user1", new Test("niechen", 18));
        hashMap.put("user2", new Test("lizongqing", 20));
        return hashMap;
    }

    @Cacheable(key = "2")
    public Test test1(){
       return new Test("niechen", 20);
    }

}
