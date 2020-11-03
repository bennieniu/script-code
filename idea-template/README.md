## 1. 类注解

#### 详细参数：

```groovy
<template name="c" value="**&#10; * $ANNTIONAL1$&#10; * &#10; * @author NiuBen ibaeniu@gmail.com&#10; * @date $DATE$ $TIME$&#10; * @see $ANNTIONAL2$&#10; */" description="class doc definition" toReformat="false" toShortenFQNames="true">
  <variable name="ANNTIONAL1" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <variable name="DATE" expression="date()" defaultValue="" alwaysStopAt="true" />
  <variable name="TIME" expression="time()" defaultValue="" alwaysStopAt="true" />
  <variable name="ANNTIONAL2" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### 模板：

```groovy
**
 * $ANNOTATION$ 
 * @author <a href="mailto:ibaeniu@gmail.com">NiuBen</a>
 * @date $DATE$ $TIME$
 * @see
 */
```



## 2.方法注解

#### 详细参数：

```groovy
<template name="m" value="**&#10; * $ANNOTATION$&#10; * $PARAM$&#10; * @return {@link $ANNOTATIONS$}&#10; * @throws Exception Execution failed, please check the log &#10; */" description="method doc definition" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <variable name="PARAM" expression="groovyScript(&quot; &#9;def result='';   &#9;def params=\&quot;${_1}\&quot;.replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();    &#9;for(i = 0; i &lt; params.size(); i++) {   &#9; &#9;&#9;if(i!=0)result+= ' * ';    &#9; &#9;&#9;result+='@param ' + params[i] + ((i &lt; (params.size() - 1)) ? '\\n' + '\\t' : '');    &#9;};     &#9;return result&quot;, methodParameters()) " defaultValue="" alwaysStopAt="true" />
  <variable name="ANNOTATIONS" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### 模板：

```groovy
**
 * $ANNOTATION$
 * $PARAM$
 * @return {@link $ANNOTATIONS$} 
 * @throws Exception Execution failed, please check the log 
 */
```

#### $PARAM$参数代码：

请在Default Value中设置

```groovy
groovyScript(" 	def result='';   	def params=\"${_1}\".replaceAll('[\\\\[|\\\\]|\\\\s]', '').split(',').toList();    	for(i = 0; i < params.size(); i++) {   	 		if(i!=0)result+= ' * ';    	 		result+='@param ' + params[i] + ((i < (params.size() - 1)) ? '\\n' + '\\t' : '');    	};     	return result", methodParameters()) 
```



### 其他一些注解

#### 单行注释：

```groovy
/** $ANNOTATION$ */
```

```groovy
<template name="/" value="/** $ANNOTATION$ */" description="" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="CSS" value="true" />
    <option name="HTML" value="true" />
    <option name="JAVA_CODE" value="true" />
    <option name="JAVA_SCRIPT" value="true" />
    <option name="REQUEST" value="true" />
    <option name="XML" value="true" />
  </context>
</template>
```

#### 多行注释：

```groovy
/**
 * $ANNOTATION$
 */
```

```groovy
<template name="//" value="/**&#10; * $ANNOTATION$&#10; */" description="" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="CSS" value="true" />
    <option name="HTML" value="true" />
    <option name="JAVA_CODE" value="true" />
    <option name="JAVA_SCRIPT" value="true" />
    <option name="REQUEST" value="true" />
    <option name="XML" value="true" />
  </context>
</template>
```

#### Link注释：

```groovy
{@link $ANNOTATION$}
```

```groovy
<template name="link" value="{@link $ANNOTATION$}" description="" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```

#### log注释：

```groovy
private static final Logger LOGGER = LogManager$ANNOTATION$.getLogger($CLASS$.class);
```

```groovy
<template name="log" value="private static final Logger LOGGER = LogManager$ANNOTATION$.getLogger($CLASS$.class);" description="" toReformat="false" toShortenFQNames="true">
  <variable name="ANNOTATION" expression="annotated(&quot;annotation qname&quot;)" defaultValue="" alwaysStopAt="true" />
  <variable name="CLASS" expression="className()" defaultValue="" alwaysStopAt="true" />
  <context>
    <option name="JAVA_CODE" value="true" />
  </context>
</template>
```



