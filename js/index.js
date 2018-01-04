/**
 项目JS主入口
 以依赖layui的layer和form模块为例
 **/

layui.use('carousel', function(){
    var carousel = layui.carousel;
    //建造实例
    carousel.render({
        elem: '#test1'
        ,width: '100%' //设置容器宽度
        ,arrow: 'always' //始终显示箭头
        //,anim: 'updown' //切换动画方式
    });
});
layui.use('element', function(){
    var element = layui.element;

    //一些事件监听
    element.on('tab(demo)', function(data){
        console.log(data);
    });
});

layui.use('element', function(){
    var element = layui.element;

    //…
});


new Vue({
    el: '#app-1',
    data:{
        items:{
            content:'',//初始化内容为空
            completed:false,
        },
        todos:[]
    },
    methods:{
        addTodo:function () {
            this.todos.push(this.items); //将任务存入数组
            this.items={
                content:'',//初始化内容为空
                completed:false //未完成
            }
        },
        changeState:function (index) {
            let curState=this.todos[index].completed;
            this.todos[index].completed=!curState;
        },
        removeTodo:function (index) {
            this.todos.splice(index,1)
        }
    }
})
























