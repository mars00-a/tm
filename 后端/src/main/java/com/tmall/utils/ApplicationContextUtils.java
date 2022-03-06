package com.tmall.utils;

import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Component;

@Component
public class ApplicationContextUtils implements ApplicationContextAware {
    private static ApplicationContext applicationContext;

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        if (ApplicationContextUtils.applicationContext == null) {
            ApplicationContextUtils.applicationContext = applicationContext;
        }
    }

    public static ApplicationContext getApplicationContext() {
        return applicationContext;
    }

    //根据名称获取对象
    public static Object getBean(String name) {
        if (applicationContext == null) {
            return null;
        }
        return applicationContext.getBean(name);
    }

    //根据类型获取对象
    public static <T> T getBean(Class<T> requestType) {
        if (applicationContext == null) {
            return null;
        }
        return  applicationContext.getBean(requestType);
    }

    //根据类型和名称获取对象
    public static <T> T getBean(String name,Class<T> requestType) {
        if (applicationContext == null) {
            return null;
        }
        return applicationContext.getBean(name, requestType);
    }
}
