## 开关插件

### 1.方法调用 $().simpleSwitch();

### 2.可选参数,参数是一个对象，该对象中有三组键值对
- size:可以自定义插件大小，默认是80
- theme:可以定义插件的外观，有Flat/FlatRadius/FlatCircle三种，默认是Flat
- callback:可以传一个回调函数

### 使用方式
```
<body>
    <input type="checkbox" class="checkbox1" disabled/>
    <input type="checkbox" class="checkbox1" checked/>
    <input type="checkbox" class="checkbox1" />
</body>

<script>
    $('.checkbox1').simpleSwitch({
          size:100,
          theme:'FlatRadius',
          callback:function(){
            console.log(1);
          }
        });
</script>
```