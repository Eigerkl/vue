
## 组件
#### 全局注册
注册全局组件使用` Vue.component(tagName,options) `

对于自定义标签的命名Vue.js不强制遵循W3C规则(小写，并且包含一个短杠)

组件注册后，边可以作为自定义元素


        <div id="example">
            <my-component></my-component>
        </div>        
###### 确保在初始化根实例之前注册组件

        Vue.component('my-component',{
            template:'<div>A custom component!</div>'
            })

        new Vue({
            el:'#example',
            data:{},
            methods:{}
        })

#### 局部注册
可以通过某个Vue实例/组件的实例选项 `components`注册仅在其作用域中可用的组件

        var Child = {
            template:'<div>A custom component!</div>'
        }

        new Vue({
            components:{
                'my-component':Child
            }
        })

------------------------------------------------------------------

### 生命周期钩子

------------------------------------------------------------------

### 指令
    当表达式的值改变时，将其产生的连带影响，响应式作用于DOM

##### v-bind()   
        <a v-bind:href='url'></a>
    可以简写为
        <a :href="url"></a>

##### v-on()
        <a v-on:click='dosomething'></a>
    可以简写为
        <a @click='dosomething'></a>

##### v-once()
只渲染元素和组件一次。之后数据改变，但渲染处的值不变。  
可以用于优化更新性能

##### v-if()
两个值  true  false

        <div id="app-2" >
            <p v-if='seen'>you can see me</p>
        </div>
        var app2 = new Vue({
            el:'#app-2',
            data:{
                seen:false
            }
        })

-----------------------------------------------------------------

### 计算属性
模板内的表达式十分便利，但是在模板中放入太多逻辑会让模板过重且难以维护。所以对于任何复杂逻辑，都应该使用计算属性

        <div id="app-4">
            <p>original message:'{{msg}}'</p>
            <p>computed reversed message:'{{reversemsg}}'</p>
        </div>
        var app1 = new Vue({
            el:'#app-4',
            data:{
                msg:'this is right'
            },
            computed:{
                reversemsg:function(){
                    return this.msg.split('').reverse().join('')
                }
            }
        })

### 侦听属性
当有一些数据需要随着其他数据变动而变动时。更更好的做法是使用计算属性而不是命令式的watch回调

        <div id="demo">{{fullName}}</div>
        var vm = new Vue({
            el:'#demo',
            data:{
                firstName:'Foo',
                lastName:'Bar',
                fullName:'Foo Bar'
            },
            computed:function(val){
                return this.firstName+' '+this.lastName
            }
        })

##### 计算属性默认只有getter，不过需要时可以自己提供一个setter
