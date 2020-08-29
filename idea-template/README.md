## 1. 类注解

#### 详细参数：

```groovy
<template name="c" value="**&#10; * $ANNOTATION$ &#10; * @author &lt;a href=&quot;mailto:ibaeniu@gmail.com&quot;&gt;NiuBen&lt;/a&gt;&#10; * @date $DATE$ $TIME$&#10; * @see&#10; */" description="类注解" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <variable name="DATE" expression="date()" defaultValue="" alwaysStopAt="true" />
  <variable name="TIME" expression="time()" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### 模板：

```groovy
/**
 * $ANNOTATION$ 
 * @author <a href="mailto:ibaeniu@gmail.com">NiuBen</a>
 * @date $DATE$ $TIME$
 * @see
 */
```



## 2.方法注解

#### 详细参数：

```groovy
<template name="m" value="**&#10; * $ANNOTATION$&#10; * $PARAM$&#10; * @return {@link $ANNOTATIONS$} &#10; * @throws Exception Execution failed, please check the log &#10; */" description="方法注解" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <variable name="PARAM" expression="" defaultValue="groovyScript(&quot; &#9;def result='';   &#9;def params=\&quot;${_1}\&quot;.replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();    &#9;for(i = 0; i &lt; params.size(); i++) {   &#9; &#9;&#9;if(i!=0)result+= ' * ';&#9; &#9;&#9;result+='@param ' + params[i] + ' ' + ((i &lt; (params.size() - 1)) ? '\\n' + '\\t' : '');    &#9;}; &#9;return result&quot;, methodParameters())" alwaysStopAt="true" />
  <variable name="ANNOTATIONS" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### 模板：

```groovy
/**
 * $ANNOTATION$
 * $PARAM$
 * @return {@link $ANNOTATIONS$} 
 * @throws Exception Execution failed, please check the log 
 */
```

#### $PARAM$参数代码：

请在Default Value中设置

```groovy
 groovyScript(" 	def result='';   	def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();    	for(i = 0; i < params.size(); i++) {   	 		if(i!=0)result+= ' * ';	 		result+='@param ' + params[i] + ' ' + ((i < (params.size() - 1)) ? '\\n' + '\\t' : '');    	}; 	return result", methodParameters())
```



## 3.ToString注解

#### 详细参数：

```groovy
 <template name="tostring" value="@Override&#10;public String toString() {&#10;    return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE); &#10;}&#10;" description="ToString方法" toReformat="false" toShortenFQNames="true">
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### 模板：

```groovy
@Override
public String toString() {
    return ToStringBuilder.reflectionToString(this, ToStringStyle.JSON_STYLE); 
}
```

